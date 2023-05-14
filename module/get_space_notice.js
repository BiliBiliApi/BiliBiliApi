const base = require("../utils/request");

/**
 * 获取用户个人空间公告 /get/space/notice
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetSpaceNotice extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/notice?mid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetSpaceNotice;
