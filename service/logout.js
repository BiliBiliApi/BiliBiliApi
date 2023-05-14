const { Logout } = require("../module")

/**
 * 退出登录 /logout
 * @returns 
 */
class LogoutService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const csrf = req.headers['cookie'].split(';')[1].split('=')[1]
        const module = new Logout()
        const data = await module.run(cookie, csrf)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = LogoutService;
