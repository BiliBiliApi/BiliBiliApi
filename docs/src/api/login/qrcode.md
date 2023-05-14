# 扫码登陆

**登陆流程**

申请二维码->等待客户端扫码->扫码成功->登录成功

**伪代码**

```
token, url = 申请二维码()
生成二维码(url) # 等待客户端扫码
while True:
    status, cookie = 扫码登录(token)
    match status:
        case 未扫描:
            continue
        case 二维码超时 | 二维码失效:
            提示('二维码失效或超时') # 需要用户重新操作
            break
        case 已扫描未确认:
            提示('扫描成功')
        case 登录成功:
            提示('扫描成功')
            存储cookie(cookie)
            SSO登录页面跳转()
            break
```