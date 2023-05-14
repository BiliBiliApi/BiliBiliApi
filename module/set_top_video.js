const base = require("../utils/request");

/**
 * 设置用户置顶视频 /set/top/video
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class SetTopVideo extends base {
    async run(cookie, params) {
        const result = this.post(`https://api.bilibili.com/x/space/top/arc/set`, params, cookie, null, true)
        return result
    }
}

module.exports = SetTopVideo;
