webpackJsonp([22],{186:function(s,e,t){s.exports=t(495)},331:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={head:{title:" Vue 应用中使用微信 jssdk"}}},495:function(s,e,t){var n=t(4)(t(331),t(573),null,null,null);n.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/vue-wechat-jssdk-162.vue",n.esModule&&Object.keys(n.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] vue-wechat-jssdk-162.vue: functional components are not supported with templates, they should use render functions."),s.exports=n.exports},573:function(s,e,t){s.exports={render:function(){var s=this,e=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("h1",[s._v("Vue 应用中使用微信 jssdk")]),s._v(" "),t("div",{staticClass:"warning"},[t("p",[s._v("分享接口只有认证公众号才能使用，域名必须备案且在微信后台设置。")]),s._v(" "),t("p",[s._v("先确认已经满足使用"),t("code",[s._v("jssdk")]),s._v("的要求再进行开发。")])]),s._v(" "),t("p",[t("code",[s._v("WechatPlugin")]),s._v(" 插件提供了"),t("code",[s._v("commonJS")]),s._v("的引入方式，因此你不需要在 "),t("code",[s._v("index.html")]),s._v(" 引入文件。")]),s._v(" "),t("h2",[s._v("版本要求")]),s._v(" "),t("p",[t("code",[s._v("WechatPlugin")]),s._v("在"),t("code",[s._v("vux@^2.1.0-rc.19")]),s._v("开始支持")]),s._v(" "),t("h2",[s._v("引入")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("main.js")]),s._v(" 中全局引入：")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { WechatPlugin } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\nVue.use(WechatPlugin)\n\n"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(Vue.wechat) "),t("span",{staticClass:"hljs-comment"},[s._v("// 可以直接访问 wx 对象。")]),s._v("\n")])]),s._v(" "),t("h2",[s._v("组件外使用")]),s._v(" "),t("p",[s._v("考虑到你需要在引入插件后调用"),t("code",[s._v("config")]),s._v("方法进行配置，你可以通过 "),t("code",[s._v("Vue.wechat")]),s._v(" 在组件外部访问"),t("code",[s._v("wx")]),s._v("对象。")]),s._v(" "),t("p",[t("code",[s._v("jssdk")]),s._v("需要请求签名配置接口，你可以直接使用 VUX 基于 "),t("code",[s._v("Axios")]),s._v(" 封装的 "),t("code",[s._v("AjaxPlugin")]),s._v("。")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { WechatPlugin, AjaxPlugin } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\nVue.use(WechatPlugin)\nVue.use(AjaxPlugin)\n\nVue.http.get("),t("span",{staticClass:"hljs-string"},[s._v("'/api'")]),s._v(", ({data}) => {\n  Vue.wechat.config(data.data)\n})\n")])]),s._v(" "),t("h2",[s._v("组件中使用")]),s._v(" "),t("p",[s._v("那么之后任何组件中都可以通过 "),t("code",[s._v("this.$wechat")]),s._v(" 访问到 "),t("code",[s._v("wx")]),s._v(" 对象。")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  created () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$wechat.onMenuShareTimeline({\n      "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'hello VUX'")]),s._v("\n    })\n  }\n}\n")])])])}]},s.exports.render._withStripped=!0}});
//# sourceMappingURL=22.be706834.js.map