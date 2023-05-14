const { PmessageGetUnread } = require("../module");

/**
 * 获取未读私信数 /pmessage/get/unread
 * @returns 
 */
class PmessageGetUnreadService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const module = new PmessageGetUnread()
        const data = await module.run(cookie)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = PmessageGetUnreadService;
