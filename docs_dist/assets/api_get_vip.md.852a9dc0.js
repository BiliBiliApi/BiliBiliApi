import{_ as t,o as d,c as e,O as r}from"./chunks/framework.9be35eee.js";const l=JSON.parse('{"title":"获取用户大会员状态","description":"","frontmatter":{},"headers":[],"relativePath":"api/get_vip.md","filePath":"api/get_vip.md"}'),o={name:"api/get_vip.md"},a=r('<h1 id="获取用户大会员状态" tabindex="-1">获取用户大会员状态 <a class="header-anchor" href="#获取用户大会员状态" aria-label="Permalink to &quot;获取用户大会员状态&quot;">​</a></h1><p><strong>必选参数</strong> : <code>无</code></p><p><strong>接口地址</strong> : <code>/get/vip</code></p><p><strong>可选参数</strong> : <code>无</code></p><p><strong>调用例子</strong> : <code>/get/vip</code></p><p><strong>说明</strong> : 无</p><p><strong>响应说明</strong> :</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>我的mid</td><td></td></tr><tr><td>vip_type</td><td>num</td><td>大会员类型</td><td>0：无<br>1：月度<br>2：年度</td></tr><tr><td>vip_status</td><td>num</td><td>大会员状态</td><td>1：正常<br>2：由于IP地址更换过于频繁,服务被冻结<br>3：你的大会员账号风险过高，大会员功能已被锁定</td></tr><tr><td>vip_due_date</td><td>num</td><td>大会员到期时间</td><td>时间戳 毫秒</td></tr><tr><td>vip_pay_type</td><td>num</td><td>是否已购买大会员</td><td>0：未购买<br>1：已购买</td></tr><tr><td>theme_type</td><td>num</td><td>0</td><td>作用尚不明确</td></tr></tbody></table>',11),p=[a];function n(s,_,c,h,i,m){return d(),e("div",null,p)}const b=t(o,[["render",n]]);export{l as __pageData,b as default};