
import asyncio
import edge_tts

# 读取单词列表
words = []
with open('/Users/wangming/.openclaw/workspace/wordlist.txt', 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        chinese, english = line.split(':')
        words.append((chinese.strip(), english.strip()))

print(f"📚 总共 {len(words)} 个单词，开始生成音频...")

# 生成函数
async def generate_audio(text, voice, output_path):
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(output_path)

async def main():
    count = 0
    for chinese, english in words:
        # 生成中文发音（用中文配音说中文名称）
        zh_path = f"/Users/wangming/.openclaw/workspace/words/chinese/{english}.mp3"
        print(f"  🔊 中文：{chinese} → {zh_path}")
        await generate_audio(chinese, "zh-CN-Yunxi-Neural", zh_path)
        
        # 生成英文发音（用英文配音说英文单词）
        en_path = f"/Users/wangming/.openclaw/workspace/words/english/{english}.mp3"
        print(f"  🔊 英文：{english} → {en_path}")
        await generate_audio(english, "en-US-Guy-Neural", en_path)
        
        count += 1
    
    print(f"\n✅ 全部完成！总共生成 {count * 2} 个音频文件")
    print(f"   - 中文：{count} 个 → words/chinese/")
    print(f"   - 英文：{count} 个 → words/english/")

if __name__ == "__main__":
    asyncio.run(main())
