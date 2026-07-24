import re
import json
import time
import sys
from deep_translator import GoogleTranslator
from indic_transliteration import sanscript

CACHE_FILE = 'translation_cache.json'

# Load cache
try:
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        translation_cache = json.load(f)
except Exception:
    translation_cache = {}

def save_cache():
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(translation_cache, f, ensure_ascii=False, indent=2)

translator = GoogleTranslator(source='te', target='hi')

def translate_safe(text):
    if not text or text.strip() == "":
        return text
    
    # Check cache
    cache_key = f"te->hi:{text}"
    if cache_key in translation_cache:
        return translation_cache[cache_key]
        
    # Extractor of prefix tag/emoji/html
    prefix = ""
    
    # Match HTML tag prefix
    html_match = re.match(r'^(\s*<i[^>]*></i>\s*)(.*)$', text, re.DOTALL)
    if html_match:
        prefix += html_match.group(1)
        text = html_match.group(2)
        
    # Match non-alphabetic, non-telugu, non-devanagari characters at the beginning
    non_lang_match = re.match(r'^([^a-zA-Z\u0c00-\u0c7f\u0900-\u097f]+)(.*)$', text, re.DOTALL)
    if non_lang_match:
        prefix += non_lang_match.group(1)
        text = non_lang_match.group(2)
        
    # Translate
    translated_text = ""
    for attempt in range(3):
        try:
            translated_text = translator.translate(text)
            break
        except Exception as e:
            print(f"Error on translate: {type(e).__name__}. Retrying in 1s...", file=sys.stderr)
            time.sleep(1)
    else:
        # Fallback to original
        translated_text = text
        
    result = prefix + translated_text
    
    # Save to cache
    translation_cache[cache_key] = result
    save_cache()
    
    # Sleep to be friendly to Google Translate
    time.sleep(0.05)
    return result

def transliterate_te_to_hi(text):
    if not text:
        return ""
    # Transliterate Telugu to Devanagari
    return sanscript.transliterate(text, sanscript.TELUGU, sanscript.DEVANAGARI)

def find_matching_char(text, start_idx, open_char, close_char):
    count = 0
    i = start_idx
    while i < len(text):
        if text[i] == open_char:
            count += 1
        elif text[i] == close_char:
            count -= 1
            if count == 0:
                return i
        i += 1
    return -1

def parse_js_object(js_text, start_marker):
    start_idx = js_text.find(start_marker)
    if start_idx == -1:
        return None
    brace_idx = js_text.find('{', start_idx)
    if brace_idx == -1:
        return None
    end_idx = find_matching_char(js_text, brace_idx, '{', '}')
    if end_idx == -1:
        return None
    return js_text[brace_idx:end_idx+1]

def extract_key_values(obj_str):
    lines = obj_str.split('\n')
    results = {}
    current_key = None
    current_val = []
    quote_char = None
    
    for line in lines:
        line_strip = line.strip()
        if not line_strip:
            continue
        
        if current_key is None:
            m = re.match(r'^(\w+):\s*(["\'`])(.*)$', line_strip)
            if m:
                key, quote, rest = m.groups()
                current_key = key
                quote_char = quote
                if rest.endswith(quote_char + ',') or rest.endswith(quote_char):
                    val = rest[:-2] if rest.endswith(',') else rest[:-1]
                    results[key] = (quote_char, val)
                    current_key = None
                else:
                    current_val = [rest]
            else:
                m_num = re.match(r'^(\w+):\s*([^,]+),?$', line_strip)
                if m_num:
                    key, val = m_num.groups()
                    results[key] = (None, val)
        else:
            if line_strip.endswith(quote_char + ',') or line_strip.endswith(quote_char):
                val = line_strip[:-2] if line_strip.endswith(',') else line_strip[:-1]
                current_val.append(val)
                results[current_key] = (quote_char, '\n'.join(current_val))
                current_key = None
            else:
                current_val.append(line)
    return results

