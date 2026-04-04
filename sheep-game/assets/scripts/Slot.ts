
// Slot.ts - 卡槽组件（带单词语音统计功能）
const { ccclass, property } = cc._decorator;
import Card from './Card';

@ccclass
export default class Slot extends cc.Component {
    @property(cc.Node) slotCardsParent: cc.Node = null;
    @property(cc.AudioClip) praiseAudio: cc.AudioClip = null;  // 赞美好听的语气词
    maxSlots: number = 8;  // 卡槽容量，可以放8张卡片
    currentCards: Card[] = [];
    learnedWords: number = 0;  // 本局已经学会的单词数
    
    // 添加卡片到卡槽
    addCard(card: Card): boolean {
        if (this.currentCards.length >= this.maxSlots) {
            // 卡槽满了，游戏失败，带上统计单词数
            this.node.emit("slotFull", this.learnedWords);
            return false;
        }
        
        this.currentCards.push(card);
        // 创建卡片显示在卡槽
        const newCardNode = cc.instantiate(card.node);
        newCardNode.parent = this.slotCardsParent;
        newCardNode.setPosition(this.currentCards.length * 80 - 240, 0);
        
        // 检查是否有三个相同的
        this.checkMatch();
        return true;
    }
    
    // 检查是否匹配消除
    checkMatch() {
        // 按cardId分组统计
        const countMap: {[key: number]: Card[]} = {};
        for (const card of this.currentCards) {
            if (!countMap[card.cardId]) {
                countMap[card.cardId] = [];
            }
            countMap[card.cardId].push(card);
        }
        
        // 移除三个相同的
        for (const id in countMap) {
            if (countMap[id].length >= 3) {
                // 消除这三个：先播放英文，再赞美
                for (const card of countMap[id]) {
                    card.playEnglish();  // 播放英文发音
                    this.learnedWords++;  // 统计学会单词
                }
                // 播放赞美好听的语气词
                if (this.praiseAudio) {
                    cc.audioEngine.playEffect(this.praiseAudio, false);
                }
                // 移除卡片
                for (const card of countMap[id]) {
                    const index = this.currentCards.indexOf(card);
                    this.currentCards.splice(index, 1);
                    card.node.destroy();
                    // 从游戏地图移除这个卡片
                    this.node.emit("cardEliminated", card);
                }
            }
        }
        
        // 重新排列卡槽位置
        this.relayoutSlots();
        
        // 检查是否游戏胜利，带上统计单词数
        if (this.currentCards.length === 0 && this.getTotalCardsLeft() === 0) {
            this.node.emit("gameWin", this.learnedWords);
        }
    }
    
    // 重新排列卡槽
    relayoutSlots() {
        for (let i = 0; i < this.slotCardsParent.children.length; i++) {
            this.slotCardsParent.children[i].setPosition(i * 80 - 240, 0);
        }
    }
    
    getTotalCardsLeft(): number {
        // 这个由主游戏统计
        return 0;
    }
    
    // 获取已经学会的单词数
    getLearnedWords(): number {
        return this.learnedWords;
    }
    
    onLoad() {
        // 清空卡槽
        this.currentCards = [];
        this.learnedWords = 0;
        if (this.slotCardsParent) {
            this.slotCardsParent.removeAllChildren();
        }
    }
    
    reset() {
        this.currentCards = [];
        this.learnedWords = 0;
        if (this.slotCardsParent) {
            this.slotCardsParent.removeAllChildren();
        }
    }
}
