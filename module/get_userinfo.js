const base = require("../utils/request");

/**
 * 获取个人信息 /get/userinfo
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetUserInfo extends base {
    async run(cookie) {
        const result = this.get(`https://api.bilibili.com/x/space/myinfo`, null, cookie)
        return result
    }
}

module.exports = GetUserInfo;
