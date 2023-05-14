const { CancelMasterPiece } = require("../module");

/**
 * 删除用户代表作视频 /cancel/masterpiece
 * @returns 
 */
class CancelMasterPieceService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const csrf = req.headers['cookie'].split(';')[1].split('=')[1]
        const params = {
            aid: req.body.aid,
            bvid: req.body.bvid,
            csrf
        }
        const module = new CancelMasterPiece()
        const data = await module.run(cookie, params)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = CancelMasterPieceService;
