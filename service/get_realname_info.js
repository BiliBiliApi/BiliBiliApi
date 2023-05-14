const {GetRealNameInfo } = require("../module");

/**
 * 获取账号实名认证信息 /get/realname/info
 * @returns 
 */
class GetRealNameInfoService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const module = new GetRealNameInfo()
        const data = await module.run(cookie)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetRealNameInfoService;
