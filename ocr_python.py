#!/usr/bin/env python3
from PIL import Image
import pytesseract
import os

full_text = ""
pages = [0, 2, 4, 6, 8, 10, 12]

for i, page_num in enumerate(pages, 1):
    filename = f"/tmp/page-{page_num:03d}.jpg"
    if not os.path.exists(filename):
        print(f"跳过 {filename} (不存在)")
        continue
    
    print(f"正在处理第 {i} 页: {filename}")
    try:
        img = Image.open(filename)
        text = pytesseract.image_to_string(img, lang='chi_sim')
        full_text += text + f"\n\n--- 第 {i} 页结束 ---\n\n"
    except Exception as e:
        print(f"处理第 {i} 页出错: {e}")

output_path = "/tmp/业主大会议事规则.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"\nOCR 完成！")
print(f"总字数: {len(full_text)}")
print(f"结果保存到: {output_path}")
