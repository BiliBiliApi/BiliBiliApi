const { GetSafe } = require("../module");

/**
 * 获取账号安全情况 /get/safe
 * @returns 
 */
class GetSafeService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const module = new GetSafe()
        const data = await module.run(cookie)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetSafeService;
