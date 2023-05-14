const base = require("../utils/request");

/**
 * 获取用户创建的视频收藏夹 /get/fav/folder
 * @param {*} query 携带参数
 * @param {*} request 请求函数
 * @returns 
 */
class GetFavFolder extends base {
    async run(cookie, mid) {
        const result = this.get(`https://api.bilibili.com/x/v3/fav/folder/created/list-all?up_mid=${mid}`, null, cookie)
        return result
    }
}

module.exports = GetFavFolder;
