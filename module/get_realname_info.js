const base = require("../utils/request");

/**
 * 获取账号实名认证信息 /get/realname/info
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetRealNameInfo extends base {
    async run(cookie) {
        const result = this.get(`https://api.bilibili.com/x/member/realname/apply/status`, null, cookie)
        return result
    }
}

module.exports = GetRealNameInfo;
