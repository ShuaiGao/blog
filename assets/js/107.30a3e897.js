(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{434:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[s._v("#")]),s._v(" 环境配置")]),s._v(" "),t("p",[s._v("python离线图像识别使用tesseract库，对应python库为pytesseract。使用前需要先安装tesseract")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://tesseract-ocr.github.io/tessdoc/Installation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装文档"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://tesseract-ocr.github.io/tessdoc/Compiling.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("编译安装文档"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"windows-环境安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-环境安装"}},[s._v("#")]),s._v(" windows 环境安装")]),s._v(" "),t("h2",{attrs:{id:"mac-环境安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-环境安装"}},[s._v("#")]),s._v(" mac 环境安装")]),s._v(" "),t("p",[s._v("编译安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Packages which are always needed.")]),s._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" automake autoconf libtool\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pkgconfig\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" icu4c\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" leptonica\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Packages required for training tools.")]),s._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pango\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Optional packages for extra features.")]),s._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libarchive\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Optional package for builds using g++.")]),s._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/tesseract-ocr/tesseract/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" tesseract\n./autogen.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" build\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Optionally add CXX=g++-8 to the configure command if you really want to use a different compiler.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/configure "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PKG_CONFIG_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/opt/icu4c/lib/pkgconfig:/usr/local/opt/libarchive/lib/pkgconfig:/usr/local/opt/libffi/lib/pkgconfig\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-j")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Optionally install Tesseract.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Optionally build and install training tools.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面安装用于训练工具，酌情安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" training\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" training-install\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("安装完成后，设置环境变量")]),s._v(" "),t("p",[s._v("export TESSDATA_PREFIX=/usr/local/share/tessdata")]),s._v(" "),t("p",[s._v("执行代码会发现有报错 "),t("code",[s._v("Error opening data file /usr/local/share/tessdata/eng.traineddata")])]),s._v(" "),t("p",[s._v("出错原因是程序在载入训练数据，但未找到训练数据，这里我们可以从github上下载数据，地址为 https://github.com/tesseract-ocr/tessdata")]),s._v(" "),t("p",[s._v("或使用下面命令直接下载：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("wget https://github.com/tesseract-ocr/tessdata/raw/main/eng.traineddata\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"代码示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[s._v("#")]),s._v(" 代码示例")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pytesseract\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" PIL "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Image\n\nimg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Image"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./num.jpg'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntext "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pytesseract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("image_to_string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);