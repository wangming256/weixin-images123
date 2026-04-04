#!/usr/bin/env python3
from PIL import Image
import pytesseract
import os

full_text = ""
folder = "/Users/wangming/Desktop/起诉证据链/"

for filename in sorted(os.listdir(folder)):
    if not filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        continue
    path = os.path.join(folder, filename)
    print(f"OCR processing: {filename}")
    try:
        img = Image.open(path)
        text = pytesseract.image_to_string(img, lang='chi_sim')
        full_text += f"\n\n========== {filename} ==========\n\n{text}"
    except Exception as e:
        print(f"Error processing {filename}: {e}")

output_path = "/tmp/起诉证据链_ocr.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"\nDone. Total length: {len(full_text)} characters")
print(f"Saved to: {output_path}")
