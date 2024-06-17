(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{385:function(s,a,t){"use strict";t.r(a);var n=t(4),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"go-编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-编译"}},[s._v("#")]),s._v(" go 编译")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac 编译")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("darwin  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOARCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 go build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" ludo-server main.go\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linux 编译")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOARCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 go build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" ludo-server main.go\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"golang-编译时改变参数-比如传递版本号等信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-编译时改变参数-比如传递版本号等信息"}},[s._v("#")]),s._v(" Golang 编译时改变参数，比如传递版本号等信息")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.twle.cn/t/19202",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考博客链接"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    gitHash   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    gitTag    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    buildTime "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n    goVersion "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Args\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-v"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Git Comit Hash:%s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gitHash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Git Tag :%s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" gitTag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"编译时间: %s \\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" buildTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"编译器 Go 版本: %s \\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" goVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("编译参数如下")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TAG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1.88.88\ngo build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ldflags")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"-X 'main.goVersion="),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("go version"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("' -X 'main.gitTag="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TAG}")]),s._v("' -X 'main.gitHash="),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%H"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("' -X 'main.buildTime="),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%ci"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("'\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" main main.go\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("编译输出结果如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("% "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TAG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v1.88.88\n% go build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ldflags")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"-X 'main.goVersion="),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("go version"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("' -X 'main.gitTag="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${TAG}")]),s._v("' -X 'main.gitHash="),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%H"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("' -X 'main.buildTime="),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%ci"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("'\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" main main.go\n% ./main\n% ./main "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\nGit Comit Hash:65ca716c4bb1b23ea96128b74e0360258dc6b4e2\nGit Tag :v1.88.88\n编译时间: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-04-18 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":15:53 +0800\n编译器 Go 版本: go version go1.15.2 darwin/amd64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"go-build-附加参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-build-附加参数"}},[s._v("#")]),s._v(" go build 附加参数")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("附加参数")]),s._v(" "),a("th",[s._v("备 注")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-v")]),s._v(" "),a("td",[s._v("编译时显示包名")])]),s._v(" "),a("tr",[a("td",[s._v("-p n")]),s._v(" "),a("td",[s._v("开启并发编译，默认情况下该值为 CPU 逻辑核数")])]),s._v(" "),a("tr",[a("td",[s._v("-a")]),s._v(" "),a("td",[s._v("强制重新构建")])]),s._v(" "),a("tr",[a("td",[s._v("-n")]),s._v(" "),a("td",[s._v("打印编译时会用到的所有命令，但不真正执行")])]),s._v(" "),a("tr",[a("td",[s._v("-x")]),s._v(" "),a("td",[s._v("打印编译时会用到的所有命令")])]),s._v(" "),a("tr",[a("td",[s._v("-race")]),s._v(" "),a("td",[s._v("开启竞态检测")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);