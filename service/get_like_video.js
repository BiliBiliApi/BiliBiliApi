const { GetLikeVideo } = require("../module");

/**
 * 获取用户最近点赞的视频明细 /get/like/video
 * @returns 
 */
class GetLikeVideoService {
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
        const module = new GetLikeVideo()
        const data = await module.run(cookie, mid)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetLikeVideoService;
