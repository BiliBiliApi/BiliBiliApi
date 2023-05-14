const { LoginQrcode } = require('../module')

/**
 * 扫码登陆-扫描二维码并登录 /login/qrcode
 * @returns 
 */
class LoginQrcodeService {
    async run(req, res) {
        const query = req.query.key || ''

        if (!query || query == null || query == '' || query == undefined) {
            res.send({
                code: 400,
                msg: "缺少key参数",
                data: null
            })
            return;
        }
        const module = new LoginQrcode()
        const data = await module.run(query)
        let cookie;
        if (global.Cookie == null) {
            return;
        } else {
            cookie = global.Cookie.map((i) => {
                return i.replace(/\s*Domain=[^(;|$)]+;*/, '').replace(/\s*Path=[^(;|$)]+;*/, '').replace(/\s*Expires=[^(;|$)]+;*/, '').replace(/\s*HttpOnly;[^(;|$)]+;*/, '')
            }).join("")
        }
        res.send({
            code: 200,
            msg: "请求成功",
            data: data,
            cookie
        })
    }
}

module.exports = LoginQrcodeService;