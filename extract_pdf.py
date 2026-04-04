#!/usr/bin/env python3
from pypdf import PdfReader
import sys

if len(sys.argv) != 2:
    print("Usage: python extract_pdf.py <pdf_path>")
    sys.exit(1)

reader = PdfReader(sys.argv[1])
text = ""
for page in reader.pages:
    page_text = page.extract_text()
    if page_text:
        text += page_text + "\n\n"

print(text)
