const { PmessageSendMsg } = require("../module");

/**
 * 发送私信 /pmessage/send/msg
 * @returns 
 */
class PmessageSendMsgService {
    async run(req, res) {
        const deviceid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (name) {
            let randomInt = 16 * Math.random() | 0;
            return ("x" === name ? randomInt : 3 & randomInt | 8).toString(16).toUpperCase()
        }));
        const cookie = req.headers['cookie']
        const csrf = req.headers['cookie'].split(';')[1].split('=')[1]
        const params = {
            'msg[sender_uid]': Number(req.body.msg.sender_id),
            'msg[receiver_id]': Number(req.body.msg.receiver_id),
            'msg[receiver_type]': 1,
            'msg[msg_type]': Number(req.body.msg.msg_type),
            'msg[dev_id]': deviceid,
            'msg[content]': req.body.msg.content,
            'msg[timestamp]': Date.parse(new Date()) / 1000,
            'msg[msg_status]:': 0,
            csrf: csrf,
            csrf_token: csrf,
            'msg[new_face_version]': 0,
            mobi_app: 'web',
            from_firework: 0,
            build: 0,
        }
        const module = new PmessageSendMsg()
        const data = await module.run(cookie, params)
        res.send({
            code: 200,
            msg: "请求成功",
            data: data
        })
    }
}

module.exports = PmessageSendMsgService;
