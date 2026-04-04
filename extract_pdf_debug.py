#!/usr/bin/env python3
from pypdf import PdfReader
import os

path = "/Users/wangming/.openclaw/media/inbound/ä_ä_å_ä¼_è_äº_è_å---51238b01-524d-4438-ad60-1bde52d493b6.pdf"
print(f"File exists: {os.path.exists(path)}")
print(f"File size: {os.path.getsize(path)} bytes")

reader = PdfReader(path)
print(f"Number of pages: {len(reader.pages)}")

text = ""
for i, page in enumerate(reader.pages):
    page_text = page.extract_text()
    print(f"Page {i+1} extracted, length: {len(page_text) if page_text else 0}")
    if page_text:
        text += page_text + "\n\n"

print(f"\nTotal text length: {len(text)}")
with open("/tmp/业主大会议事规则.txt", "w") as f:
    f.write(text)
print(f"Saved to /tmp/业主大会议事规则.txt")
