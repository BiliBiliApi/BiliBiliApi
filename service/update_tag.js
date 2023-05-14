const { UpdateTag } = require("../module");

/**
 * 更新用户个人TAG /update/tag
 * @returns 
 */
class UpdateTagService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const csrf = req.headers['cookie'].split(';')[1].split('=')[1]
        const params = {
            tags: req.body.tags,
            csrf
        }
        const module = new UpdateTag()
        const data = await module.run(cookie, params)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = UpdateTagService;
