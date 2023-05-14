const base = require("../utils/request");

/**
 * 获取用户最近玩过的游戏 /get/lastplaygame
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetLastplaygame extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/lastplaygame?mid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetLastplaygame;
