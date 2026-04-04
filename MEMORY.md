# Long-term Memory

## MBTI微信小程序图片403问题解决记录

### 问题
微信小程序免费版云存储权限不足，所有图片返回 403 Forbidden 无法加载。

### 解决方案
使用 **GitHub + jsDelivr** 免费替代方案：
1. 将按性格分类整理好的图片上传到GitHub公共仓库
2. 使用jsDelivr国内CDN提供可直接访问的HTTPS永久链接
3. 只修改小程序代码中的 `BASE_URL`，原有图片拼接逻辑完全保留，改造零成本

### 最终配置
- GitHub仓库：`wangming256/weixin-images123`
- BASE_URL：`https://cdn.jsdelivr.net/gh/wangming256/weixin-images123@main/images`
- 配置文件位置：`/Users/wangming/Desktop/mbti/pages/result/mbti_result_photo.js`
- 图片总数：16种性格共66张图片

### 注意事项
1. 新增图片流程：
   - 将新图片放入 `~/Desktop/images/对应性格文件夹`
   - 复制到工作区：`cp -R ~/Desktop/images/* /Users/wangming/.openclaw/workspace/images/`
   - 重新生成配置文件，更新两个位置
   - `git add images/ && git commit -m "add new images" && git push`
   - 等待CDN缓存更新（几分钟自动生效，着急可以用 `https://purge.jsdelivr.net/` 手动刷新）

2. CDN缓存问题：新推送图片需要缓存更新，手动刷新地址：
   ```
   https://purge.jsdelivr.net/gh/wangming256/weixin-images123@main/images/
   ```

解决时间：2026-04-03
