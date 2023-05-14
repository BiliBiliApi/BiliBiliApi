const { GetCoinLog } = require("../module");

/**
 * 获取硬币变化情况 /get/coinlog
 * @returns 
 */
class GetCoinLogService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const module = new GetCoinLog()
        const data = await module.run(cookie)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetCoinLogService;
