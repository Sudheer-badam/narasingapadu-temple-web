import re
import json
import time
from deep_translator import GoogleTranslator
from concurrent.futures import ThreadPoolExecutor

def parse_js_object(js_text, start_marker):
    start_idx = js_text.find(start_marker)
    if start_idx == -1:
        return None
    brace_idx = js_text.find('{', start_idx)
    if brace_idx == -1:
        return None
    count = 1
    i = brace_idx + 1
    while count > 0 and i < len(js_text):
        if js_text[i] == '{':
            count += 1
        elif js_text[i] == '}':
            count -= 1
        i += 1
    return js_text[brace_idx:i]

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

def translate_safe(text, translator):
    if not text or text.strip() == "":
        return text
    
    prefix = ""
    html_match = re.match(r'^(\s*<i[^>]*></i>\s*)(.*)$', text)
    if html_match:
        prefix = html_match.group(1)
        text = html_match.group(2)
        
    emoji_match = re.match(r'^([\u2600-\u27BF\U0001f300-\U0001f64f\U0001f680-\U0001f6ff\U0001f1e0-\U0001f1ff\U0001f900-\U0001f9ff\U0001f170-\U0001f251]\s*)(.*)$', text)
    if emoji_match:
        prefix += emoji_match.group(1)
        text = emoji_match.group(2)
        
    for attempt in range(3):
        try:
            val = translator.translate(text)
            return prefix + val
        except Exception as e:
            # Safe print
            print(f"Error translating: {type(e).__name__}. Retrying in 1s...")
            time.sleep(1)
    return prefix + text

def main():
    with open('app.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    te_obj = parse_js_object(content, 'te: {')
    te_dict = extract_key_values(te_obj) if te_obj else {}
    print(f"Loaded {len(te_dict)} Telugu translation keys.")
    
    translator = GoogleTranslator(source='te', target='hi')
    
    keys = list(te_dict.keys())
    translated_dict = {}
    
    def worker(k):
        quote, val = te_dict[k]
        if quote is not None:
            hi_val = translate_safe(val, translator)
            
            # Manual fine-tuning for high accuracy:
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
            
            return k, (quote, hi_val)
        else:
            return k, (None, val)

    print("Translating keys...")
    with ThreadPoolExecutor(max_workers=10) as executor:
        results = list(executor.map(worker, keys))
        
    for k, res in results:
        translated_dict[k] = res
        
    output_dict = {k: v[1] for k, v in translated_dict.items()}
    with open('translations_hi_test.json', 'w', encoding='utf-8') as f:
        json.dump(output_dict, f, ensure_ascii=False, indent=2)
        
    print("Finished. Saved to translations_hi_test.json")

if __name__ == '__main__':
    main()
