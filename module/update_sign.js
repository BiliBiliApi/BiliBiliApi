const base = require("../utils/request");

/**
 * 修改个人签名 /update/sign
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class UpdateSign extends base {
    async run(cookie, csrf, sign) {
        const params = {
            csrf,
            user_sign: sign
        }
        const result = this.post(`https://api.bilibili.com/x/member/web/sign/update`, params, cookie)
        return result
    }
}

module.exports = UpdateSign;
