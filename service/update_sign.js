const { UpdateSign } = require("../module");

/**
 * 修改个人签名 /update/sign
 * @returns 
 */
class UpdateSignService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const sign = req.query.sign
        if (!sign || sign == null || sign == '' || sign == undefined) {
            res.send({
                code: 400,
                msg: "缺少sign参数",
                data: null
            })
            return;
        }
        const csrf = req.headers['cookie'].split(';')[1].split('=')[1]
        const module = new UpdateSign()
        const data = await module.run(cookie, csrf, sign)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = UpdateSignService;
