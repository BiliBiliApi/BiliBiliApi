const base = require("../utils/request");

/**
 * 获取用户关系状态数 /get/relation/stat
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetRelationStat extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/relation/stat?vmid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetRelationStat;
