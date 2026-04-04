
// Game.ts - 主游戏逻辑（核心，带单词统计和微信分享，支持单词卡片库）
const { ccclass, property } = cc._decorator;
import Card from './Card';
import Slot from './Slot';
import LevelGenerator, { WordCard } from './Level';

@ccclass
export default class Game extends cc.Component {
    @property(cc.Prefab) cardPrefab: cc.Prefab = null;
    @property(Slot) slotComponent: Slot = null;
    @property(cc.Node) gameBoard: cc.Node = null;
    @property(cc.Node) winPanel: cc.Node = null;
    @property(cc.Label) winWordLabel: cc.Label = null;  // 胜利页面单词统计label
    @property(cc.Node) failPanel: cc.Node = null;
    @property(cc.Label) failWordLabel: cc.Label = null;  // 失败页面单词统计label
    
    levelGenerator: LevelGenerator = new LevelGenerator();
    allCards: Card[] = [];
    totalCardsRemaining: number = 0;
    cardSize: number = 60;
    spacing: number = 4;
    currentLearnedWords: number = 0;
    
    onLoad() {
        // 监听事件
        cc.systemEvent.on(cc.SystemEvent.EventType.RESIZE, this.onResize, this);
        this.slotComponent.node.on("slotFull", this.onGameFail, this);
        this.slotComponent.node.on("cardEliminated", this.onCardEliminated, this);
        this.slotComponent.node.on("gameWin", this.onGameWin, this);
        
        // 💡 在这里初始化你的单词卡片库
        // 示例格式：
        // this.levelGenerator.initWordPool([
        //     { cardId: 0, chinese: "橘子", english: "orange" },
        //     { cardId: 1, chinese: "苹果", english: "apple" },
        //     { cardId: 2, chinese: "香蕉", english: "banana" },
        //     ... 继续添加所有单词卡片
        // ]);
        // 
        // 以后想加新单词，直接调用 this.addNewWord({...}) 就行
        // 每局游戏会自动从单词库随机选，每次都不一样！
    }
    
    // 初始化单词卡片库，游戏开始前调用
    initWordPool(words: WordCard[]) {
        this.levelGenerator.initWordPool(words);
    }
    
    // 添加新单词到卡片库，可以动态加载新单词，玩着玩着就加载新单词进来
    addNewWord(word: WordCard) {
        this.levelGenerator.addWordToPool(word);
    }
    
    startGame(wordCountPerLevel: number = 12) {
        // 清空之前的游戏
        this.gameBoard.removeAllChildren();
        this.allCards = [];
        this.slotComponent.reset();
        this.winPanel.active = false;
        this.failPanel.active = false;
        this.currentLearnedWords = 0;
        
        // 生成关卡：从单词库随机选指定数量单词，每种三张
        const levelData = this.levelGenerator.generateHardLevel(wordCountPerLevel);
        this.totalCardsRemaining = levelData.length;
        
        // 创建所有卡片
        for (const data of levelData) {
            this.createCard(data);
        }
        
        // 更新覆盖状态
        this.updateCoveredState();
    }
    
    createCard(data: {cardId: number, row: number, col: number, layer: number}) {
        const cardNode = cc.instantiate(this.cardPrefab);
        cardNode.parent = this.gameBoard;
        
        // 计算位置：每层错开一点，产生立体效果
        const x = (data.col - 4) * (this.cardSize + this.spacing) + data.layer * 8;
        const y = (data.row - 4) * (this.cardSize + this.spacing) + data.layer * 8;
        const z = -data.layer * 5;  // 层级错开
        
        cardNode.setPosition(x, y);
        cardNode.setPosition(cc.v3(x, y, z));
        
        // 设置卡片组件
        const card = cardNode.getComponent(Card);
        card.cardId = data.cardId;
        card.row = data.row;
        card.col = data.col;
        card.layer = data.layer;
        
        // 监听点击
        card.node.on("cardClicked", this.onCardClicked, this);
        
        this.allCards.push(card);
    }
    
    // 更新卡片覆盖状态：上层卡片会挡住下层，下层不能点击
    updateCoveredState() {
        for (const card of this.allCards) {
            let isCovered = false;
            // 检查同一个位置是否有上层卡片
            for (const other of this.allCards) {
                if (other !== card && other.layer > card.layer &&
                    Math.abs(other.row - card.row) <= 1 && Math.abs(other.col - card.col) <= 1) {
                    isCovered = true;
                    break;
                }
            }
            card.setCovered(isCovered);
        }
    }
    
    onCardClicked(card: Card) {
        // 移除卡片从游戏板，添加到卡槽
        card.node.removeFromParent();
        const index = this.allCards.indexOf(card);
        if (index >= 0) {
            this.allCards.splice(index, 1);
        }
        this.totalCardsRemaining--;
        
        this.slotComponent.addCard(card);
        this.updateCoveredState();
    }
    
    onCardEliminated(card: Card) {
        this.totalCardsRemaining--;
        this.currentLearnedWords = this.slotComponent.getLearnedWords();
    }
    
    // 游戏胜利，显示单词统计
    onGameWin(learnedWords: number) {
        this.winPanel.active = true;
        if (this.winWordLabel) {
            this.winWordLabel.string = `太棒了！你通关了，本局认识了 ${learnedWords} 个英语单词！🎉`;
        }
        // 微信小游戏分享
        this.shareToMoments(learnedWords, true);
    }
    
    // 游戏失败，显示单词统计
    onGameFail(learnedWords: number) {
        this.failPanel.active = true;
        if (this.failWordLabel) {
            this.failWordLabel.string = `本局你已经认识了 ${learnedWords} 个英语单词，再来一局试试！💪`;
        }
        // 微信小游戏分享
        this.shareToMoments(learnedWords, false);
    }
    
    // 分享到朋友圈/微信群
    shareToMoments(learnedWords: number, isWin: boolean) {
        // 微信小游戏环境才会生效
        if (typeof wx !== 'undefined') {
            let title = '';
            if (isWin) {
                title = `我通关了！本局认识了 ${learnedWords} 个英语单词，来试试你能认识多少？`;
            } else {
                title = `我已经认识了 ${learnedWords} 个英语单词，你能比我更多吗？`;
            }
            wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
            });
        }
        this.currentLearnedWords = learnedWords;
    }
    
    // 手动触发分享给朋友
    shareMessage() {
        if (typeof wx !== 'undefined') {
            wx.shareAppMessage({
                title: `我认识了 ${this.currentLearnedWords} 个单词，来玩消除学单词吧！`,
            });
        }
    }
    
    restartGame() {
        this.startGame();
    }
    
    onResize() {
        // 适配不同屏幕
        const canvas = this.node.getParent().getComponent(cc.Canvas);
        if (canvas) {
            canvas.resize();
        }
    }
}
