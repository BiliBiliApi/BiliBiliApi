const { UpdateSpaceNotice } = require("../module");

/**
 * 更新用户个人空间公告 /update/space/notice
 * @returns 
 */
class UpdateSpaceNoticeService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const csrf = req.headers['cookie'].split(';')[1].split('=')[1]
        const params = {
            notice: req.body.notice,
            csrf
        }
        const module = new UpdateSpaceNotice()
        const data = await module.run(cookie, params)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = UpdateSpaceNoticeService;
