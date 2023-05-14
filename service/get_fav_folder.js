const { GetFavFolder } = require("../module");

/**
 * 获取用户创建的视频收藏夹 /get/fav/folder
 * @returns 
 */
class GetFavFolderService {
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
        const module = new GetFavFolder()
        const data = await module.run(cookie, mid)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetFavFolderService;
