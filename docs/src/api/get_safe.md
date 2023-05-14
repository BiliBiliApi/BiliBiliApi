# 获取账号安全情况

**必选参数** : `无`

**接口地址** : `/get/safe`

**可选参数** : `无`

**调用例子** : `/get/safe`

**说明** : 无

**响应说明** :

根对象：

| 字段    | 类型 | 内容     | 备注                          |
| ------- | ---- | -------- | ----------------------------- |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录 |
| message | str  | 错误信息 | 默认为0                       |
| ttl     | num  | 1        |                               |
| data    | obj  | 信息本体 |                               |

`data` 对象：

| 字段          | 类型 | 内容             | 备注 |
| ------------- | ---- | ---------------- | ---- |
| account_info  | obj  | 账号绑定信息     |      |
| account_safe  | obj  | 密码安全信息     |      |
| account_sns   | obj  | 互联登录绑定信息 |      |
| account_other | obj  |                  |      |

`data` 中的 `account_info` 对象：

| 字段               | 类型 | 内容           | 备注                            |
| ------------------ | ---- | -------------- | ------------------------------- |
| hide_tel           | str  | 绑定的手机号   | 星号隐藏部分信息                |
| hide_mail          | str  | 绑定的邮箱     | 星号隐藏部分信息                |
| bind_tel           | bool | 是否绑定手机号 | false：未绑定<br />true：已绑定 |
| bind_mail          | bool | 是否绑定邮箱   | false：未绑定<br />true：已绑定 |
| tel_verify         | bool | 是否验证手机号 | false：未验证<br />true：已验证 |
| mail_verify        | bool | 是否验证邮箱   | false：未验证<br />true：已验证 |
| unneeded_check     | bool | 是否未设置密码 | false：已设置<br />true：未设置 |
| realname_certified | bool | 是否实名认证   | false：已认证<br />true：未认证 |

`data` 中的 `account_safe` 对象：

| 字段      | 类型 | 内容             | 备注                          |
| --------- | ---- | ---------------- | ----------------------------- |
| Score     | num  | 账号安全等级     | 0-100<br />已弃用？          |
| score_new | num  | 新版账号安全等级 | 0-100                        |
| pwd_level | num  | 当前密码强度等级 | 1：弱<br />2：中<br />3：强   |
| security  | bool | 当前密码是否安全 | false：不安全<br />true：安全 |

`data` 中的 `account_sns` 对象：

| 字段        | 类型 | 内容         | 备注                     |
| ----------- | ---- | ------------ | ------------------------ |
| weibo_bind  | num  | 是否绑定微博 | 0：未绑定<br />1：已绑定 |
| qq_bind     | num  | 是否绑定qq   | 0：未绑定<br />1：已绑定 |
| wechat_bind | num  | 是否绑定微信 | 0：未绑定<br />1：已绑定 |

`data` 中的 `account_other` 对象：

| 字段       | 类型 | 内容  | 备注         |
| ---------- | ---- | ----- | ------------ |
| skipVerify | bool | false | 作用尚不明确 |