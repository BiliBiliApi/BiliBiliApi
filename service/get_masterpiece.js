const { GetMasterPiece } = require("../module");

/**
 * 获取用户代表作视频列表 /get/masterpiece
 * @returns 
 */
class GetMasterPieceService {
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
        const module = new GetMasterPiece()
        const data = await module.run(cookie, mid)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetMasterPieceService;
