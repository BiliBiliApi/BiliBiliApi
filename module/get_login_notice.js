const base = require("../utils/request");

/**
 * 获取登录记录 /get/login/notice
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetLoginNotice extends base {
    async run(cookie, mid) {
        const params = {
            mid,
        }
        const result = this.get(`https://api.bilibili.com/x/safecenter/login_notice`, params, cookie)
        return result
    }
}

module.exports = GetLoginNotice;
