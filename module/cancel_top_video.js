const base = require("../utils/request");

/**
 * 取消用户置顶视频 /cancel/top/video
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class CancelTopVideo extends base {
    async run(cookie, params) {
        const result = this.post(`https://api.bilibili.com/x/space/top/arc/cancel`, params, cookie, null, true)
        return result
    }
}

module.exports = CancelTopVideo;