def parse_js_array_of_objects(array_str):
    objects = []
    i = 0
    while i < len(array_str):
        idx = array_str.find('{', i)
        if idx == -1:
            break
        end_idx = find_matching_char(array_str, idx, '{', '}')
        if end_idx == -1:
            break
        obj_str = array_str[idx:end_idx+1]
        fields = extract_key_values(obj_str)
        objects.append(fields)
        i = end_idx + 1
    return objects

def format_js_object(fields, indent=4):
    lines = ["{"]
    for k, (quote, val) in fields.items():
        if quote is None:
            lines.append(f"{' ' * indent}{k}: {val},")
        elif quote == '`':
            lines.append(f"{' ' * indent}{k}: `{val}`,")
        else:
            lines.append(f"{' ' * indent}{k}: {quote}{val}{quote},")
    lines.append("  }")
    return '\n'.join(lines)

def main():
    print("Loading app.js...")
    with open('app.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # ----------------------------------------------------
    # Step 1: Translations object
    # ----------------------------------------------------
    print("Processing Translations...")
    t_start = content.find('const translations = {')
    t_open = content.find('{', t_start)
    t_end = find_matching_char(content, t_open, '{', '}')
    
    translations_block = content[t_open:t_end+1]
    te_obj = parse_js_object(translations_block, 'te: {')
    en_obj = parse_js_object(translations_block, 'en: {')
    
    te_dict = extract_key_values(te_obj)
    en_dict = extract_key_values(en_obj)
    
    # Translate te to hi
    hi_keys_vals = {}
    for k, (quote, val) in te_dict.items():
        if quote is not None:
            # Check for manually curated translations or translation overrides
            hi_val = translate_safe(val)
            # Apply overrides for high precision
            if k == 'logo_title':
                hi_val = "श्री अन्नपूर्णा समेत काशी विश्वेश्वर स्वामी मन्दिर"
            elif k == 'logo_location':
                hi_val = "नरसिंगपाडु, पलनाडु जिला"
            elif k == 'nav_home':
                hi_val = "होम"
            elif k == 'nav_history':
                hi_val = "इतिहास"
            elif k == 'nav_poems':
                hi_val = "पद्य संग्रह"
            elif k == 'nav_poet':
                hi_val = "कवि परिचय"
            elif k == 'nav_gallery':
                hi_val = "चित्र दीर्घा"
            elif k == 'nav_festivals':
                hi_val = "त्योहार"
            elif k == 'nav_rituals':
                hi_val = "नित्य सेवाएँ"
            elif k == 'nav_committee':
                hi_val = "समिति"
            elif k == 'nav_contact':
                hi_val = "संपर्क"
            elif k == 'tab_verse':
                hi_val = "पद्य (कविता)"
            elif k == 'tab_meaning':
                hi_val = "भावार्थ"
            elif k == 'tab_translation':
                hi_val = "अंग्रेजी अनुवाद"
            elif k == 'poet_guest_badge':
                hi_val = '<i class="fa-solid fa-crown" style="margin-right: 6px; color: #ffeb3b;"></i>सम्मानित अतिथि • देवस्थानम की ओर से अक्षय साहित्यिक श्रद्धांजलि'
            elif k == 'flower_shower_btn':
                hi_val = "🌸 पुष्पांजलि समर्पण"
            elif k == 'feat2_title':
                hi_val = "दक्षिणाभिमुख अन्नपूर्णा"
                
            # Transliterate verses in inscription keys
            if k.startswith('inscription_v'):
                hi_val = transliterate_te_to_hi(val)
                
            hi_keys_vals[k] = (quote, hi_val)
        else:
            hi_keys_vals[k] = (None, val)
            
    # Format te, en, hi objects
    te_formatted = format_js_object(te_dict, indent=4)
    en_formatted = format_js_object(en_dict, indent=4)
    hi_formatted = format_js_object(hi_keys_vals, indent=4)
    
    new_translations_str = f"{{\n  te: {te_formatted},\n  hi: {hi_formatted},\n  en: {en_formatted}\n}}"
    
    # ----------------------------------------------------
    # Step 2: Poems array
    # ----------------------------------------------------
    print("Processing Poems...")
    p_start = content.find('const poems = [')
    p_open = content.find('[', p_start)
    p_end = find_matching_char(content, p_open, '[', ']')
    
    poems_array_str = content[p_open:p_end+1]
    poems_objects = parse_js_array_of_objects(poems_array_str)
    
    print(f"Loaded {len(poems_objects)} poems.")
    
    for idx, p in enumerate(poems_objects):
        title_te = p['titleTe'][1]
        verse_te = p['verseTe'][1]
        meaning_te = p['wordMeaningTe'][1]
        
        # Translate title
        title_hi = translate_safe(title_te)
        # Transliterate verse
        verse_hi = transliterate_te_to_hi(verse_te)
        # Translate meaning
        meaning_hi = translate_safe(meaning_te)
        
        # Update poem dict
        p['titleHi'] = ('"', title_hi)
        p['verseHi'] = ('`', verse_hi)
        p['wordMeaningHi'] = ('`', meaning_hi)
        
        if (idx + 1) % 10 == 0:
            print(f"Processed {idx + 1}/100 poems.")
            
    # Format poems array
    poems_formatted_list = [format_js_object(p, indent=4) for p in poems_objects]
    new_poems_array_str = f"[\n  {',\n  '.join(poems_formatted_list)}\n]"
    
    # ----------------------------------------------------
    # Step 3: GalleryImages array
    # ----------------------------------------------------
    print("Processing Gallery Images...")
    g_start = content.find('const galleryImages = [')
    g_open = content.find('[', g_start)
    g_end = find_matching_char(content, g_open, '[', ']')
    
    gallery_array_str = content[g_open:g_end+1]
    gallery_objects = parse_js_array_of_objects(gallery_array_str)
    
    print(f"Loaded {len(gallery_objects)} gallery images.")
    
    for idx, g in enumerate(gallery_objects):
        title_te = g['titleTe'][1]
        desc_te = g['descTe'][1]
        
        # Translate
        title_hi = translate_safe(title_te)
        desc_hi = translate_safe(desc_te)
        
        g['titleHi'] = ('"', title_hi)
        g['descHi'] = ('"', desc_hi)
        
    # Format galleryImages array
    gallery_formatted_list = [format_js_object(g, indent=4) for g in gallery_objects]
    new_gallery_array_str = f"[\n  {',\n  '.join(gallery_formatted_list)}\n]"
    
    # ----------------------------------------------------
    # Step 4: Re-assemble app.js
    # ----------------------------------------------------
    print("Re-assembling app.js...")
    # Splitting and replacing
    # Translations
    t_start_idx = content.find('const translations = {')
    t_end_idx = find_matching_char(content, content.find('{', t_start_idx), '{', '}') + 1
    content_t_replaced = content[:t_start_idx] + f"const translations = {new_translations_str}" + content[t_end_idx:]
    
    # Poems (we must search in the modified content!)
    p_start_idx = content_t_replaced.find('const poems = [')
    p_open_idx = content_t_replaced.find('[', p_start_idx)
    p_end_idx = find_matching_char(content_t_replaced, p_open_idx, '[', ']') + 1
    content_p_replaced = content_t_replaced[:p_open_idx] + new_poems_array_str + content_t_replaced[p_end_idx:]
    
    # GalleryImages
    g_start_idx = content_p_replaced.find('const galleryImages = [')
    g_open_idx = content_p_replaced.find('[', g_start_idx)
    g_end_idx = find_matching_char(content_p_replaced, g_open_idx, '[', ']') + 1
    final_content = content_p_replaced[:g_open_idx] + new_gallery_array_str + content_p_replaced[g_end_idx:]
    
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("Saved app.js successfully.")

if __name__ == '__main__':
    main()
