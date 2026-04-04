
// Preloader.ts - 预加载脚本，启动游戏前预加载所有图片和音频
const { ccclass, property } = cc._decorator;

@ccclass
export default class Preloader extends cc.Component {
    @property(cc.ProgressBar) loadingBar: cc.ProgressBar = null;
    @property(cc.Label) loadingLabel: cc.Label = null;
    @property(cc.Node) startButton: cc.Node = null;
    
    // 所有需要预加载的资源路径列表
    preloadResources: string[] = [];
    totalCount: number = 0;
    loadedCount: number = 0;
    
    onLoad() {
        this.startButton.active = false;
        // 这里你只需要把所有图片和音频的resources路径加进来
        // 格式："textures/orange", "audio/chinese/orange", "audio/english/orange" ...
    }
    
    // 设置预加载列表
    setPreloadList(resources: string[]) {
        this.preloadResources = resources;
    }
    
    // 开始预加载
    startPreload() {
        this.totalCount = this.preloadResources.length;
        this.loadedCount = 0;
        this.loadNextResource();
    }
    
    // 逐个加载
    loadNextResource() {
        if (this.loadedCount >= this.totalCount) {
            // 全部加载完成
            this.onAllLoaded();
            return;
        }
        
        const resPath = this.preloadResources[this.loadedCount];
        cc.resources.load(resPath, (err, asset) => {
            this.loadedCount++;
            // 更新进度条
            if (this.loadingBar) {
                this.loadingBar.progress = this.loadedCount / this.totalCount;
            }
            if (this.loadingLabel) {
                this.loadingLabel.string = `加载中... ${this.loadedCount}/${this.totalCount}`;
            }
            // 加载下一个
            this.scheduleOnce(() => {
                this.loadNextResource();
            }, 0);
        });
    }
    
    // 全部加载完成
    onAllLoaded() {
        if (this.loadingLabel) {
            this.loadingLabel.string = `加载完成！点击开始游戏`;
        }
        this.startButton.active = true;
    }
    
    // 点击开始游戏，进入主游戏场景
    onStartButtonClicked() {
        cc.director.loadScene("game");
    }
}
