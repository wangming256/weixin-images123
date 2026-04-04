
import asyncio
import edge_tts

# 先只生成前5个测试
words = [
    ("苹果", "apple"),
    ("香蕉", "banana"),
    ("橙子", "orange"),
    ("葡萄", "grape"),
    ("草莓", "strawberry"),
]

print(f"📚 测试生成前 {len(words)} 个单词...")

async def generate_audio(text, voice, output_path):
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(output_path)

async def main():
    count = 0
    for chinese, english in words:
        zh_path = f"/Users/wangming/.openclaw/workspace/words/chinese/{english}.mp3"
        print(f"  🔊 中文：{chinese} → {zh_path}")
        await generate_audio(chinese, "zh-CN-Yunxi-Neural", zh_path)
        
        en_path = f"/Users/wangming/.openclaw/workspace/words/english/{english}.mp3"
        print(f"  🔊 英文：{english} → {en_path}")
        await generate_audio(english, "en-US-Guy-Neural", en_path)
        
        count += 1
    
    print(f"\n✅ 测试完成！生成 {count * 2} 个音频文件")

if __name__ == "__main__":
    asyncio.run(main())
