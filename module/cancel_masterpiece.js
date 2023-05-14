const base = require("../utils/request");

/**
 * 删除用户代表作视频 /cancel/masterpiece
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class CancelMasterPiece extends base {
    async run(cookie, params) {
        const result = this.post(`https://api.bilibili.com/x/space/masterpiece/cancel`, params, cookie, null, true)
        return result
    }
}

module.exports = CancelMasterPiece;
