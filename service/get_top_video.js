const { GetTopVideo } = require("../module");

/**
 * 获取用户置顶视频 /get/top/video
 * @returns 
 */
class GetTopVideoService {
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
        const module = new GetTopVideo()
        const data = await module.run(cookie, mid)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetTopVideoService;
