# 获取其他用户详细信息

**必选参数** : `mid` : 用户mid

**接口地址** : `/get/others/info`

**可选参数** : `无`

**调用例子** : `/get/others/info`

**说明** : 无

**响应说明** :

根对象：

| 字段      | 类型  | 内容   | 备注                  |
|---------|-----|------|---------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误 |
| message | str | 错误信息 | 默认为0                |
| ttl     | num | 1    |                     |
| data    | obj | 信息本体 |                     |

`data` 对象：

| 字段               | 类型   | 内容         | 备注                                                                                               |
|------------------|------|------------|--------------------------------------------------------------------------------------------------|
| mid              | num  | mid        |                                                                                                  |
| name             | str  | 昵称         |                                                                                                  |
| sex              | str  | 性别         | 男/女/保密                                                                                           |
| face             | str  | 头像链接       |                                                                                                  |
| face_nft         | num  | 是否为 nft 头像 | `0`不是nft头像<br />`1`是 nft 头像                                                                      |
| face_nft_type    | num  |            | 0,1                                                                                              |
| sign             | str  | 签名         |                                                                                                  |
| rank             | num  | 用户权限等级     | 目前应该无任何作用<br/>5000：0级未答题<br/>10000：普通会员<br/>20000：字幕君<br/>25000：VIP<br/>30000：真·职人<br/>32000：管理员 |
| level            | num  | 当前等级       | 0-6级                                                                                             |
| jointime         | num  | 注册时间       | 此接口返回恒为`0`                                                                                       |
| moral            | num  | 节操值        | 此接口返回恒为`0`                                                                                       |
| silence          | num  | 封禁状态       | 0：正常<br />1：被封                                                                                   |
| coins            | num  | 硬币数        | 需要登录(Cookie) <br />只能查看自己的<br />默认为0                                                             |
| fans_badge       | bool | 是否具有粉丝勋章   | false：无<br />true：有                                                                              |
| fans_medal       | obj  | 粉丝勋章信息     |                                                                                                  |
| official         | obj  | 认证信息       |                                                                                                  |
| vip              | obj  | 会员信息       |                                                                                                  |
| pendant          | obj  | 头像框信息      |                                                                                                  |
| nameplate        | obj  | 勋章信息       |                                                                                                  |
| user_honour_info | obj  |            |                                                                                                  |
| is_followed      | bool | 是否关注此用户    | true：已关注<br />false：未关注<br />需要登录(Cookie) <br />未登录恒为false                                       |
| top_photo        | str  | 主页头图链接     |                                                                                                  |
| theme            | obj  | 空          | **作用尚不明确**                                                                                       |
| sys_notice       | obj  | 系统通知       | 无内容则为空对象<br />主要用于展示如用户争议、纪念账号等等                                                                 |
| live_room        | obj  | 直播间信息      |                                                                                                  |
| birthday         | str  | 生日         | MM-DD<br />如设置隐私为空                                                                               |
| school           | obj  | 学校         |                                                                                                  |
| profession       | obj  | 专业资质信息     |                                                                                                  |
| tags             | null | 个人标签       |                                                                                                  |
| series           | obj  |            |                                                                                                  |
| is_senior_member | num  | 是否为硬核会员    | 0：否<br />1：是                                                                                     |
| mcn_info         | null |            |                                                                                                  |
| gaia_res_type    | num  |            |                                                                                                  |
| gaia_data        | null |            |                                                                                                  |
| is_risk          | bool |            |                                                                                                  |
| elec             | obj  | 充电信息       |                                                                                                  |
| contract         | obj  | 是否显示老粉计划   |                                                                                                  |

`rank` 示例

