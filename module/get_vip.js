const base = require("../utils/request");

/**
 * 获取用户大会员状态 /get/vip
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetVip extends base {
    async run(cookie) {
        const result = this.get(`https://api.bilibili.com/x/vip/web/user/info`, null, cookie)
        return result
    }
}

module.exports = GetVip;
