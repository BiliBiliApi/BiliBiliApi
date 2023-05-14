const { MessageGetUnread } = require("../module");

/**
 * 获取未读消息数 /message/get/unread
 * @returns 
 */
class MessageGetUnreadService {
    async run(req, res) {
        const cookie = req.headers['cookie']
        const module = new MessageGetUnread()
        const data = await module.run(cookie)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = MessageGetUnreadService;
