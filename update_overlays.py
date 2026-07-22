import os, re
root = r"d:\New folder (3)\veltriumfx_website\src\pages"
count = 0
for dirpath, _, filenames in os.walk(root):
    for f in filenames:
        if f.endswith(".jsx"):
            path = os.path.join(dirpath, f)
            with open(path, "r", encoding="utf-8") as file:
                content = file.read()
            
            # Simple replacement string
            replacement = 'className="absolute inset-0 bg-black/40"'
            
            # Match any absolute inset-0 with bg-[#00674F]/XX
            pattern = re.compile(r'className=\s*[\"\']absolute inset-0 bg-\[\#00674F\]/\d+.*?[\"\']')
            new_content = pattern.sub(replacement, content)
            
            if new_content != content:
                with open(path, "w", encoding="utf-8") as file:
                    file.write(new_content)
                count += 1
                print(f"Updated {f}")

print(f"Total updated: {count}")
