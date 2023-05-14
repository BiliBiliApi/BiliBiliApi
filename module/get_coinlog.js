const base = require("../utils/request");

/**
 * 获取硬币变化情况 /get/coinlog
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetCoinLog extends base {
    async run(cookie) {
        const result = this.get(`https://api.bilibili.com/x/member/web/coin/log`, null, cookie)
        return result
    }
}

module.exports = GetCoinLog;
