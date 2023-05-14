const base = require("../utils/request");

/**
 * 获取用户最近投币的视频明细 /get/coin/video
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetCoinVideo extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/coin/video?vmid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetCoinVideo;
