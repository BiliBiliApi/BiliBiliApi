const base = require("../utils/request");

/**
 * 获取用户个人TAG /get/tag
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetTag extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/acc/tags?mid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetTag;
