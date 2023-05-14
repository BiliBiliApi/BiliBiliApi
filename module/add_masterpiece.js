const base = require("../utils/request");

/**
 * 添加用户代表作视频 /add/masterpiece
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class AddMasterPiece extends base {
    async run(cookie, params) {
        const result = this.post(`https://api.bilibili.com/x/space/masterpiece/add`, params, cookie, null, true)
        return result
    }
}

module.exports = AddMasterPiece;
