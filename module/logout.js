const base = require("../utils/request");

/**
 * 退出登录 /logout
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class Logout extends base {
    async run(cookie, csrf) {
        const params = {
            csrf
        }
        const result = this.post(`https://passport.bilibili.com/login/exit/v2`, params, cookie)
        return result
    }
}

module.exports = Logout;
