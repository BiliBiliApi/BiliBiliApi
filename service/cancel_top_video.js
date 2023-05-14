const { CancelTopVideo } = require("../module");

/**
 * 取消用户置顶视频 /cancel/top/video
 * @returns 
 */
class CancelTopVideoService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const params = {
            csrf: req.headers['cookie'].split(';')[1].split('=')[1]
        }
        const module = new CancelTopVideo()
        const data = await module.run(cookie, params)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = CancelTopVideoService;
