const base = require("../utils/request");

/**
 * 获取未读私信数 /pmessage/get/unread
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class PmessageGetUnread extends base {
    async run(cookie) {
        const result = this.get(`https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread`, null, cookie)
        return result
    }
}

module.exports = PmessageGetUnread;
