#!/usr/bin/env python3
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm

def create_pdf(output_path):
    c = canvas.Canvas(output_path, pagesize=A4)
    width, height = A4
    
    # Title
    c.setFont("Helvetica-Bold", 16)
    c.drawString(20*mm, height - 20*mm, "锦城邻里 电梯费用问题 总结")
    
    y = height - 35*mm
    
    # Table header
    c.setFont("Helvetica-Bold", 10)
    col_x = [20*mm, 100*mm, 180*mm, 260*mm, 340*mm]
    col_w = [80*mm, 80*mm, 80*mm, 80*mm, 80*mm]
    headers = ["费用类型", "定义", "是否含在物业费", "应当从哪里出", "本案情况"]
    
    for i, header in enumerate(headers):
        c.rect(col_x[i], y - 10*mm, col_w[i], 15*mm, fill=1)
        c.setFillGray(0.9)
        c.rect(col_x[i], y - 10*mm, col_w[i], 15*mm, fill=0)
        c.setFillGray(0)
        c.drawString(col_x[i] + 2*mm, y - 8*mm, header)
    
    y -= 20*mm
    
    # Data rows
    c.setFont("Helvetica", 10)
    data = [
        [
            "🛠️ 日常养护\n   年检/小修",
            "定期检查、润滑、清洁\n   小零件更换",
            "✅ 已包含",
            "物业费",
            "物业费已列支\n   13.1 万元/年\n   → 再收费就是重复收费"
        ],
        [
            "🔧 大中修\n   更新改造",
            "重大维修、更换主部件\n   整体改造",
            "❌ 不包含",
            "专项维修资金",
            "本案不是大中修\n   → 收费不合法"
        ]
    ]
    
    row_height = 25*mm
    for row in data:
        for i, cell in enumerate(row):
            lines = cell.split('\n')
            cell_h = row_height
            c.rect(col_x[i], y - cell_h + 5*mm, col_w[i], cell_h, fill=0)
            line_y = y - 10*mm
            for line in lines:
                c.drawString(col_x[i] + 2*mm, line_y, line)
                line_y -= 12*mm
        y -= row_height
    
    y -= 10*mm
    
    # Legal basis
    c.setFont("Helvetica-Bold", 12)
    c.drawString(20*mm, y, "💡 核心法律依据")
    y -= 15*mm
    c.setFont("Helvetica", 10)
    text = "《物业服务收费管理办法》第十一条："
    c.drawString(25*mm, y, text)
    y -= 12*mm
    text = "物业服务成本包含 \"物业共用部位、共用设施设备的日常运行、维护费用\""
    c.drawString(25*mm, y, text)
    y -= 20*mm
    
    # Conclusion
    c.setFont("Helvetica-Bold", 12)
    c.drawString(20*mm, y, "❌ 本案物业做法问题总结：")
    y -= 15*mm
    c.setFont("Helvetica", 10)
    c.drawString(25*mm, y, "1. 物业费已经包含电梯日常维护费，且物业已在物业费支出中列支 13.1 万元/年")
    y -= 12*mm
    c.drawString(25*mm, y, "2. 物业再单独向业主分摊收取电梯年检/日常维护费 → 构成重复收费，业主有权要求退还")
    
    c.save()
    print(f"PDF saved to {output_path}")

if __name__ == "__main__":
    output_path = "/Users/wangming/.openclaw/workspace/电梯费用问题总结.pdf"
    create_pdf(output_path)
