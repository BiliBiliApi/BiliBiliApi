const { GetVip } = require("../module");

/**
 * 获取用户大会员状态 /get/vip
 * @returns 
 */
class GetVipService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const module = new GetVip()
        const data = await module.run(cookie)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetVipService;
