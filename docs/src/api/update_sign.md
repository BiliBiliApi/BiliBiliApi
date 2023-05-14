# 修改个人签名

**必选参数** : `sign` : 签名内容(为空即为删除，最多支持70个字符)

**接口地址** : `/update/sign`

**可选参数** : `无`

**调用例子** : `/update/sign`

**说明** : 无

**响应说明** :

根对象：

| 字段    | 类型 | 内容     | 备注                                                         |
| ------- | ---- | -------- | ------------------------------------------------------------ |
| code    | num  | 返回值   | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />40015：签名包含敏感词<br />40021：签名不能包含表情图片<br />40022：签名过长 |
| message | str  | 错误信息 | 默认为0                                                      |
| ttl     | num  | 1        |                                                              |