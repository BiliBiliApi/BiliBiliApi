# 取消用户置顶视频

**必选参数** : 无

**接口地址** : `/cancel/top/video`

**可选参数** : `无`

**调用例子** : `/cancel/top/video`

**说明** : 无

**响应说明** :

根对象：

| 字段      | 类型  | 内容   | 备注                                                           |
|---------|-----|------|--------------------------------------------------------------|
| code    | num | 返回值  | 0：成功<br />-101：账号未登录<br />-111：csrf校验失败<br />-400：请求错误（重复取消） |
| message | str | 错误信息 | 默认为0                                                         |
| ttl     | num | 1    |        