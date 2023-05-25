
import { defineConfig } from 'vitepress';

export default defineConfig({
    description: "BiliBiliApi是哔哩哔哩 NodeJS 版 API",
    head: [
        ['meta', { name: 'keywords', content: '哔哩哔哩,bilibiliapi,BiliBiliApi,哔哩哔哩 node.js,哔哩哔哩接口,哔哩哔哩api,哔哩哔哩api接口' }],
        ['link', { rel: 'icon', href: '/bilibiliapi.png' }]
    ],
    title: 'BiliBiliApi',
    base: '/',
    themeConfig: {
        logo: '/bilibiliapi.png',
        siteTitle: 'BiliBiliApi',

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Yisailly.'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/BiliBiliApi/BiliBiliApi' }
        ],

        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/guide/', activeMatch: '/guide/' },
            { text: 'Api', link: '/api/', activeMatch: '/api/' },
            {
                text: '联系我',
                items: [
                    { text: 'Github', link: 'https://github.com/yisailly' },
                    // { text: '爱发电', link: '0' },
                    { text: 'Telegram', link: 'https://t.me/yisaily' },
                ]
            }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: '关于',
                    items: [
                        { text: '介绍', link: '/guide/' },
                        { text: '鸣谢', link: '/guide/thanks' },
                    ]
                },
            ],
            '/api/': [
                {
                    text: 'Api接口',
                    items: [
                        { text: '调用前须知', link: '/api/' },
                        {
                            text: '登录', link: '/api/login', items: [
                                {
                                    text: '扫码登录', link: '/api/login/qrcode', items: [
                                        { text: "申请二维码", link: '/api/login/apply_qrcode' },
                                        { text: "扫码状态", link: '/api/login/poll_qrcode' },
                                    ]
                                }
                            ],
                            collapsible: true,
                            collapsed: true,
                        },
                        { text: '获取个人信息', link: '/api/get_user_info' },
                        { text: '获取每日奖励状态', link: '/api/get_reward' },
                        { text: '获取用户大会员状态', link: '/api/get_vip' },
                        { text: '获取账号安全情况', link: '/api/get_safe' },
                        { text: '获取账号实名认证状态', link: '/api/get_realname' },
                        { text: '获取账号实名认证信息', link: '/api/get_realname_info' },
                        { text: '获取硬币变化情况', link: '/api/get_coinlog' },
                        { text: '修改个人签名', link: '/api/update_sign' },
                        { text: '退出登录', link: '/api/logout' },
                        { text: '获取登录记录', link: '/api/get_login_notice' },
                        { text: '获取未读消息数', link: '/api/get_message_unread' },
                        { text: '获取未读私信数', link: '/api/get_pmessage_unread' },
                        { text: '发送私信', link: '/api/send_pmessage' },
                        { text: '获取其他用户详细信息', link: '/api/get_others_info' },
                        { text: '获取用户关系状态数', link: '/api/get_relation_stat' },
                        { text: '获取UP主状态数', link: '/api/get_upstat' },
                        { text: '获取用户置顶视频', link: '/api/get_top_video' },
                        { text: '设置用户置顶视频', link: '/api/set_top_video' },
                        { text: '取消用户置顶视频', link: '/api/cancel_top_video' },
                        { text: '获取用户代表作视频列表', link: '/api/get_masterpiece' },
                        { text: '添加用户代表作视频', link: '/api/add_masterpiece' },
                        { text: '删除用户代表作视频', link: '/api/cancel_masterpiece' },
                        { text: '获取用户个人TAG', link: '/api/get_tag' },
                        { text: '更新用户个人TAG', link: '/api/update_tag' },
                        { text: '获取用户个人空间公告', link: '/api/get_space_notice' },
                        { text: '更新用户个人空间公告', link: '/api/update_space_notice' },
                        { text: '获取用户最近玩过的游戏', link: '/api/get_lastplaygame' },
                        { text: '获取用户最近投币的视频明细', link: '/api/get_coin_video' },
                        { text: '获取用户最近点赞的视频明细', link: '/api/get_like_video' },
                        { text: '获取用户投稿视频明细', link: '/api/get_contribute' },
                        { text: '获取用户创建的视频收藏夹', link: '/api/get_fav_folder' },
                        { text: '获取用户收藏的视频收藏夹', link: '/api/get_collect_folder' },
                    ],

                },
            ]
        }
    }
});

