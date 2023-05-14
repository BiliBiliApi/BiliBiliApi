// Cookie校验
function cookie_auth(req, res, next) {
    const cookie = req.headers['cookie']
    if (cookie) {
        next();
    } else {
        res.status(401).send({
            code: 401,
            msg: "缺少cookie参数",
            data: null
        });
    }
}

module.exports = cookie_auth
