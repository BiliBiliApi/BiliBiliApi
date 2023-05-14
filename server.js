const path = require('path')
const express = require('express')
const packageJSON = require('./package.json')
const chalk = require('chalk')
const cookieParser = require('cookie-parser');
const app = express()
const bodyParser = require('body-parser')
const cookie_auth = require('./middleware/verifify')

/**
 * Serve the BILI API.
 */
async function serveBiliApi() {
    const port = 3000
    const host = process.env.HOST || ''

    app.use(express.static(path.join(__dirname, 'public')))
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json());

    global.cookie_auth = cookie_auth

    require('./router')(app)

    app.post("/test", (req, res) => {
        console.log(req.body);
    })

    app.all('*', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header('Access-Control-Allow-Credentials', true);
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });

    app.get("/wc", (req, res) => {
        console.log(req.body);
        res.send("wc")
    })

    app.listen(port, host, () => {
        console.log(chalk.italic.gray(`---- ${packageJSON.name}.${packageJSON.description} ----`));
        console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
        console.log(chalk.italic.gray(`---- 当前版本：V${packageJSON.version}-${packageJSON.lastupdatetime} ----`));
    })
    
}

module.exports = {
    serveBiliApi
}