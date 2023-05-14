const { GetReward } = require("../module");

/**
 * 获取每日奖励状态 /get/reward
 * @returns 
 */
class GetRewardService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const module = new GetReward()
        const data = await module.run(cookie)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetRewardService;
