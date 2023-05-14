const base = require("../utils/request");

/**
 * 更新用户个人空间公告 /update/space/notice
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class UpdateSpaceNotice extends base {
    async run(cookie, params) {
        const result = this.post(`https://api.bilibili.com/x/space/notice/set`, params, cookie, null, true)
        return result
    }
}

module.exports = UpdateSpaceNotice;
