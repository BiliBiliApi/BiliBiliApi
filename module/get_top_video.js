const base = require("../utils/request");

/**
 * 获取用户置顶视频 /get/top/video
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetTopVideo extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/top/arc?vmid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetTopVideo;
