const base = require("../utils/request");

/**
 * 获取每日奖励状态 /get/reward
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetReward extends base {
    async run(cookie) {
        const result = this.get(`https://api.bilibili.com/x/member/web/exp/reward`, null, cookie)
        return result
    }
}

module.exports = GetReward;
