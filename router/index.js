const { LoginApplyQrcodeService, LoginQrcodeService, GetUserInfoService, GetRewardService, GetVipService, GetSafeService, GetRealNameService, GetRealNameInfoService, GetCoinLogService, UpdateSignService, LogoutService, GetLoginNoticeService, MessageGetUnreadService, PmessageGetUnreadService, PmessageSendMsgService, GetOthersInfoService, GetRelationStatService, GetUpstatService, GetTopVideoService, SetTopVideoService, CancelTopVideoService, GetMasterPieceService, AddMasterPieceService, CancelMasterPieceService, GetTagService, UpdateTagService, GetSpaceNoticeService, UpdateSpaceNoticeService, GetLastplaygameService, GetCoinVideoService, GetLikeVideoService, GetContributeService, GetFavFolderService, GetCollectFolderService} = require('../service');

module.exports = (app) => {
    app.post("/login/apply/qrcode", async (req, res) => {
        const module = new LoginApplyQrcodeService()
        await module.run(req, res);
    })
    app.post("/login/qrcode", async (req, res) => {
        const module = new LoginQrcodeService()
        await module.run(req, res);
    })
    app.post("/get/info", global.cookie_auth, async (req, res) => {
        const module = new GetUserInfoService()
        await module.run(req, res);
    })
    app.post("/get/reward", global.cookie_auth, async (req, res) => {
        const module = new GetRewardService()
        await module.run(req, res);
    })
    app.post("/get/vip", global.cookie_auth, async (req, res) => {
        const module = new GetVipService()
        await module.run(req, res);
    })
    app.post("/get/safe", global.cookie_auth, async (req, res) => {
        const module = new GetSafeService()
        await module.run(req, res);
    })
    app.post("/get/realname", global.cookie_auth, async (req, res) => {
        const module = new GetRealNameService()
        await module.run(req, res);
    })
    app.post("/get/realname/info", global.cookie_auth, async (req, res) => {
        const module = new GetRealNameInfoService()
        await module.run(req, res);
    })
    app.post("/get/coinlog", global.cookie_auth, async (req, res) => {
        const module = new GetCoinLogService()
        await module.run(req, res);
    })
    app.post("/update/sign", global.cookie_auth, async (req, res) => {
        const module = new UpdateSignService()
        await module.run(req, res);
    })
    app.post("/logout", global.cookie_auth, async (req, res) => {
        const module = new LogoutService()
        await module.run(req, res);
    })
    app.post("/get/login/notice", global.cookie_auth, async (req, res) => {
        const module = new GetLoginNoticeService()
        await module.run(req, res);
    })
    app.post("/message/get/unread", global.cookie_auth, async (req, res) => {
        const module = new MessageGetUnreadService()
        await module.run(req, res);
    })
    app.post("/pmessage/get/unread", global.cookie_auth, async (req, res) => {
        const module = new PmessageGetUnreadService()
        await module.run(req, res);
    })
    app.post("/pmessage/send/msg", global.cookie_auth, async (req, res) => {
        const module = new PmessageSendMsgService()
        await module.run(req, res);
    })
    app.post("/get/others/info", global.cookie_auth, async (req, res) => {
        const module = new GetOthersInfoService()
        await module.run(req, res);
    })
    app.post("/get/relation/stat", global.cookie_auth, async (req, res) => {
        const module = new GetRelationStatService()
        await module.run(req, res);
    })
    app.post("/get/upstat", global.cookie_auth, async (req, res) => {
        const module = new GetUpstatService()
        await module.run(req, res);
    })
    app.post("/get/top/video", global.cookie_auth, async (req, res) => {
        const module = new GetTopVideoService()
        await module.run(req, res);
    })
    app.post("/set/top/video", global.cookie_auth, async (req, res) => {
        const module = new SetTopVideoService()
        await module.run(req, res);
    })
    app.post("/cancel/top/video", global.cookie_auth, async (req, res) => {
        const module = new CancelTopVideoService()
        await module.run(req, res);
    })
    app.post("/get/masterpiece", global.cookie_auth, async (req, res) => {
        const module = new GetMasterPieceService()
        await module.run(req, res);
    })
    app.post("/add/masterpiece", global.cookie_auth, async (req, res) => {
        const module = new AddMasterPieceService()
        await module.run(req, res);
    })
    app.post("/cancel/masterpiece", global.cookie_auth, async (req, res) => {
        const module = new CancelMasterPieceService()
        await module.run(req, res);
    })
    app.post("/get/tag", global.cookie_auth, async (req, res) => {
        const module = new GetTagService()
        await module.run(req, res);
    })
    app.post("/update/tag", global.cookie_auth, async (req, res) => {
        const module = new UpdateTagService()
        await module.run(req, res);
    })
    app.post("/get/space/notice", global.cookie_auth, async (req, res) => {
        const module = new GetSpaceNoticeService()
        await module.run(req, res);
    })
    app.post("/update/space/notice", global.cookie_auth, async (req, res) => {
        const module = new UpdateSpaceNoticeService()
        await module.run(req, res);
    })
    app.post("/get/lastplaygame", global.cookie_auth, async (req, res) => {
        const module = new GetLastplaygameService()
        await module.run(req, res);
    })
    app.post("/get/coin/video", global.cookie_auth, async (req, res) => {
        const module = new GetCoinVideoService()
        await module.run(req, res);
    })
    app.post("/get/like/video", global.cookie_auth, async (req, res) => {
        const module = new GetLikeVideoService()
        await module.run(req, res);
    })
    app.post("/get/contribute", global.cookie_auth, async (req, res) => {
        const module = new GetContributeService()
        await module.run(req, res);
    })
    app.post("/get/fav/folder", global.cookie_auth, async (req, res) => {
        const module = new GetFavFolderService()
        await module.run(req, res);
    })
    app.post("/get/collect/folder", global.cookie_auth, async (req, res) => {
        const module = new GetCollectFolderService()
        await module.run(req, res);
    })
}