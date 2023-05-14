const base = require("../utils/request");

/**
 * 获取账号安全情况 /get/safe
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetSafe extends base {
    async run(cookie) {
        const result = this.get(`https://passport.bilibili.com/web/site/user/info`, null, cookie)
        return result
    }
}

module.exports = GetSafe;
