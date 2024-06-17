(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{407:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),a("h3",{attrs:{id:"_1-添加用户组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加用户组"}},[s._v("#")]),s._v(" 1. 添加用户组")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" business\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-添加用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加用户"}},[s._v("#")]),s._v(" 2. 添加用户")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" family\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改用户组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" family "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" business\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"配置用户-组-远程登录权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置用户-组-远程登录权限"}},[s._v("#")]),s._v(" 配置用户(组)远程登录权限")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑文件 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加内容")]),s._v("\nAllowGroups business root\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启sshd 服务")]),s._v("\nsystemctl restart sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"配置登录ssh密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置登录ssh密钥"}},[s._v("#")]),s._v(" 配置登录ssh密钥")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成密钥, 将生成 id_ed25519 和 id_ed25519.pub 文件")]),s._v("\nssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ed25519\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将密钥添加到 authorized_keys")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" 密钥.pub "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" authorized_keys \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意 authorized_keys 文件的权限需要是 600")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改文件权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" authorized_keys\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"远程登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程登录"}},[s._v("#")]),s._v(" 远程登录")]),s._v(" "),a("p",[s._v("这里没有设置用户的密码，该用户进用于特定业务服务的部署，用户也只允许使用ssh登录")]),s._v(" "),a("p",[s._v("拷贝 id_ed25519 文件到本地，用于远程登录, 例如：存放目录 "),a("code",[s._v("~/.ssh/id_ed25519")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" ~/.ssh/id_ed25519 family@your_ip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"补充内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充内容"}},[s._v("#")]),s._v(" 补充内容")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("用户组文件: "),a("code",[s._v("/etc/group")])])]),s._v(" "),a("li",[a("p",[s._v("用户文件: "),a("code",[s._v("/etc/passwd")])])]),s._v(" "),a("li",[a("p",[s._v("用户密码文件："),a("code",[s._v("/etc/shadow")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);