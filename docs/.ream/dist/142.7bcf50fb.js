webpackJsonp([142],{211:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={head:{}}},375:function(s,a,t){var l=t(4)(t(211),t(671),null,null,null);l.options.__file="/Users/lizheng/workspace/vux-design/vux-doc/docs/node_modules/v-markdown-loader/_cache/checklist-64.vue",l.esModule&&Object.keys(l.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] checklist-64.vue: functional components are not supported with templates, they should use render functions."),s.exports=l.exports},671:function(s,a,t){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("h3",[s._v("Checklist_COM")]),s._v(" "),t("img",{attrs:{width:"100",src:"http://qr.topscan.com/api.php?text=https%3A%2F%2Fvux.li%2Fdemos%2Fv2%2F%23%2Fcomponent%2Fchecklist"}}),s._v(" "),s._m(0),s._v(" "),t("hr"),s._v(" "),t("h4",[s._v("演示")]),s._v(" "),t("div",{staticStyle:{width:"377px",height:"667px",display:"inline-block",border:"1px dashed #ececec","border-radius":"5px",overflow:"hidden"}},[t("iframe",{attrs:{src:"https://vux.li/demos/v2/#/component/checklist",width:"375",height:"667",border:"0",frameborder:"0"}})],1),s._v(" "),t("h4",[s._v("demo 代码")]),s._v(" "),t("p",{staticClass:"tip"},[s._v("下面的$t是Demo的i18n使用的翻译函数，一般情况下可以直接使用字符串。另外，下面代码隐藏了i18n标签部分的代码。")]),s._v(" "),s._m(1),s._v(" "),t("h4",[s._v("Github Issue")])])},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("a",{staticStyle:{"font-size":"12px",color:"#888"},attrs:{href:"https://vux.li/demos/v2/#/component/checklist",target:"_blank"}},[s._v("demo 原始链接：https://vux.li/demos/v2/#/component/checklist")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('Basic Usage')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":label-position")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"labelPosition"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("required")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"commonList"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checklist001"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"change"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"padding:15px;"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"labelPosition = labelPosition === 'left' ? '' : 'left'\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("切换 label 位置"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"selectFirst"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("选择第1个值"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"selectFirstTwo"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("选择前两个值"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click.native")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"selectLeft"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("选择剩下值"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("x-button")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('handle errors')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("required")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"commonList"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("show-error")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checklist0011"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"change"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-error")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"onError"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-clear-error")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"onNoError"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"demo1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"2"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"footer"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-show")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"error"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"error"')]),s._v(">")]),t("span",[s._v("{{")]),s._v("error"),t("span",[s._v("}}")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('preselect China and Japan')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("label-position")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"left"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"commonList"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checklist002"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"change"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('set max=2')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"commonList"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checklist003"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("2")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"change"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('set random order')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("random-order")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checklist005"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checklist005Value"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"change"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('Option Array with key and value(key must be string)')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"objectList"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"objectListValue"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"change"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v("\"$t('Async list')\"")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"3"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":options")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"asyncList"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"asyncListValue"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@on-change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"change"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("checklist")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),s._v("Reference"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("divider")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"See also"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"Checker"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"with which you can custom any style"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("is-link")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("link")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"/component/checker"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("cell")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("group")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Group, Checklist, Cell, Divider, XButton } "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vux'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" _ "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'lodash'")]),s._v("\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  mounted () {\n    setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".asyncList = ["),t("span",{staticClass:"hljs-string"},[s._v("'A'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'B'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'C'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'D'")]),s._v("]\n    }, "),t("span",{staticClass:"hljs-number"},[s._v("3000")]),s._v(")\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    Group,\n    Checklist,\n    Cell,\n    Divider,\n    XButton\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    change (val) {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'change'")]),s._v(", val)\n    },\n    onError (errors) {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(errors)\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".error = errors\n    },\n    onNoError () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".error = "),t("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v("\n    },\n    selectFirst () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".checklist001 = ["),t("span",{staticClass:"hljs-string"},[s._v("'China'")]),s._v("]\n    },\n    selectFirstTwo () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".checklist001 = ["),t("span",{staticClass:"hljs-string"},[s._v("'China'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'Japan'")]),s._v("]\n    },\n    selectLeft () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" left = _.without.apply(_, ["),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".commonList].concat("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".checklist001))\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".checklist001 = left\n    }\n  },\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("labelPosition")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("error")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("commonList")]),s._v(": [ "),t("span",{staticClass:"hljs-string"},[s._v("'China'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'Japan'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'America'")]),s._v(" ],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("checklist001")]),s._v(": [],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("checklist0011")]),s._v(": [],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("checklist002")]),s._v(": [ "),t("span",{staticClass:"hljs-string"},[s._v("'China'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'Japan'")]),s._v(" ],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("checklist003")]),s._v(": [ "),t("span",{staticClass:"hljs-string"},[s._v("'China'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'Japan'")]),s._v(" ],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("checklist005")]),s._v(": [ "),t("span",{staticClass:"hljs-string"},[s._v("'01'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'02'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'03'")]),s._v(" ],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("checklist005Value")]),s._v(": [],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("objectList")]),s._v(": [{"),t("span",{staticClass:"hljs-attr"},[s._v("key")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'1'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'001 value'")]),s._v("}, {"),t("span",{staticClass:"hljs-attr"},[s._v("key")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'2'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'002 value'")]),s._v("}, {"),t("span",{staticClass:"hljs-attr"},[s._v("key")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'3'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'003 value'")]),s._v("}],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("objectListValue")]),s._v(": ["),t("span",{staticClass:"hljs-string"},[s._v("'1'")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("'2'")]),s._v("],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("asyncList")]),s._v(": [],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("asyncListValue")]),s._v(": []\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("scoped")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".error")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("padding-left")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("15px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("28px")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("#888")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("font-size")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("12px")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n\n")])])}]},s.exports.render._withStripped=!0},84:function(s,a,t){s.exports=t(375)}});
//# sourceMappingURL=142.7bcf50fb.js.map