webpackJsonp([15],{165:function(e,t,o){e.exports=o(502)},338:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={head:{title:" 为什么使用 .vue 源码分发而不是 js 文件"}}},502:function(e,t,o){var n=o(4)(o(338),o(578),null,null,null);n.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/why-use-vue-file-for-distribution-145.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] why-use-vue-file-for-distribution-145.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},578:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("为什么使用 .vue 源码分发而不是 js 文件")]),e._v(" "),o("p",[e._v("代码冗余，无法在构建时优化，出错时难以跟踪，作为组件维护者可能要打包多份代码出来满足不同需求(压缩版，未压缩，不同语言版)。在webpack中如果不加配置还会被多次打包。")]),e._v(" "),o("p",[e._v("整体打包成一个js和一个css在移动端属于严重浪费，降低体验和性能。")]),e._v(" "),o("p",[e._v("就上面的问题来说，源码分发的方式完美解决。")]),e._v(" "),o("p",[e._v("源码分发的最大好处是可以实现源码编译时处理，这也是 "),o("code",[e._v("vux-loader")]),e._v(" 的用处。")])])}]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=15.f71862b5.js.map