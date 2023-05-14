const base = require("../utils/request");

/**
 * 更新用户个人TAG /update/tag
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class UpdateTag extends base {
    async run(cookie, params) {
        const result = this.post(`https://api.bilibili.com/x/space/acc/tags/set`, params, cookie, null, true)
        return result
    }
}

module.exports = UpdateTag;
