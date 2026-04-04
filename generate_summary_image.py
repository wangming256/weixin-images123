#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import textwrap

# 创建图片
width = 900
height = 500
img = Image.new('RGB', (width, height), color='white')
draw = ImageDraw.Draw(img)

# 标题
y = 20
draw.text((20, y), "📊 锦城邻里 电梯费用问题 总结", fill='black')
y += 40

# 表头
header = ["费用类型", "定义", "是否含在物业费", "应从哪里出", "本案情况"]
col_widths = [120, 200, 130, 130, 200]
row_height = 30
x_start = 20

# 画表头
y_start = y
for i, col in enumerate(header):
    draw.rectangle([(x_start, y_start), (x_start + col_widths[i], y_start + row_height)], outline='black', fill='#f0f0f0')
    draw.text((x_start + 5, y_start + 5), col, fill='black')
    x_start += col_widths[i]
y_start += row_height

# 数据
data = [
    [
        "🛠️\n日常养护\n年检/小修",
        "定期检查、润滑、清洁、\n小零件更换",
        "✅ 已包含",
        "物业费",
        "物业费已列支\n13.1万/年\n→ 再收费就是**重复收费**"
    ],
    [
        "🔧\n大中修\n更新改造",
        "重大维修、更换主部件\n整体改造",
        "❌ 不包含",
        "专项维修资金",
        "本案不是大中修\n→ 收费不合法"
    ]
]

# 画数据
for row in data:
    x_start = 20
    for i, cell in enumerate(row):
        lines = cell.split('\n')
        max_line = len(lines)
        cell_height = row_height * max(1, len(lines))
        draw.rectangle([(x_start, y_start), (x_start + col_widths[i], y_start + cell_height)], outline='black')
        line_y = y_start + 5
        for line in lines:
            draw.text((x_start + 5, line_y), line, fill='black')
            line_y += 18
        x_start += col_widths[i]
    y_start += cell_height

y = y_start + 20

# 核心法律依据
draw.text((20, y), "💡 核心法律依据", fill='black')
y += 30
text = "《物业服务收费管理办法》第十一条：物业服务成本包含 \"物业共用部位、共用设施设备的日常运行、维护费用\""
wrapped = textwrap.wrap(text, width=60)
for line in wrapped:
    draw.text((30, y), line, fill='black')
    y += 22

y += 10
draw.text((20, y), "❌ 本案物业做法问题总结：", fill='black')
y += 30
draw.text((30, y), "1. 物业费已经包含电梯日常维护费，且物业已在物业费支出中列支 13.1 万元/年", fill='black')
y += 22
draw.text((30, y), "2. 物业再单独向业主分摊收取电梯年检/日常维护费 → 构成重复收费，业主有权要求退还", fill='black')

# 保存
output_path = "/Users/wangming/.openclaw/workspace/电梯费用问题总结.png"
img.save(output_path)
print(f"Image saved to {output_path}")
