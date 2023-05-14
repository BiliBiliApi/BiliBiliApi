# 获取个人信息

**必选参数** : `无`

**接口地址** : `/get/info`

**可选参数** : `无`

**调用例子** : `/get/info`

**说明** : 无

**响应说明** :

根对象：

| 字段    | 类型 | 内容     | 备注                      |
| ------- | ---- | -------- | ------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：未登录 |
| message | str  | 错误信息 | 默认为0                   |
| ttl     | num  | 1        |                           |
| data    | obj  | 信息本体 |                           |

`data` 对象：

| 字段            | 类型 | 内容         | 备注                     |
| --------------- | ---- | ------------ | ------------------------ |
| mid             | num  | mid          |                          |
| name            | str  | 昵称         |                          |
| sex             | str  | 性别         | 男 女 保密               |
| face            | str  | 头像图片url  |                          |
| sign            | str  | 签名         |                          |
| rank            | num  | 10000        | **作用尚不明确**         |
| level           | num  | 当前等级     | 0-6级                    |
| jointime        | num  | 0            | **作用尚不明确**         |
| moral           | num  | 节操         | 默认70                   |
| silence         | num  | 封禁状态     | 0：正常<br />1：被封     |
| email_status    | num  | 已验证邮箱   | 0：未验证<br />1：已验证 |
| tel_status      | num  | 已验证手机号 | 0：未验证<br />1：已验证 |
| identification  | num  | 1            | **作用尚不明确**         |
| vip             | obj  | 大会员状态   |                          |
| birthday        | num  | 生日         | 时间戳                   |
| is_tourist      | num  | 0            | **作用尚不明确**         |
| is_fake_account | num  | 0            | **作用尚不明确**         |
| pin_prompting   | num  | 0            | **作用尚不明确**         |
| is_deleted      | num  | 0            | **作用尚不明确**         |
| coins           | num  | 硬币数       |                          |
| following       | num  | 粉丝数       |                          |
| follower        | num  | 粉丝数       |                          |

`data` 中的 `vip` 对象：

| 字段             | 类型 | 内容             | 备注                                            |
| ---------------- | ---- | ---------------- | ----------------------------------------------- |
| type             | num  | 会员类型         | 0：无<br />1：月大会员<br />2：年度及以上大会员 |
| status           | num  | 会员状态         | 0：无<br />1：有                                |
| due_date         | num  | 会员过期时间      | Unix时间戳(毫秒) |
| theme_type       | num  | 0                | 作用尚不明确                                    |
| label            | obj  | 会员标签         |                                                 |
| avatar_subscript | num  | 是否显示会员图标 | 0：不显示<br />1：显示                          |
| nickname_color   | str  | 会员昵称颜色     | 颜色码                                          |

`vip` 中的 `label` 对象：

| 字段        | 类型 | 内容     | 备注                                                         |
| ----------- | ---- | -------- | ------------------------------------------------------------ |
| path        | str  | 空       | 作用尚不明确                                                 |
| text        | str  | 会员名称 |                                                              |
| label_theme | str  | 会员标签 | vip：大会员<br />annual_vip：年度大会员<br />ten_annual_vip：十年大会员<br />hundred_annual_vip：百年大会员 |

`data` 中的 `pendant` 对象：

| 字段   | 类型 | 内容        | 备注                 |
| ------ | ---- | ----------- | -------------------- |
| pid    | num  | 挂件id      | **详细说明有待补充** |
| name   | str  | 挂件名称    |                      |
| image  | str  | 挂件图片url |                      |
| expire | num  | 0           | **作用尚不明确**     |

`data` 中的 `nameplate` 对象：

| 字段        | 类型 | 内容             | 备注                 |
| ----------- | ---- | ---------------- | -------------------- |
| nid         | num  | 勋章id           | **详细说明有待补充** |
| name        | str  | 勋章名称         |                      |
| image       | str  | 挂件图片url 正常 |                      |
| image_small | str  | 勋章图片url 小   |                      |
| level       | str  | 勋章等级         |                      |
| condition   | str  | 勋章条件         |                      |

`data` 中的 `Official` 对象：

| 字段  | 类型 | 内容     | 备注                                              |
| ----- | ---- | -------- | ------------------------------------------------- |
| role  | num  | 认证类型 | 0：无<br />1 2 7：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 认证信息 | 无为空                                            |
| desc  | str  | 认证备注 | 无为空                                            |
| type  | num  | 是否认证 | -1：无<br />0：认证                               |

`data` 中的` level_exp` 对象：

| 字段          | 类型 | 内容     | 备注             |
| ------------- | ---- | -------- | ---------------- |
| current_level | num  | 当前等级 | 0-6级            |
| current_min   | num  | 0        | 指当前等级从多少经验值开始 |
| current_exp   | num  | 0        | 当前账户的经验值 |
| next_exp      | num  | 0        | 下一个等级所需的经验值**(不是还需要多少)** |