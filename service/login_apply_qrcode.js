const { LoginApplyQrcode } = require('../module')

/**
 * 扫码登陆-申请二维码 /login/apply/qrcode
 * @returns 
 */
class LoginApplyQrcodeService {
    async run(req, res) {
        const module = new LoginApplyQrcode()
        const data = await module.run()
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = LoginApplyQrcodeService;
