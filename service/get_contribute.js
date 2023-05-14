const { GetContribute } = require("../module");

/**
 * 获取用户投稿视频明细 /get/contribute
 * @returns 
 */
class GetContributeService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const mid = req.query.mid
        if (!mid || mid == null || mid == '' || mid == undefined) {
            res.send({
                code: 400,
                msg: "缺少mid参数",
                data: null
            })
            return;
        }
        const module = new GetContribute()
        const data = await module.run(cookie, mid)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetContributeService;
