const base = require("../utils/request");

/**
 * 获取用户投稿视频明细 /get/contribute
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetContribute extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/wbi/arc/search?mid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetContribute;
