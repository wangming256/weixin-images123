
import asyncio
import edge_tts
import os

words = []
with open('/Users/wangming/.openclaw/workspace/wordlist.txt', 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        chinese, english = line.split(':')
        words.append((chinese.strip(), english.strip()))

print(f"📋 总共 {len(words)} 个单词，逐个生成，遇到问题跳过...\n")

# 中文多个语音备选
ZH_VOICES = [
    "zh-CN-Yunxi-Neural",
    "zh-CN-Xiaoxiao-Neural", 
    "zh-CN-Yunyang-Neural",
]
EN_VOICES = [
    "en-US-Guy-Neural",
    "en-US-Jenny-Neural",
    "en-GB-Ryan-Neural",
]

async def generate_one(text, voice, output_path):
    for v in [voice] + (ZH_VOICES if voice.startswith('zh') else EN_VOICES):
        try:
            comm = edge_tts.Communicate(text, v)
            await comm.save(output_path)
            size = os.path.getsize(output_path)
            if size > 100:
                print(f"   ✅ 成功 [{v}]: {output_path} ({size} bytes)")
                return True
        except Exception as e:
            print(f"   ⚠️ 失败 [{v}]: {e}")
            # 删除空文件
            if os.path.exists(output_path):
                os.remove(output_path)
            continue
    print(f"   ❌ 全部语音都失败")
    return False

async def main():
    success = 0
    failed = 0
    
    for chinese, english in words:
        print(f"\n🔄 处理：{chinese} / {english}")
        
        zh_path = f"/Users/wangming/.openclaw/workspace/words/chinese/{english}.mp3"
        en_path = f"/Users/wangming/.openclaw/workspace/words/english/{english}.mp3"
        
        # 跳过已经生成好的
        zh_ok = os.path.exists(zh_path) and os.path.getsize(zh_path) > 100
        en_ok = os.path.exists(en_path) and os.path.getsize(en_path) > 100
        
        if not zh_ok:
            if await generate_one(chinese, "zh-CN-Yunxi-Neural", zh_path):
                success += 1
            else:
                failed += 1
        else:
            print(f"   ⏭️  中文已存在，跳过")
        
        if not en_ok:
            if await generate_one(english, "en-US-Guy-Neural", en_path):
                success += 1
            else:
                failed += 1
        else:
            print(f"   ⏭️  英文已存在，跳过")
        
        # 限流
        await asyncio.sleep(1)
    
    print(f"\n🎯 全部处理完成！")
    print(f"   成功：{success}")
    print(f"   失败：{failed}")
    total_zh = len([f for f in os.listdir("/Users/wangming/.openclaw/workspace/words/chinese") if os.path.getsize(f"/Users/wangming/.openclaw/workspace/words/chinese/{f}") > 100])
    total_en = len([f for f in os.listdir("/Users/wangming/.openclaw/workspace/words/english") if os.path.getsize(f"/Users/wangming/.openclaw/workspace/words/english/{f}") > 100])
    print(f"   最终：中文 {total_zh} / 英文 {total_en} 个有效音频")

if __name__ == "__main__":
    asyncio.run(main())
