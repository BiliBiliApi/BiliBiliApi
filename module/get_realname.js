const base = require("../utils/request");

/**
 * 获取账号实名认证状态 /get/realname
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetRealName extends base {
    async run(cookie) {
        const result = this.get(`https://api.bilibili.com/x/member/realname/status`, null, cookie)
        return result
    }
}

module.exports = GetRealName;
