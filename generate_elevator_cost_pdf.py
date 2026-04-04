#!/usr/bin/env python3
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm

def create_pdf(output_path):
    c = canvas.Canvas(output_path, pagesize=A4)
    width, height = A4
    
    # Title
    c.setFont("Helvetica-Bold", 16)
    c.drawString(20*mm, height - 20*mm, "电梯费用性质区分 总结")
    
    y = height - 35*mm
    
    # Introduction
    c.setFont("Helvetica", 11)
    c.drawString(20*mm, y, "关于物业费是否包含电梯养护及维修费用，按费用性质区分总结：")
    y -= 15*mm
    
    # Table header
    c.setFont("Helvetica-Bold", 10)
    col_x = [20*mm, 120*mm, 220*mm, 320*mm]
    col_w = [100*mm, 100*mm, 100*mm, 100*mm]
    headers = ["费用类型", "定义", "是否包含在物业费", "资金来源"]
    
    for i, header in enumerate(headers):
        c.rect(col_x[i], y - 10*mm, col_w[i], 15*mm, fill=0)
    c.setFillGray(0.9)
    for i, header in enumerate(headers):
        c.rect(col_x[i], y - 10*mm, col_w[i], 15*mm, fill=1)
    c.setFillGray(0)
    for i, header in enumerate(headers):
        c.drawString(col_x[i] + 2*mm, y - 8*mm, header)
    
    y -= 20*mm
    
    # Data rows
    c.setFont("Helvetica", 10)
    data = [
        [
            "🛠️ 日常养护\n(年检/小修/定期保养)",
            "定期检查、润滑、清洁、\n小零件更换",
            "✅ 已经包含",
            "物业费"
        ],
        [
            "🔧 中修/大中修/\n更新改造",
            "重大维修、更换主要部件\n整体改造更新",
            "❌ 不包含",
            "住宅专项维修资金"
        ]
    ]
    
    row_h = 35*mm
    for row in data:
        for i, cell in enumerate(row):
            lines = cell.split('\n')
            cell_h = row_h
            c.rect(col_x[i], y - cell_h + 5*mm, col_w[i], cell_h, fill=0)
            line_y = y - 10*mm
            for line in lines:
                c.drawString(col_x[i] + 2*mm, line_y, line)
                line_y -= 12*mm
        y -= row_h
    
    y -= 10*mm
    
    # Legal basis
    c.setFont("Helvetica-Bold", 12)
    c.drawString(20*mm, y, "法律依据")
    y -= 15*mm
    c.setFont("Helvetica", 10)
    text = "《物业服务收费管理办法》第十一条：物业服务成本包含 \"物业共用部位、共用设施设备的日常运行、维护费用\""
    c.drawString(25*mm, y, text)
    y -= 20*mm
    
    # Conclusion
    c.setFont("Helvetica-Bold", 12)
    c.drawString(20*mm, y, "本案结论")
    y -= 15*mm
    c.setFont("Helvetica", 10)
    text = "1. 本案公示显示，物业费已经列支了每年 13.1 万元电梯维护费用 → 这就是日常养护费用"
    c.drawString(25*mm, y, text)
    y -= 12*mm
    text = "2. 物业再单独向业主收取电梯年检/日常养护费用 → 构成重复收费，业主有权要求退还"
    c.drawString(25*mm, y, text)
    
    c.save()
    print(f"PDF saved to {output_path}")

if __name__ == "__main__":
    output_path = "/Users/wangming/.openclaw/workspace/电梯费用性质区分总结.pdf"
    create_pdf(output_path)
