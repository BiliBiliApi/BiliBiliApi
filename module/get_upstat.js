const base = require("../utils/request");

/**
 * 获取UP主状态数 /get/upstat
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetUpstat extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/upstat?mid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetUpstat;
