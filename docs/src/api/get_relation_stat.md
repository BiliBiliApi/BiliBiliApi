# 获取用户关系状态数

**必选参数** : `mid` : 用户mid

**接口地址** : `/get/relation/stat`

**可选参数** : `无`

**调用例子** : `/get/relation/stat`

**说明** : 无

**响应说明** :

根对象：

| 字段    | 类型 | 内容     | 备注                        |
| ------- | ---- | -------- | --------------------------- |
| code    | num  | 返回值   | 0：成功<br />-400：请求错误 |
| message | str  | 错误信息 | 默认为0                     |
| ttl     | num  | 1        |                             |
| data    | obj  | 信息本体 |                             |

`data` 对象：

| 字段      | 类型 | 内容        | 备注                                            |
| --------- | ---- | ----------- | ----------------------------------------------- |
| mid       | num  | 目标用户mid |                                                 |
| following | num  | 关注数      |                                                 |
| whisper   | num  | 悄悄关注数  | 需要登录(Cookie或APP) <br />未登录或非自己恒为0 |
| black     | num  | 黑名单数    | 需要登录(Cookie或APP) <br />未登录或非自己恒为0 |
| follower  | num  | 粉丝数      |                                                 |