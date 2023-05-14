const { GetUserInfo } = require('../module')

/**
 * 获取个人信息 /get/info
 * @returns 
 */
class GetUserInfoService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const module = new GetUserInfo()
        const data = await module.run(cookie)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetUserInfoService;
