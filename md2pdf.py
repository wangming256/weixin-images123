#!/usr/bin/env python3
import markdown
from weasyprint import HTML

with open('/Users/wangming/.openclaw/workspace/业主大会议事规则_问题对照表.md', 'r', encoding='utf-8') as f:
    md_text = f.read()

html = markdown.markdown(md_text, extensions=['tables'])
# 添加简单CSS样式
html_full = f"""
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
body {{ font-family: "Helvetica", "Arial", sans-serif; line-height: 1.6; margin: 20px; }}
h1 {{ color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px; }}
h2 {{ color: #34495e; margin-top: 30px; }}
table {{ border-collapse: collapse; width: 100%; margin: 20px 0; }}
th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
th {{ background-color: #f2f2f2; }}
</style>
</head>
<body>
{html}
</body>
</html>
"""

HTML(string=html_full).write_pdf('/Users/wangming/.openclaw/workspace/业主大会议事规则_问题对照表.pdf')
print("PDF生成成功")
