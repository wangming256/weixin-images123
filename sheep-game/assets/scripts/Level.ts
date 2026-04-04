
// Level.ts - 关卡生成逻辑（模仿羊了个羊，支持单词卡片库，每种单词多张保证是3的倍数）
import Card from './Card';

// 单词卡片定义
export interface WordCard {
    cardId: number;
    chinese: string;  // 中文名称
    english: string;   // 英文名称
}

export default class LevelGenerator {
    wordCardPool: WordCard[] = [];  // 全局单词卡片库
    
    // 初始化单词卡片库，你可以在这里添加所有单词卡片
    initWordPool(cards: WordCard[]) {
        this.wordCardPool = cards;
    }
    
    // 生成关卡：从单词库随机选n种单词，每种放 multiple 张，保证每种都是3的倍数
    generateLevel(width: number, height: number, layerCount: number, wordCountPerLevel: number, multiple: number = 3): {cardId: number, row: number, col: number, layer: number}[] {
        const cards: {cardId: number, row: number, col: number, layer: number}[] = [];
        
        // 保证倍数是3的倍数（3、6、9、12、15、18...都可以）
        multiple = Math.floor(multiple / 3) * 3;
        if (multiple < 3) multiple = 3;
        
        // 从单词库随机选指定数量的单词
        const selectedWords = this.selectRandomWords(wordCountPerLevel);
        
        // 每个单词添加 multiple 张卡片，保证始终是3的倍数
        const cardIds: number[] = [];
        for (const word of selectedWords) {
            for (let i = 0; i < multiple; i++) {
                cardIds.push(word.cardId);
            }
        }
        
        // 打乱顺序
        this.shuffleArray(cardIds);
        
        // 分配到不同层
        let index = 0;
        for (let layer = 0; layer < layerCount; layer++) {
            for (let row = 0; row < height; row++) {
                for (let col = 0; col < width; col++) {
                    if (index >= cardIds.length) break;
                    cards.push({
                        cardId: cardIds[index],
                        row: row,
                        col: col,
                        layer: layer
                    });
                    index++;
                }
            }
        }
        
        return cards;
    }
    
    // 从单词库随机选指定数量单词
    selectRandomWords(count: number): WordCard[] {
        // 如果单词库总数不够，就全部选
        count = Math.min(count, this.wordCardPool.length);
        
        // 打乱单词库，取前count个
        const shuffled = [...this.wordCardPool];
        this.shuffleArray(shuffled);
        return shuffled.slice(0, count);
    }
    
    // 根据关卡生成难度，指数级上升
    generateLevelByStage(stage: number): {cardId: number, row: number, col: number, layer: number}[] {
        // 难度指数级上升，每种单词倍数也增加：
        // 第一关：6种单词，每种3张 → 18张 → 简单入门
        // 第二关：12种单词，每种6张 → 72张 → 变难
        // 第三关：18种单词，每种9张 → 162张 → 很难
        // 第四关：24种单词，每种12张 → 288张 → 地狱难度
        // 难度指数上升，符合上瘾设计
        const wordCount = 6 * stage;
        const multiple = 3 * stage;  // 每种单词倍数也跟着增加，始终保证3的倍数
        const layerCount = 2 + stage;  // 层数也增加，叠更多层
        return this.generateLevel(12, 12, layerCount, wordCount, multiple);
    }
    
    // 生成第二关（羊了个羊经典难度）
    // 24种单词，每种6张 → 总共 24 * 6 = 144 张卡片，分四层 → 非常够打，难度和羊了个羊差不多
    generateHardLevel(wordCountPerLevel: number = 24, multiple: number = 6): {cardId: number, row: number, col: number, layer: number}[] {
        // 卡槽最多放8张，所以总卡片越多，难度越高，越容易满槽失败
        return this.generateLevel(12, 12, 4, wordCountPerLevel, multiple);
    }
    
    // 添加新单词到单词库（以后可以动态加载新单词）
    addWordToPool(word: WordCard) {
        this.wordCardPool.push(word);
    }
    
    // Fisher-Yates 洗牌算法
    shuffleArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