| UID       | rank  |
|-----------|-------|
| 2         | 20000 |
| 16765     | 20000 |
| 15773384  | 20000 |
| 124416    | 20000 |
| 429736362 | 25000 |
| 424261768 | 25000 |
| 41273726  | 25000 |
| 15080107  | 25000 |
| 9847497   | 25000 |
| 4856007   | 25000 |
| 928123    | 25000 |
| 132704    | 25000 |
| 70093     | 25000 |
| 47291     | 25000 |
| 27380     | 25000 |
| 22445     | 25000 |
| 3351      | 25000 |
| 1101      | 25000 |
| 93066     | 30000 |
| 2443068   | 30000 |
| 46368     | 30000 |
| 11167     | 30000 |

`profession` 示例

| UID        |
|------------|
| 654391     |
| 1440295    |
| 1785155    |
| 2990100    |
| 3875803    |

`data` 中的 `official` 对象：

| 字段    | 类型  | 内容   | 备注                                      |
|-------|-----|------|-----------------------------------------|
| role  | num | 认证类型 | 0：无<br />1 2 7 9：个人认证<br />3 4 5 6：机构认证 |
| title | str | 认证信息 | 无为空                                     |
| desc  | str | 认证备注 | 无为空                                     |
| type  | num | 是否认证 | -1：无<br />0：个人认证<br />1：机构认证            |

`data` 中的 `vip` 对象：

| 字段                   | 类型  | 内容        | 备注                                           |
|----------------------|-----|-----------|----------------------------------------------|
| type                 | num | 会员类型      | 0：无<br />1：月大会员<br />2：年度及以上大会员              |
| status               | num | 会员状态      | 0：无<br />1：有                                 |
| due_date             | num | 会员过期时间    | Unix时间戳(毫秒)                                  |
| vip_pay_type         | num | 支付类型      | 0：未支付（常见于官方账号）<br />1：已支付（以正常渠道获取的大会员均为此值）   |
| theme_type           | num | 0         | 作用尚不明确                                       |
| label                | obj | 会员标签      |                                              |
| avatar_subscript     | num | 是否显示会员图标  | 0：不显示<br />1：显示                              |
| nickname_color       | str | 会员昵称颜色    | 颜色码，一般为`#FB7299`，曾用于愚人节改变大会员配色               |
| role                 | num | 大角色类型     | 1：月度大会员<br/>3：年度大会员<br/>7：十年大会员<br/>15：百年大会员 |
| avatar_subscript_url | str | 大会员角标地址   |                                              |
| tv_vip_status        | num | 电视大会员状态   | 0：未开通                                        |
| tv_vip_pay_type      | num | 电视大会员支付类型 |                                              |

`vip` 中的 `label` 对象：

| 字段                        | 类型   | 内容       | 备注                                                                                                                           |
|---------------------------|------|----------|------------------------------------------------------------------------------------------------------------------------------|
| path                      | str  | 空        | 作用尚不明确                                                                                                                       |
| text                      | str  | 会员类型文案   | `大会员` `年度大会员` `十年大会员` `百年大会员` `最强绿鲤鱼`                                                                                        |
| label_theme               | str  | 会员标签     | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员<br/>fools_day_hundred_annual_vip：最强绿鲤鱼 |
| text_color                | str  | 会员标签     |                                                                                                                              |
| bg_style                  | num  | 1        |                                                                                                                              |
| bg_color                  | str  | 会员标签背景颜色 | 颜色码，一般为`#FB7299`，曾用于愚人节改变大会员配色                                                                                               |
| border_color              | str  | 会员标签边框颜色 | 未使用                                                                                                                          |
| use_img_label             | bool | `true`   |                                                                                                                              |
| img_label_uri_hans        | str  | `空串`     |                                                                                                                              |
| img_label_uri_hant        | str  | `空串`     |                                                                                                                              |
| img_label_uri_hans_static | str  | 大会员牌子图片  | 简体版                                                                                                                          |
| img_label_uri_hant_static | str  | 大会员牌子图片  | 繁体版                                                                                                                          |


`data` 中的 `pendant` 对象：

**普通头像框的`image`与`image_enhance`内容相同**
**动态头像框的`image`为png静态图片，`image_enhance`为webp动态图片，`image_enhance_frame`为png逐帧序列**

