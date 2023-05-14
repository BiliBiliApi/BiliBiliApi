const { GetRealName } = require("../module");

/**
 * 获取账号实名认证状态 /get/realname
 * @returns 
 */
class GetRealNameService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const module = new GetRealName()
        const data = await module.run(cookie)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetRealNameService;
