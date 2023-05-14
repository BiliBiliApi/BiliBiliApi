const base = require("../utils/request");

/**
 * 获取其他用户详细信息 /get/others/info
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetOthersInfo extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/wbi/acc/info?mid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetOthersInfo;