| 字段                  | 类型  | 内容           | 备注         |
|---------------------|-----|--------------|------------|
| pid                 | num | 头像框id        |            |
| name                | str | 头像框名称        |            |
| image               | str | 头像框图片url     |            |
| expire              | num | 过期时间         | 此接口返回恒为`0` |
| image_enhance       | str | 头像框图片url     |            |
| image_enhance_frame | str | 头像框图片逐帧序列url |            |

`data` 中的 `nameplate` 对象：

| 字段          | 类型  | 内容      | 备注  |
|-------------|-----|---------|-----|
| nid         | num | 勋章id    |     |
| name        | str | 勋章名称    |     |
| image       | str | 勋章图标    |     |
| image_small | str | 勋章图标（小） |     |
| level       | str | 勋章等级    |     |
| condition   | str | 获取条件    |     |

`data` 中的 `fans_medal` 对象：

| 字段    | 类型   | 内容        | 备注  |
|-------|------|-----------|-----|
| show  | bool |           |     |
| wear  | bool | 是否佩戴了粉丝勋章 |     |
| medal | obj  | 粉丝勋章信息    |     |

`fans_medal` 中的`medal` 对象：

| 字段                 | 类型  | 内容           | 备注               |
|--------------------|-----|--------------|------------------|
| uid                | num | 此用户mid       |                  |
| target_id          | num | 粉丝勋章所属UP的mid |                  |
| medal_id           | num | 粉丝勋章id       |                  |
| level              | num | 粉丝勋章等级       |                  |
| medal_name         | str | 粉丝勋章名称       |                  |
| medal_color        | num | 颜色           |                  |
| intimacy           | num | 当前亲密度        |                  |
| next_intimacy      | num | 下一等级所需亲密度    |                  |
| day_limit          | num | 每日亲密度获取上限    |                  |
| today_feed         | num | 今日已获得亲密度     |                  |
| medal_color_start  | num | 粉丝勋章颜色       | 十进制数，可转为十六进制颜色代码 |
| medal_color_end    | num | 粉丝勋章颜色       | 十进制数，可转为十六进制颜色代码 |
| medal_color_border | num | 粉丝勋章边框颜色     | 十进制数，可转为十六进制颜色代码 |
| is_lighted         | num |              |                  |
| light_status       | num |              |                  |
| wearing_status     | num | 当前是否佩戴       | 0：未佩戴<br />1：已佩戴 |
| score              | num |              |                  |

`data` 中的 `sys_notice` 对象：

| 字段          | 类型  | 内容   | 备注  |
|-------------|-----|------|-----|
| id          | num | id   |     |
| content     | str | 显示文案 |     |
| url         | str | 跳转地址 |     |
| notice_type | num | 提示类型 | 1,2 |
| icon        | str | 前缀图标 |     |
| text_color  | str | 文字颜色 |     |
| bg_color    | str | 背景颜色 |     |

`sys_notice` 示例

