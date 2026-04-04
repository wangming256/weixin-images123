#!/usr/bin/env python3
from PIL import Image
import pytesseract
import os

full_text = ""
for i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]:
    filename = f"/tmp/page_profit-{i:03d}.jpg"
    if not os.path.exists(filename):
        continue
    print(f"OCR 处理 {filename}...")
    img = Image.open(filename)
    text = pytesseract.image_to_string(img, lang='chi_sim')
    full_text += text + "\n\n--- 第 {i+1} 页结束 ---\n\n"

with open("/tmp/物业服务合同.txt", "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"完成，总字数: {len(full_text)}")
