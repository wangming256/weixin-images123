#!/usr/bin/env python3
import os
import subprocess

# 对每页进行OCR
full_text = ""
for i in range(0, 13, 2):  # 步长2，只取大图
    page_num = f"{i:03d}"
    image_path = f"/tmp/page-{page_num}.jpg"
    if not os.path.exists(image_path):
        continue
    print(f"OCR 处理 {image_path}...")
    # 识别中文+英文
    result = subprocess.run(
        ["tesseract", image_path, "stdout", "-l", "chi+eng"],
        capture_output=True,
        text=True
    )
    page_text = result.stdout
    full_text += page_text + "\n\n--- 第 {} 页结束 ---\n\n".format((i//2)+1)

# 保存结果
output_path = "/tmp/业主大会议事规则.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"\nOCR完成，结果保存到 {output_path}")
print(f"总字数: {len(full_text)}")
