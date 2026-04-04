
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

# 跳过已经生成的前4个
words = words[4:]
print(f"📚 剩余 {len(words)} 个单词，继续生成...")

async def generate_audio(text, voice, output_path):
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(output_path)

async def main():
    count = 0
    for chinese, english in words:
        # 跳过已经存在且非空的文件
        import os
        zh_path = f"/Users/wangming/.openclaw/workspace/words/chinese/{english}.mp3"
        en_path = f"/Users/wangming/.openclaw/workspace/words/english/{english}.mp3"
        
        if not (os.path.exists(zh_path) and os.path.getsize(zh_path) > 100):
            print(f"  🔊 中文：{chinese} → {zh_path}")
            await generate_audio(chinese, "zh-CN-Yunxi-Neural", zh_path)
        else:
            print(f"  ⏭️  中文：{chinese} 已存在，跳过")
        
        if not (os.path.exists(en_path) and os.path.getsize(en_path) > 100):
            print(f"  🔊 英文：{english} → {en_path}")
            await generate_audio(english, "en-US-Guy-Neural", en_path)
        else:
            print(f"  ⏭️  英文：{english} 已存在，跳过")
        
        count += 1
        # 每次暂停一下，避免请求太快被限流
        await asyncio.sleep(1.5)
    
    print(f"\n✅ 全部完成！本次又生成了 {count * 2} 个音频文件")
    total_zh = len(os.listdir("/Users/wangming/.openclaw/workspace/words/chinese"))
    total_en = len(os.listdir("/Users/wangming/.openclaw/workspace/words/english"))
    print(f"   - 中文总计：{total_zh} 个")
    print(f"   - 英文总计：{total_en} 个")

if __name__ == "__main__":
    asyncio.run(main())
