# 获取账号实名认证状态

**必选参数** : `无`

**接口地址** : `/get/realname`

**可选参数** : `无`

**调用例子** : `/get/realname`

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

| 字段   | 类型 | 内容         | 备注                     |
| ------ | ---- | ------------ | ------------------------ |
| status | num  | 实名认证状态 | 0：未认证<br />1：已认证 |