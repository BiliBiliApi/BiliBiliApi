import{_ as s,o as a,c as n,O as e}from"./chunks/framework.9be35eee.js";const y=JSON.parse('{"title":"扫码登陆","description":"","frontmatter":{},"headers":[],"relativePath":"api/login/qrcode.md","filePath":"api/login/qrcode.md"}'),l={name:"api/login/qrcode.md"},p=e(`<h1 id="扫码登陆" tabindex="-1">扫码登陆 <a class="header-anchor" href="#扫码登陆" aria-label="Permalink to &quot;扫码登陆&quot;">​</a></h1><p><strong>登陆流程</strong></p><p>申请二维码-&gt;等待客户端扫码-&gt;扫码成功-&gt;登录成功</p><p><strong>伪代码</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">token, url = 申请二维码()</span></span>
<span class="line"><span style="color:#A6ACCD;">生成二维码(url) # 等待客户端扫码</span></span>
<span class="line"><span style="color:#A6ACCD;">while True:</span></span>
<span class="line"><span style="color:#A6ACCD;">    status, cookie = 扫码登录(token)</span></span>
<span class="line"><span style="color:#A6ACCD;">    match status:</span></span>
<span class="line"><span style="color:#A6ACCD;">        case 未扫描:</span></span>
<span class="line"><span style="color:#A6ACCD;">            continue</span></span>
<span class="line"><span style="color:#A6ACCD;">        case 二维码超时 | 二维码失效:</span></span>
<span class="line"><span style="color:#A6ACCD;">            提示(&#39;二维码失效或超时&#39;) # 需要用户重新操作</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span>
<span class="line"><span style="color:#A6ACCD;">        case 已扫描未确认:</span></span>
<span class="line"><span style="color:#A6ACCD;">            提示(&#39;扫描成功&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        case 登录成功:</span></span>
<span class="line"><span style="color:#A6ACCD;">            提示(&#39;扫描成功&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            存储cookie(cookie)</span></span>
<span class="line"><span style="color:#A6ACCD;">            SSO登录页面跳转()</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span></code></pre></div>`,5),o=[p];function t(c,r,i,C,A,_){return a(),n("div",null,o)}const D=s(l,[["render",t]]);export{y as __pageData,D as default};
