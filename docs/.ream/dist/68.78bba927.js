webpackJsonp([68],{170:function(s,a,t){s.exports=t(449)},285:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={head:{title:"umd 组件构建及使用"}}},449:function(s,a,t){var n=t(4)(t(285),t(543),null,null,null);n.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/umd-149.vue",n.esModule&&Object.keys(n.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] umd-149.vue: functional components are not supported with templates, they should use render functions."),s.exports=n.exports},543:function(s,a,t){s.exports={render:function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("h1",[s._v("umd 组件构建及使用")]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("从"),t("code",[s._v("2.0")]),s._v("开始，推荐使用"),t("code",[s._v("webpack")]),s._v("来调用组件，因此不再在"),t("code",[s._v("repo")]),s._v("中保存"),t("code",[s._v("umd")]),s._v("文件，但提供了生成命令。")]),s._v(" "),t("p",[s._v("请更新 "),t("code",[s._v("NodeJS")]),s._v(" 到版本 "),t("code",[s._v("7.6.0")]),s._v("及以上。")]),s._v(" "),t("p",[s._v("例子可查看："),t("a",{attrs:{href:"https://github.com/airyland/vux/tree/v2/docs/examples"}},[s._v("https://github.com/airyland/vux/tree/v2/docs/examples")])])]),s._v(" "),t("div",{staticClass:"danger"},[t("p",[s._v("强烈建议使用 "),t("code",[s._v("webpack")]),s._v(" 的方式开发，在 3.0 之后可能不再提供支持。")])]),s._v(" "),t("h2",[s._v("生成命令")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("git "),t("span",{staticClass:"hljs-built_in"},[s._v("clone")]),s._v(" https://github.com/airyland/vux.git --depth=1 // or just update: git pull\n"),t("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" vux\nnpm install\nnpm run build-components\n")])]),s._v(" "),t("p",[s._v("默认生成的语言是"),t("code",[s._v("zh-CN")]),s._v("，模块命名空间为"),t("code",[s._v("vux")]),s._v("，如"),t("code",[s._v("vuxGroup")]),s._v("，"),t("code",[s._v("vuxCell")]),s._v("，你可以在命令行中配置。")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("npm run build-components -- --locale='en' --namespace='X'\n")])]),s._v(" "),t("h2",[s._v("目录结构")]),s._v(" "),t("p",[s._v("生成的文件夹结构如：")]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("出于目录结构一致性考虑，即使是子组件也是一个文件夹，并且会有一个空的"),t("code",[s._v("index.min.css")]),s._v("样式文件。")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("|- dist/\n  |- vux.min.js ------------ 所有组件打包，仅用于测试，不推荐在生产环境使用\n  |- vux.min.css ----------- 所有组件样式打包，同样仅用于测试\n  |- components\n      |- actionsheet\n        |- index.min.js -------- 组件js代码\n        |- index.min.css ------- 组件css代码\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("vux.min.js 包括了所有的组件、插件及默认地址库，都挂载在全局变量vux上。当然为了使用方便同样直接挂载到了"),t("code",[s._v("window")]),s._v("上。")]),s._v(" "),t("p",[s._v("组件调用举例: "),t("code",[s._v("vuxCell")])]),s._v(" "),t("p",[s._v("插件调用举例："),t("code",[s._v("vuxAlertPlugin")])]),s._v(" "),t("p",[s._v("默认地址库调用："),t("code",[s._v("vuxChinaAddressData")])])]),s._v(" "),t("h2",[s._v("组件使用")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-meta"},[s._v("<!DOCTYPE html>")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"en"')]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("meta")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("charset")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"UTF-8"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("title")]),s._v(">")]),s._v("scripts"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("title")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"../dist/vux.min.css"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/vue/dist/vue.js"')]),s._v(">")]),t("span",{staticClass:"undefined"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"demo"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Vue"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"how"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"../dist/components/group/index.js"')]),s._v(">")]),t("span",{staticClass:"undefined"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"../dist/components/cell/index.js"')]),s._v(">")]),t("span",{staticClass:"undefined"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"actionscript"},[s._v("\n  Vue.component("),t("span",{staticClass:"hljs-string"},[s._v("'group'")]),s._v(", vuxGroup)\n  Vue.component("),t("span",{staticClass:"hljs-string"},[s._v("'cell'")]),s._v(", vuxCell)\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n    el: "),t("span",{staticClass:"hljs-string"},[s._v("'#demo'")]),s._v(",\n    data: {\n      how: "),t("span",{staticClass:"hljs-string"},[s._v("'Cool'")]),s._v("\n    }\n  })\n  ")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h2",[s._v("插件使用")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-meta"},[s._v("<!DOCTYPE html>")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"en"')]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("meta")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("charset")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"UTF-8"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("meta")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"viewport"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"width=device-width,initial-scale=1,user-scalable=0"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("title")]),s._v(">")]),s._v("scripts"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("title")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"../../dist/styles/reset.css"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"../../dist/plugins/alert/index.min.css"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"https://unpkg.com/vue/dist/vue.js"')]),s._v(">")]),t("span",{staticClass:"undefined"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("head")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"demo"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"../../dist/plugins/alert/index.min.js"')]),s._v(">")]),t("span",{staticClass:"undefined"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"actionscript"},[s._v("\n  Vue.use(vuxAlertPlugin)\n\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n    el: "),t("span",{staticClass:"hljs-string"},[s._v("'#demo'")]),s._v(",\n    data: {\n      how: "),t("span",{staticClass:"hljs-string"},[s._v("'Cool'")]),s._v("\n    },\n    mounted () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$vux.alert.show("),t("span",{staticClass:"hljs-string"},[s._v("'hello'")]),s._v(")\n    }\n  })\n  ")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("body")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("html")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h2",[s._v("生成css工具样式")]),s._v(" "),t("p",[s._v("包括"),t("code",[s._v("1px")]),s._v("解决方案，构建文件位于"),t("code",[s._v("dist/styles/*.css")]),s._v(",构建方式：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("npm run build-styles\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("为了使用方便，可以使用"),t("code",[s._v("npm run xbuild")]),s._v("来执行"),t("code",[s._v("build-components")]),s._v(" 及 "),t("code",[s._v("build-styles")])])])])}]},s.exports.render._withStripped=!0}});
//# sourceMappingURL=68.78bba927.js.map