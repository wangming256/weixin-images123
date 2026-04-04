#!/bin/bash
OUTPUT="/tmp/业主大会议事规则.txt"
rm -f "$OUTPUT"

for i in 0 2 4 6 8 10 12; do
    printf -v p "%03d" "$i"
    image="/tmp/page-$p.jpg"
    if [ -f "$image" ]; then
        echo "正在处理第 $((i/2 + 1)) 页: $image"
        tesseract "$image" stdout -l chi_sim >> "$OUTPUT"
        echo -e "\n\n--- 第 $((i/2 + 1)) 页结束 ---\n\n" >> "$OUTPUT"
    else
        echo "文件不存在: $image"
    fi
done

echo "OCR 完成，结果保存在 $OUTPUT"
wc -l "$OUTPUT"
