webpackJsonp([115],{175:function(e,s,n){e.exports=n(402)},238:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={head:{title:" Vue 打包优化：使用 inline manifest"}}},402:function(e,s,n){var t=n(4)(n(238),n(642),null,null,null);t.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/inline-manifest-152.vue",t.esModule&&Object.keys(t.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] inline-manifest-152.vue: functional components are not supported with templates, they should use render functions."),e.exports=t.exports},642:function(e,s,n){e.exports={render:function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",[n("h1",[e._v("inline manifest")]),e._v(" "),n("div",{staticClass:"tip"},[n("p",[n("code",[e._v("manifest")]),e._v(" 文件为路径配置和异步组件名字列表，该做法可以减少一个"),n("code",[e._v("http")]),e._v("请求。")]),e._v(" "),n("p",[e._v("确保 "),n("code",[e._v("vux-loader")]),e._v("更新到 "),n("code",[e._v("^1.0.35")]),e._v("。")])]),e._v(" "),n("h2",[e._v("修改 index.html 模板")]),e._v(" "),n("p",[e._v("首先在页面的"),n("code",[e._v("</body>")]),e._v("前加入代码：")]),e._v(" "),n("pre",{staticClass:"hljs"},[n("code",[n("span",{staticClass:"hljs-tag"},[e._v("<"),n("span",{staticClass:"hljs-name"},[e._v("%=htmlWebpackPlugin.files.webpackManifest%")]),e._v(">")]),e._v("\n")])]),e._v(" "),n("h2",[e._v("配置 vux-loader")]),e._v(" "),n("p",[e._v("在"),n("code",[e._v("vux-loader")]),e._v("配置的 "),n("code",[e._v("plugins")]),e._v(" 列表中加入"),n("code",[e._v("inline-manifest")]),e._v("插件")]),e._v(" "),n("pre",{staticClass:"hljs"},[n("code",[e._v("plugins:[{\n  "),n("span",{staticClass:"hljs-attr"},[e._v("name")]),e._v(": "),n("span",{staticClass:"hljs-string"},[e._v("'inline-manifest'")]),e._v("\n}]\n")])]),e._v(" "),n("p",[e._v("或者简化写法直接使用名字：")]),e._v(" "),n("pre",{staticClass:"hljs"},[n("code",[e._v("plugins:["),n("span",{staticClass:"hljs-string"},[e._v("'inline-manifest'")]),e._v("]\n")])])])}]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=115.27976e0a.js.map