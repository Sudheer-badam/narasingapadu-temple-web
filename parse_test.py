import re
import json

def parse_js_object(js_text, start_marker):
    start_idx = js_text.find(start_marker)
    if start_idx == -1:
        return None
    
    # find the opening brace {
    brace_idx = js_text.find('{', start_idx)
    if brace_idx == -1:
        return None
    
    # parse matching braces
    count = 1
    i = brace_idx + 1
    while count > 0 and i < len(js_text):
        if js_text[i] == '{':
            count += 1
        elif js_text[i] == '}':
            count -= 1
        i += 1
        
    obj_str = js_text[brace_idx:i]
    return obj_str

def extract_key_values(obj_str):
    # Regex to find keys and values, handling single/double quotes and backticks
    pattern = re.compile(r'(\w+):\s*(["\'`])(.*?)\2,?\s*$', re.MULTILINE | re.DOTALL)
    # Since re.DOTALL is used, we have to be careful with line-by-line parsing or full parsing.
    # Let's split by lines first or use a more precise regex.
    # Actually, a simple line parser:
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
            # Look for "key: quote"
            m = re.match(r'^(\w+):\s*(["\'`])(.*)$', line_strip)
            if m:
                key, quote, rest = m.groups()
                current_key = key
                quote_char = quote
                if rest.endswith(quote_char + ',') or rest.endswith(quote_char):
                    # Single line
                    val = rest[:-2] if rest.endswith(',') else rest[:-1]
                    results[key] = val
                    current_key = None
                else:
                    current_val = [rest]
        else:
            # We are inside a multiline string
            if line_strip.endswith(quote_char + ',') or line_strip.endswith(quote_char):
                val = line_strip[:-2] if line_strip.endswith(',') else line_strip[:-1]
                current_val.append(val)
                results[current_key] = '\n'.join(current_val)
                current_key = None
            else:
                current_val.append(line)
                
    return results

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

te_obj = parse_js_object(content, 'te: {')
en_obj = parse_js_object(content, 'en: {')

te_dict = extract_key_values(te_obj) if te_obj else {}
en_dict = extract_key_values(en_obj) if en_obj else {}

print(f"Te dict keys: {len(te_dict)}")
print(f"En dict keys: {len(en_dict)}")
for k in list(te_dict.keys())[:5]:
    print(f"{k} -> Te: {te_dict[k][:30]} | En: {en_dict.get(k, '')[:30]}")
