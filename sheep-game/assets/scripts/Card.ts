
// Card.ts - 卡片组件（带单词语音播报功能）
const { ccclass, property } = cc._decorator;

@ccclass
export default class Card extends cc.Component {
    @property spriteFrame: cc.SpriteFrame = null;
    @property cardId: number = 0;
    @property wordChinese: string = "";  // 单词中文（例如：橘子）
    @property wordEnglish: string = "";  // 单词英文（例如：orange）
    @property audioChinese: cc.AudioClip = null;  // 中文发音
    @property audioEnglish: cc.AudioClip = null;  // 英文发音
    
    clickCount: number = 0;  // 点击次数
    isCovered: boolean = false;  // 是否被上层卡片覆盖
    row: number = 0;
    col: number = 0;
    layer: number = 0;  // 叠放层级
    
    // 点击事件
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
        this.clickCount = 0;
    }
    
    onClick() {
        if (!this.isCovered) {
            this.clickCount++;
            // 根据点击次数播放对应语音
            if (this.clickCount === 1) {
                // 第一次点击：播中文
                this.playChinese();
            }
            this.node.emit("cardClicked", this);
        }
    }
    
    // 播放中文发音
    playChinese() {
        if (this.audioChinese) {
            cc.audioEngine.playEffect(this.audioChinese, false);
        }
    }
    
    // 播放英文发音（消除的时候调用）
    playEnglish() {
        if (this.audioEnglish) {
            cc.audioEngine.playEffect(this.audioEnglish, false);
        }
    }
    
    // 设置卡片被覆盖状态
    setCovered(covered: boolean) {
        this.isCovered = covered;
        // 被覆盖可以灰色显示，可选效果
        this.node.opacity = covered ? 180 : 255;
    }
}
