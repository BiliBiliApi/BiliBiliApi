const base = require("../utils/request");

/**
 * 获取用户收藏的视频收藏夹 /get/collect/folder
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetCollectFolder extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/v3/fav/folder/collected/list?up_mid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetCollectFolder;