| id  | content                                         | url | notice_type | 示例用户                                                                                            |
|-----|-------------------------------------------------|-----|-------------|-------------------------------------------------------------------------------------------------|
| 5   | 该用户存在争议行为，已冻结其帐号功能的使用                           |     | 1           | [82385070](https://space.bilibili.com/82385070)                                                 |
| 8   | 该用户存在较大争议，请谨慎甄别其内容                              |     | 1           | [28062215](https://space.bilibili.com/28062215)                                                 |
| 11  | 该账号涉及合约争议，暂冻结其账号功能使用。详见公告->                     |     | 1           |
| 16  | 该UP主内容存在争议，请注意甄别视频内信息                           |     | 1           | [382534165](https://space.bilibili.com/382534165)                                               |
| 20  | 请允许我们在此献上最后的告别，以此纪念其在哔哩哔哩留下的回忆与足迹。请点此查看纪念账号相关说明 |     | 2           |
| 22  | 该账号涉及合约诉讼，封禁其账号使用。                              |     |
| 24  | 该账号涉及合约争议，暂冻结其账号功能使用。                           |     | 1           | [291229008](https://space.bilibili.com/291229008)                                               |
| 25  | 该用户涉及严重指控，暂冻结其账号功能使用                            |     | 1           | [81447581](https://space.bilibili.com/81447581)                                                 |
| 31  | 该用户涉及严重指控，暂冻结其账号功能使用                            |     | 1           | [22439273](https://space.bilibili.com/22439273)                                                 |
| 34  | 该用户涉及严重指控，暂冻结其账号功能使用                            |     | 1           | [1640486775](https://space.bilibili.com/1640486775)                                             |
| 36  | 该账户存在争议，请谨慎甄别                                   |     | 1           | [198297](https://space.bilibili.com/198297)<br/>[18149131](https://space.bilibili.com/18149131) |

`data` 中的 `live_room` 对象：

| 字段             | 类型  | 内容         | 备注               |
|----------------|-----|------------|------------------|
| roomStatus     | num | 直播间状态      | 0：无房间<br />1：有房间 |
| liveStatus     | num | 直播状态       | 0：未开播<br />1：直播中 |
| url            | str | 直播间网页 url  |                  |
| title          | str | 直播间标题      |                  |
| cover          | str | 直播间封面 url  |                  |
| watched_show   | obj |            |                  |
| roomid         | num | 直播间 id(短号) |                  |
| roundStatus    | num | 轮播状态       | 0：未轮播<br />1：轮播  |
| broadcast_type | num | 0          |                  |

`live_room` 中的 `watched_show` 对象：

| 字段            | 类型   | 内容                  | 备注  |
|---------------|------|---------------------|-----|
| switch        | bool | ?                   |     |
| num           | num  | total watched users |     |
| text_small    | str  |                     |     |
| text_large    | str  |                     |     |
| icon          | str  | watched icon url    |     |
| icon_location | str  | ?                   |     |
| icon_web      | str  | watched icon url    |     |

`data` 中的 `school` 对象：

| 字段   | 类型  | 内容     | 备注    |
|------|-----|--------|-------|
| name | str | 就读大学名称 | 没有则为空 |

`data` 中的 `profession` 对象：

| 字段         | 类型  | 内容   | 备注             |
|------------|-----|------|----------------|
| name       | str | 资质名称 |                |
| department | str | 职位   |                |
| title      | str | 所属机构 |                |
| is_show    | num | 是否显示 | 0：不显示<br/>1：显示 |

`data` 中的 `user_honour_info` 对象：

| 字段     | 类型    | 内容   | 备注  |
|--------|-------|------|-----|
| mid    | num   | 0    |     |
| colour | str   | null |     |
| tags   | array | null |     |

`data` 中的 `series` 对象：

| 字段                  | 类型   | 内容  | 备注  |
|---------------------|------|-----|-----|
| user_upgrade_status | num  | (?) |     |
| show_upgrade_window | bool | (?) |     |

`data` 中的 `elec` 对象：

| 字段        | 类型  | 内容  | 备注  |
|-----------|-----|-----|-----|
| show_info | obj |     |     |

`elec` 中的 `show_info` 对象：

| 字段       | 类型   | 内容      | 备注               |
|----------|------|---------|------------------|
| show     | bool | 是否开通了充电 |                  |
| state    | num  | 状态      | -1：未开通<br/>1：已开通 |
| title    | str  | `空串`    |                  |
| icon     | str  | `空串`    |                  |
| jump_url | str  | `空串`    |                  |

`data` 中的 `contract` 对象：

| 字段名               | 类型   | 内容        | 备注                        |
|-------------------|------|-----------|---------------------------|
| is_display        | bool |           | true/false<br/>在页面中未使用此字段 |
| is_follow_display | bool | 是否在显示老粉计划 | true：显示<br/>false：不显示     |