const base = require("../utils/request");

/**
 * 获取用户代表作视频列表 /get/masterpiece
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetMasterPiece extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/space/masterpiece?vmid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetMasterPiece;
