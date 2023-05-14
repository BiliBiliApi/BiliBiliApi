const { GetCollectFolder } = require("../module");

/**
 * 获取用户收藏的视频收藏夹 /get/collect/folder
 * @returns 
 */
class GetCollectFolderService {
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
        const module = new GetCollectFolder()
        const data = await module.run(cookie, mid)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetCollectFolderService;
