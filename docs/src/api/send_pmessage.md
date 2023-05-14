# 发送私信

**必选参数** : `sender_id` : 发送者mid `receiver_id` : 接收者mid `msg_type` : 消息类型	 1:发送文字 2:发送图片 5:撤回消息 `content` : 发送内容 1:{"content":"内容"} 2:{"url":"链接"}

**接口地址** : `/pmessage/send/msg`

**可选参数** : `无`

**调用例子** : `/pmessage/send/msg`

**说明** : 请求此接口时请将头部 `content-type` 更换为 `application/x-www-form-urlencode`

**响应说明** : 无