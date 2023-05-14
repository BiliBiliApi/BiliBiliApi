const base = require("../utils/request");

/**
 * 发送私信 /pmessage/send/msg
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class PmessageSendMsg extends base {
    async run(cookie, params) {
        const result = this.post(`https://api.vc.bilibili.com/web_im/v1/web_im/send_msg`, params, cookie, 'message', true)
        return result
    }
}

module.exports = PmessageSendMsg;
