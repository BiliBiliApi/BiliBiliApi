const base = require("../utils/request");

/**
 * 获取用户最近点赞的视频明细 /get/like/video
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetLikeVideo extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/like/video?vmid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetLikeVideo;
