const base = require("../utils/request");

/**
 * 扫码登陆-申请二维码 /login/apply/qrcode
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class LoginApplyQrcode extends base {
    async run() {
        const result = this.get("https://passport.bilibili.com/x/passport-login/web/qrcode/generate")
        return result
    }
}

module.exports = LoginApplyQrcode;
