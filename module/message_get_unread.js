const base = require("../utils/request");

/**
 * 获取未读消息数 /message/get/unread
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class MessageGetUnread extends base {
    async run(cookie) {
        const result = this.get(`https://api.bilibili.com/x/msgfeed/unread`, null, cookie)
        return result
    }
}

module.exports = MessageGetUnread;
