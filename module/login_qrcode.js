const base = require("../utils/request");

/**
 * 扫码登陆-扫描二维码并登录 /login/qrcode
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class LoginQrcode extends base {
    async run(query) {
        const result = this.get(`https://passport.bilibili.com/x/passport-login/web/qrcode/poll?qrcode_key=${query}`)
        return result
    }
}

module.exports = LoginQrcode;