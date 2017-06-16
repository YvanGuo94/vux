webpackJsonp([93],{110:function(s,t,a){s.exports=a(424)},260:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={head:{}}},424:function(s,t,a){var n=a(4)(a(260),a(674),null,null,null);n.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/previewer-89.vue",n.esModule&&Object.keys(n.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] previewer-89.vue: functional components are not supported with templates, they should use render functions."),s.exports=n.exports},674:function(s,t,a){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h3",[s._v("Previewer_COM")]),s._v(" "),a("img",{attrs:{width:"100",src:"http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fpreviewer"}}),s._v(" "),s._m(0),s._v(" "),a("hr"),s._v(" "),a("h4",[s._v("演示")]),s._v(" "),a("div",{staticStyle:{width:"377px",height:"667px",display:"inline-block",border:"1px dashed #ececec","border-radius":"5px",overflow:"hidden"}},[a("iframe",{attrs:{src:"https://vux.li/demos/v2/#/component/previewer",width:"375",height:"667",border:"0",frameborder:"0"}})],1),s._v(" "),a("h4",[s._v("demo 代码")]),s._v(" "),a("p",{staticClass:"tip"},[s._v("下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。")]),s._v(" "),s._m(1),s._v(" "),a("h4",[s._v("Github Issue")])])},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("a",{staticStyle:{"font-size":"12px",color:"#888"},attrs:{href:"https://vux.li/demos/v2/#/component/previewer",target:"_blank"}},[s._v("demo 原始链接：https://vux.li/demos/v2/#/component/previewer")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"previewer-demo-img"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"(item, index) in list"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item.src"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"100"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"show(index)"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("previewer")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":list")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"list"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"previewer"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"options"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("previewer")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Previewer } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),a("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    Previewer\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    show (index) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.previewer.show(index)\n    }\n  },\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("list")]),s._v(": [{\n        "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'https://placekitten.com/800/400'")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("w")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("600")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("h")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("400")]),s._v("\n      },\n      {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'https://placekitten.com/1200/900'")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("w")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("1200")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("h")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("900")]),s._v("\n      }],\n      "),a("span",{staticClass:"hljs-attr"},[s._v("options")]),s._v(": {\n        getThumbBoundsFn (index) {\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// find thumbnail element")]),s._v("\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" thumbnail = "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".querySelectorAll("),a("span",{staticClass:"hljs-string"},[s._v("'.previewer-demo-img'")]),s._v(")[index]\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// get window scroll Y")]),s._v("\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" pageYScroll = "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".pageYOffset || "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".documentElement.scrollTop\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// optionally get horizontal scroll")]),s._v("\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// get position of element relative to viewport")]),s._v("\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" rect = thumbnail.getBoundingClientRect()\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// w = width")]),s._v("\n          "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {"),a("span",{staticClass:"hljs-attr"},[s._v("x")]),s._v(": rect.left, "),a("span",{staticClass:"hljs-attr"},[s._v("y")]),s._v(": rect.top + pageYScroll, "),a("span",{staticClass:"hljs-attr"},[s._v("w")]),s._v(": rect.width}\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// Good guide on how to get element coordinates:")]),s._v("\n          "),a("span",{staticClass:"hljs-comment"},[s._v("// http://javascript.info/tutorial/coordinates")]),s._v("\n        }\n      }\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]},s.exports.render._withStripped=!0}});
//# sourceMappingURL=93.43694fec.js.map