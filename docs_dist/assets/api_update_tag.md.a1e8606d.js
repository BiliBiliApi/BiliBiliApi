import{_ as t,o as d,c as a,O as e}from"./chunks/framework.9be35eee.js";const l=JSON.parse('{"title":"更新用户个人TAG","description":"","frontmatter":{},"headers":[],"relativePath":"api/update_tag.md","filePath":"api/update_tag.md"}'),o={name:"api/update_tag.md"},r=e('<h1 id="更新用户个人tag" tabindex="-1">更新用户个人TAG <a class="header-anchor" href="#更新用户个人tag" aria-label="Permalink to &quot;更新用户个人TAG&quot;">​</a></h1><p><strong>必选参数</strong> : 无</p><p><strong>接口地址</strong> : <code>/update/tag</code></p><p><strong>可选参数</strong> : <code>tags</code> : 要设置的TAG内容 删除公告留空或省去即可，各TAG长度小于10字符，最多5个TAG，各TAG之间用&quot;,&quot;(%2C)分隔,重复TAG无效</p><p><strong>调用例子</strong> : <code>/update/tag</code></p><p><strong>说明</strong> : 无</p><p><strong>响应说明</strong> :</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误（超出长度限制）</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table>',9),s=[r];function n(p,_,c,g,h,i){return d(),a("div",null,s)}const T=t(o,[["render",n]]);export{l as __pageData,T as default};