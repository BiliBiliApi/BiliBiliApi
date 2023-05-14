const axios = require('axios');
const _ = require('lodash');
const qs = require('qs');

class Base {
    constructor() {
        this._ = _;

        this.axios = axios;

        this.serverBaseURL = '';
        this.pathURL = '';
        this.timeOut = 2000;

        this.userAgent =
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15';

    }

    async get(url, params = {}, cookie = '') {
        const headers = {
            'Content-Type': 'application/json',
            Referer: 'https://www.bilibili.com',
            Connection: 'keep-alive',
            'User-Agent': this.userAgent,
            Cookie: cookie,
        };
        let result = {};
        try {
            result = await axios.get(url, {
                headers,
                params,
            }).then((res) => {
                return res
            })
        } catch (e) {
            await send();
        }

        global.Cookie = result.headers['set-cookie'] ? result.headers['set-cookie'] : null;

        return {
            ...result.data.data,
        };
    }

    async post(url, params = {}, cookie = '', prefix = '', urlencoded = false) {
        const headers = {
            'Content-Type': urlencoded ? 'application/x-www-form-urlencoded' : 'application/json',
            Referer: `https://${prefix ? prefix : 'www'}.bilibili.com`,
            Connection: 'keep-alive',
            'User-Agent': this.userAgent,
            Cookie: cookie,
        };
        let result = {};

        try {
            result = await axios({
                url,
                method: 'POST',
                headers,
                data: qs.stringify(params),
            });
        } catch (e) {
            return null;
        }

        return result.data;
    }
}

module.exports = Base;
