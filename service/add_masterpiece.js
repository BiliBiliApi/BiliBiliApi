const { AddMasterPiece } = require("../module");

/**
 * 添加用户代表作视频 /add/masterpiece
 * @returns 
 */
class AddMasterPieceService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const csrf = req.headers['cookie'].split(';')[1].split('=')[1]
        const params = {
            aid: req.body.aid,
            bvid: req.body.bvid,
            reason: req.body.reason,
            csrf
        }
        const module = new AddMasterPiece()
        const data = await module.run(cookie, params)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = AddMasterPieceService;
