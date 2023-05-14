const { GetRelationStat } = require("../module");

/**
 * 获取用户关系状态数 /get/relation/stat
 * @returns 
 */
class GetRelationStatService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const query = req.query.mid || ''

        if (!query || query == null || query == '' || query == undefined) {
            res.send({
                code: 400,
                msg: "缺少mid参数",
                data: null
            })
            return;
        }

        const module = new GetRelationStat()
        const data = await module.run(cookie, query)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = GetRelationStatService;
