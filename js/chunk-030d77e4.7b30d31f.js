(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-030d77e4"],{"03fa":function(t,e,a){"use strict";var r=a("bad9"),o=a.n(r);o.a},"0bf1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-scrollbar",{ref:"componentScrollBar",staticClass:"page-component__scroll"},[a("div",{staticClass:"page-container page-component"},[a("el-scrollbar",{staticClass:"page-component__nav"},[a("side-nav",{attrs:{data:t.navsData[t.lang],base:"/"+t.lang+"/component"}})],1),a("div",{staticClass:"page-component__content"},[a("router-view",{staticClass:"content"}),a("footer-nav")],1),t.showBackToTop?a("el-backtop",{attrs:{target:".page-component__scroll .el-scrollbar__wrap",right:100,bottom:150}}):t._e()],1)])},o=[],n=a("ee95"),s=a("597f"),i=a.n(s),l={data(){return{lang:this.$route.meta.lang,navsData:n,scrollTop:0,showHeader:!0,componentScrollBar:null,componentScrollBoxElement:null}},watch:{"$route.path"(){this.componentScrollBox.scrollTop=0,this.$nextTick(()=>{this.componentScrollBar.update()})}},methods:{renderAnchorHref(){if(/changelog/g.test(location.href))return;const t=document.querySelectorAll("h2 a,h3 a,h4 a,h5 a"),e=location.href.split("#").splice(0,2).join("#");[].slice.call(t).forEach(t=>{const a=t.getAttribute("href");t.href=e+a})},goAnchor(){if(location.href.indexOf("#")>-1&&location.href.match(/#/g).length>1){const t=location.href.match(/#[^#]+$/g);if(!t)return;const e=document.querySelector(t[0]);if(!e)return;setTimeout(t=>{this.componentScrollBox.scrollTop=e.offsetTop},50)}},handleScroll(){const t=this.componentScrollBox.scrollTop;this.showHeader!==this.scrollTop>t&&(this.showHeader=this.scrollTop>t),0===t&&(this.showHeader=!0),this.navFaded||this.$event.$emit("fadeNav"),this.scrollTop=t}},computed:{showBackToTop(){return!this.$route.path.match(/backtop/)}},created(){this.$event.$on("navFade",t=>{this.navFaded=t})},mounted(){this.componentScrollBar=this.$refs.componentScrollBar,this.componentScrollBox=this.componentScrollBar.$el.querySelector(".el-scrollbar__wrap"),this.throttledScrollHandler=i()(300,this.handleScroll),this.componentScrollBox.addEventListener("scroll",this.throttledScrollHandler),this.renderAnchorHref(),this.goAnchor(),document.body.classList.add("is-component")},destroyed(){document.body.classList.remove("is-component")},beforeDestroy(){this.componentScrollBox.removeEventListener("scroll",this.throttledScrollHandler)},beforeRouteUpdate(t,e,a){a(),setTimeout(()=>{const a=t.path,r=e.path;a===r&&t.hash&&this.goAnchor(),a!==r&&(document.documentElement.scrollTop=document.body.scrollTop=0,this.renderAnchorHref())},100)}},c=l,h=(a("03fa"),a("2877")),d=Object(h["a"])(c,r,o,!1,null,null,null);e["default"]=d.exports},"159e":function(t,e,a){t.exports=a.p+"img/theme-intro.961d89d3.png"},1751:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-changelog"},[a("div",{staticClass:"heading"},[a("el-button",{staticClass:"fr"},[a("a",{attrs:{href:"https://github.com/AlbatroFE/albatro/releases",target:"_blank"}},[t._v("GitHub Releases")])]),t._v("\n    更新日志\n  ")],1),a("ul",{ref:"timeline",staticClass:"timeline"}),a("change-log",{ref:"changeLog"})],1)},o=[],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content element-doc"},[a("h2",{attrs:{id:"geng-xin-ri-zhi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geng-xin-ri-zhi","aria-hidden":"true"}},[t._v("¶")]),t._v(" 更新日志")]),a("h3",{attrs:{id:"2-12-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#2-12-0","aria-hidden":"true"}},[t._v("¶")]),t._v(" 2.12.0")]),a("p",[a("em",[t._v("2019-10-01")])]),a("h4",{attrs:{id:"xin-te-xing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xin-te-xing","aria-hidden":"true"}},[t._v("¶")]),t._v(" 新特性")]),a("ul",[a("li",[t._v("SuperForm\n"),a("ul",[a("li",[t._v("新增SuperForm组件")]),a("li",[t._v("新增文档说明")]),a("li",[t._v("支持Typescript")])])])]),a("h4",{attrs:{id:"you-hua"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#you-hua","aria-hidden":"true"}},[t._v("¶")]),t._v(" 优化")]),a("ul",[a("li",[t._v("Docs\n"),a("ul",[a("li",[t._v("更新 changelog")]),a("li",[t._v("更新 SuperForm 文档")])])]),a("li",[t._v("Test\n"),a("ul",[a("li",[t._v("优化 SuperForm 的单元测试")])])]),a("li",[t._v("Types\n"),a("ul",[a("li",[t._v("修复 SuperForm 的类型声明文件")])])])]),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("¶")])]),a("p",[a("i",[a("sup",[t._v("*")]),t._v(" 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting"}},[t._v("XSS 攻击")]),t._v("。因此请在 "),a("code",[t._v("dangerouslyUseHTMLString")]),t._v(" 打开的情况下，确保 "),a("code",[t._v("message")]),t._v(" 的内容是可信的，"),a("strong",[t._v("永远不要")]),t._v("将用户提交的内容赋值给 "),a("code",[t._v("message")]),t._v(" 属性。")])])])}],i=a("2877"),l={},c=Object(i["a"])(l,n,s,!1,null,null,null),h=c.exports,d={components:{ChangeLog:h},data(){return{count:3}},mounted(){const t=this.$refs.changeLog,e=t.$el.children;let a=e[1].querySelector("a");a&&a.remove();let r=e[1].textContent.trim(),o=`<li><h3><a href="https://github.com/AlbatroFE/albatro/releases/tag/v${r}" target="_blank">${r}</a></h3>`;for(let n=e.length,s=2;s<n;s++){let t=e[s];a=e[s].querySelector("a"),a&&"header-anchor"===a.getAttribute("class")&&a.remove(),"H3"!==t.tagName?o+=e[s].outerHTML:(r=e[s].textContent.trim(),o+=`</li><li><h3><a href="https://github.com/AlbatroFE/albatro/releases/tag/v${r}" target="_blank">${r}</a></h3>`)}o=o.replace(/#(\d+)/g,'<a href="https://github.com/AlbatroFE/albatro/issues/$1" target="_blank">#$1</a>'),o=o.replace(/@(\w+)/g,'<a href="https://github.com/$1" target="_blank">@$1</a>'),this.$refs.timeline.innerHTML=`${o}</li>`,t.$el.remove()}},u=d,v=(a("b04c"),Object(i["a"])(u,r,o,!1,null,null,null));e["default"]=v.exports},"17cb":function(t,e,a){t.exports=a.p+"img/resource.a72b8f8d.png"},"1a03":function(t,e,a){t.exports=a.p+"img/theme-index-red.c8e136e1.png"},"39a9":function(t,e,a){var r={"./en-US/changelog.vue":"fe47","./en-US/component.vue":"0bf1","./en-US/index.vue":"f58b","./zh-CN/changelog.vue":"1751","./zh-CN/component.vue":"bbc9","./zh-CN/index.vue":"9713"};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=n,t.exports=o,o.id="39a9"},"39b7":function(t,e,a){},"597f":function(t,e){t.exports=function(t,e,a,r){var o,n=0;function s(){var s=this,i=Number(new Date)-n,l=arguments;function c(){n=Number(new Date),a.apply(s,l)}function h(){o=void 0}r&&!o&&c(),o&&clearTimeout(o),void 0===r&&i>t?c():!0!==e&&(o=setTimeout(r?h:c,void 0===r?t-i:t))}return"boolean"!==typeof e&&(r=a,a=e,e=void 0),s}},"5da1":function(t,e,a){},"7c64":function(t,e,a){t.exports=a.p+"img/theme-index-icon.bc7a98c5.svg"},"82f3":function(t,e,a){"use strict";var r=a("94d4"),o=a.n(r);o.a},"94d4":function(t,e,a){},"968a":function(t,e,a){t.exports=a.p+"img/guide.0a8462c7.png"},9713:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",{ref:"indexMainImg",staticClass:"jumbotron"},[r("img",{attrs:{src:a("ffab"),alt:""}}),r("div",{staticClass:"jumbotron-red",style:{height:t.mainImgOffset+"px"}},[r("img",{attrs:{src:a("1a03"),alt:""}})])]),r("div",{staticClass:"cards"},[r("ul",{staticClass:"container"},[r("li",[r("div",{staticClass:"card"},[r("img",{attrs:{src:a("968a"),alt:""}}),r("h3",[t._v("指南")]),r("p",[t._v("了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。")]),r("router-link",{attrs:{"active-class":"active",to:"/zh-CN/guide/design",exact:""}},[t._v("查看详情\n          ")])],1)]),r("li",[r("div",{staticClass:"card"},[r("img",{attrs:{src:a("f82c"),alt:""}}),r("h3",[t._v("组件")]),r("p",[t._v("使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。")]),r("router-link",{attrs:{"active-class":"active",to:"/zh-CN/component/layout",exact:""}},[t._v("查看详情\n          ")])],1)]),r("li",[r("div",{staticClass:"card"},[r("img",{attrs:{src:a("7c64"),alt:""}}),r("h3",[t._v("主题")]),r("p",[t._v("在线主题编辑器，可视化定制和管理站点主题、组件样式")]),r("router-link",{attrs:{"active-class":"active",to:"/zh-CN/theme",exact:""}},[t._v("查看详情\n          ")])],1)]),r("li",[r("div",{staticClass:"card"},[r("img",{attrs:{src:a("17cb"),alt:""}}),r("h3",[t._v("资源")]),r("p",[t._v("下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。")]),r("router-link",{attrs:{"active-class":"active",to:"/zh-CN/resource",exact:""}},[t._v("查看详情\n          ")])],1)])])]),t.showIntroA?r("div",{staticClass:"theme-intro-a",on:{click:t.hideIntroA}},[t._m(1),r("div",{staticClass:"mask"})]):t._e(),t.showIntroB?r("div",{staticClass:"theme-intro-b",on:{click:t.hideIntroB}},[r("div",{staticClass:"intro-banner",style:{left:t.introBX+"px",top:t.introBY+"px"}},[r("img",{attrs:{src:a("de2c"),alt:""}}),t._m(2)])]):t._e()])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("div",{staticClass:"banner-desc"},[a("h1",[t._v("网站快速成型工具")]),a("p",[t._v("Albatro，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"intro-banner"},[r("img",{attrs:{src:a("159e"),alt:""}}),r("div",{staticClass:"intro-text"},[r("p",[t._v("主题定制功能上线")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",[a("p",[t._v("点击开始编辑")]),a("p",[t._v("尝试您的新主题")])])])}],n=a("597f"),s=a.n(n),i=a("26a1"),l={created(){this.throttledHandleScroll=s()(10,!0,t=>{this.handleScroll(t)})},methods:{handleScroll(t){const e=this.$refs.indexMainImg,a=e.getBoundingClientRect(),r=e.clientHeight+55;let o=2*(180-a.top);o<0&&(o=0),o>r&&(o=r),this.mainImgOffset=o},hideIntroB(){Object(i["b"])(document.body,"el-loading-parent--hidden"),localStorage.setItem("KNOW_THEME","true"),this.showIntroB=!1},hideIntroA(){const t=document.querySelector(".nav-item-theme");this.introBX=t.offsetLeft+.5*t.clientWidth-150,this.introBY=t.offsetTop+40,this.showIntroA=!1,this.showIntroB=!0}},data(){return{lang:this.$route.meta.lang,mainImgOffset:0,showIntroA:!1,showIntroB:!1,introBY:0,introBX:0}},beforeDestroy(){window.removeEventListener("scroll",this.throttledHandleScroll)},mounted(){window.addEventListener("scroll",this.throttledHandleScroll),localStorage.getItem("KNOW_THEME")||(this.showIntroA=!0,Object(i["a"])(document.body,"el-loading-parent--hidden"))}},c=l,h=(a("fb7a"),a("2877")),d=Object(h["a"])(c,r,o,!1,null,"65445bee",null);e["default"]=d.exports},b04c:function(t,e,a){"use strict";var r=a("eeb6"),o=a.n(r);o.a},bad9:function(t,e,a){},bbc9:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-scrollbar",{ref:"componentScrollBar",staticClass:"page-component__scroll"},[a("div",{staticClass:"page-container page-component"},[a("el-scrollbar",{staticClass:"page-component__nav"},[a("side-nav",{attrs:{data:t.navsData[t.lang],base:"/"+t.lang+"/component"}})],1),a("div",{staticClass:"page-component__content"},[a("router-view",{staticClass:"content"}),a("footer-nav")],1),t.showBackToTop?a("el-backtop",{attrs:{target:".page-component__scroll .el-scrollbar__wrap",right:100,bottom:150}}):t._e()],1)])},o=[],n=a("ee95"),s=a("597f"),i=a.n(s),l={data(){return{lang:this.$route.meta.lang,navsData:n,scrollTop:0,showHeader:!0,componentScrollBar:null,componentScrollBoxElement:null}},watch:{"$route.path"(){this.componentScrollBox.scrollTop=0,this.$nextTick(()=>{this.componentScrollBar.update()})}},methods:{renderAnchorHref(){if(/changelog/g.test(location.href))return;const t=document.querySelectorAll("h2 a,h3 a,h4 a,h5 a"),e=location.href.split("#").splice(0,2).join("#");[].slice.call(t).forEach(t=>{const a=t.getAttribute("href");t.href=e+a})},goAnchor(){if(location.href.indexOf("#")>-1&&location.href.match(/#/g).length>1){const t=location.href.match(/#[^#]+$/g);if(!t)return;const e=document.querySelector(t[0]);if(!e)return;setTimeout(t=>{this.componentScrollBox.scrollTop=e.offsetTop},50)}},handleScroll(){const t=this.componentScrollBox.scrollTop;this.showHeader!==this.scrollTop>t&&(this.showHeader=this.scrollTop>t),0===t&&(this.showHeader=!0),this.navFaded||this.$event.$emit("fadeNav"),this.scrollTop=t}},computed:{showBackToTop(){return!this.$route.path.match(/backtop/)}},created(){this.$event.$on("navFade",t=>{this.navFaded=t})},mounted(){this.componentScrollBar=this.$refs.componentScrollBar,this.componentScrollBox=this.componentScrollBar.$el.querySelector(".el-scrollbar__wrap"),this.throttledScrollHandler=i()(300,this.handleScroll),this.componentScrollBox.addEventListener("scroll",this.throttledScrollHandler),this.renderAnchorHref(),this.goAnchor(),document.body.classList.add("is-component")},destroyed(){document.body.classList.remove("is-component")},beforeDestroy(){this.componentScrollBox.removeEventListener("scroll",this.throttledScrollHandler)},beforeRouteUpdate(t,e,a){a(),setTimeout(()=>{const a=t.path,r=e.path;a===r&&t.hash&&this.goAnchor(),a!==r&&(document.documentElement.scrollTop=document.body.scrollTop=0,this.renderAnchorHref())},100)}},c=l,h=(a("cc3f"),a("2877")),d=Object(h["a"])(c,r,o,!1,null,null,null);e["default"]=d.exports},c002:function(t,e,a){"use strict";var r=a("39b7"),o=a.n(r);o.a},cc3f:function(t,e,a){"use strict";var r=a("e5c6"),o=a.n(r);o.a},de2c:function(t,e,a){t.exports=a.p+"img/intro-theme-b.e721f860.png"},e5c6:function(t,e,a){},eeb6:function(t,e,a){},f58b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",{ref:"indexMainImg",staticClass:"jumbotron"},[r("img",{attrs:{src:a("ffab"),alt:""}}),r("div",{staticClass:"jumbotron-red",style:{height:t.mainImgOffset+"px"}},[r("img",{attrs:{src:a("1a03"),alt:""}})])]),r("div",{staticClass:"cards"},[r("ul",{staticClass:"container"},[r("li",[r("div",{staticClass:"card"},[r("img",{attrs:{src:a("968a"),alt:""}}),r("h3",[t._v("Guide")]),r("p",[t._v("Understand the design guidelines, helping designers build product that's logically sound, reasonably structured and easy to use.")]),r("router-link",{attrs:{"active-class":"active",to:"/en-US/guide/design",exact:""}},[t._v("View Detail\n          ")])],1)]),r("li",[r("div",{staticClass:"card"},[r("img",{attrs:{src:a("f82c"),alt:""}}),r("h3",[t._v("Component")]),r("p",[t._v("Experience interaction details by strolling through component demos. Use encapsulated code to improve developing efficiency.")]),r("router-link",{attrs:{"active-class":"active",to:"/en-US/component/layout",exact:""}},[t._v("View Detail\n          ")])],1)]),r("li",[r("div",{staticClass:"card"},[r("img",{attrs:{src:a("7c64"),alt:""}}),r("h3",[t._v("Theme")]),r("p",[t._v("Online theme roller, visualize custom and manage site themes and component styles")]),r("router-link",{attrs:{"active-class":"active",to:"/en-US/theme",exact:""}},[t._v("View Detail\n          ")])],1)]),r("li",[r("div",{staticClass:"card"},[r("img",{attrs:{src:a("17cb"),alt:""}}),r("h3",[t._v("Resource")]),r("p",[t._v("Download relevant design resources for shaping page prototype or visual draft, increasing design efficiency.")]),r("router-link",{attrs:{"active-class":"active",to:"/en-US/resource",exact:""}},[t._v("View Detail\n          ")])],1)])])]),t.showIntroA?r("div",{staticClass:"theme-intro-a",on:{click:t.hideIntroA}},[t._m(1),r("div",{staticClass:"mask"})]):t._e(),t.showIntroB?r("div",{staticClass:"theme-intro-b",on:{click:t.hideIntroB}},[r("div",{staticClass:"intro-banner",style:{left:t.introBX+"px",top:t.introBY+"px"}},[r("img",{attrs:{src:a("de2c"),alt:""}}),t._m(2)])]):t._e()])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("div",{staticClass:"banner-desc"},[a("h1",[t._v("A Desktop UI Library")]),a("p",[t._v("Albatro, a Vue 2.0 based component library for developers, designers and product managers")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"intro-banner"},[r("img",{attrs:{src:a("159e"),alt:""}}),r("div",{staticClass:"intro-text"},[r("p",[t._v("Theme customization is available!")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",[a("p",[t._v("Click here")]),a("p",[t._v("Make your own theme")])])])}],n=a("597f"),s=a.n(n),i=a("26a1"),l={created(){this.throttledHandleScroll=s()(10,!0,t=>{this.handleScroll(t)})},methods:{handleScroll(t){const e=this.$refs.indexMainImg,a=e.getBoundingClientRect(),r=e.clientHeight+55;let o=2*(180-a.top);o<0&&(o=0),o>r&&(o=r),this.mainImgOffset=o},hideIntroB(){Object(i["b"])(document.body,"el-loading-parent--hidden"),localStorage.setItem("KNOW_THEME","true"),this.showIntroB=!1},hideIntroA(){const t=document.querySelector(".nav-item-theme");this.introBX=t.offsetLeft+.5*t.clientWidth-150,this.introBY=t.offsetTop+40,this.showIntroA=!1,this.showIntroB=!0}},data(){return{lang:this.$route.meta.lang,mainImgOffset:0,showIntroA:!1,showIntroB:!1,introBY:0,introBX:0}},beforeDestroy(){window.removeEventListener("scroll",this.throttledHandleScroll)},mounted(){window.addEventListener("scroll",this.throttledHandleScroll),localStorage.getItem("KNOW_THEME")||(this.showIntroA=!0,Object(i["a"])(document.body,"el-loading-parent--hidden"))}},c=l,h=(a("c002"),a("2877")),d=Object(h["a"])(c,r,o,!1,null,"7a8a2126",null);e["default"]=d.exports},f82c:function(t,e,a){t.exports=a.p+"img/component.bd3411b9.png"},fb7a:function(t,e,a){"use strict";var r=a("5da1"),o=a.n(r);o.a},fe47:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-changelog"},[a("div",{staticClass:"heading"},[a("el-button",{staticClass:"fr"},[a("a",{attrs:{href:"https://github.com/AlbatroFE/albatro/releases",target:"_blank"}},[t._v("GitHub Releases")])]),t._v("\n    Changelog\n  ")],1),a("ul",{ref:"timeline",staticClass:"timeline"}),a("change-log",{ref:"changeLog"})],1)},o=[],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content element-doc"},[a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog","aria-hidden":"true"}},[t._v("¶")]),t._v(" Changelog")]),a("h3",{attrs:{id:"0-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#0-1-0","aria-hidden":"true"}},[t._v("¶")]),t._v(" 0.1.0")]),a("p",[a("em",[t._v("2019-10-01")])]),a("h4",{attrs:{id:"new-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-features","aria-hidden":"true"}},[t._v("¶")]),t._v(" New features")]),a("ul",[a("li",[t._v("Popover\n"),a("ul",[a("li",[t._v("Add SuperForm component")]),a("li",[t._v("Add SuperForm docs")]),a("li",[t._v("Add SuperForm docs")]),a("li",[t._v("Supported typescript")])])])]),a("h4",{attrs:{id:"optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimization","aria-hidden":"true"}},[t._v("¶")]),t._v(" Optimization")]),a("ul",[a("li",[t._v("Checkbox\n"),a("ul",[a("li",[t._v("Improve screen reader experience")])])]),a("li",[t._v("Docs\n"),a("ul",[a("li",[t._v("Update changelog")]),a("li",[t._v("Update SuperForm docs")])])]),a("li",[t._v("Test\n"),a("ul",[a("li",[t._v("Refactor unit test to use super-form")])])]),a("li",[t._v("Types\n"),a("ul",[a("li",[t._v("Fix SuperForm type")])])])]),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("¶")])]),a("p",[a("i",[a("sup",[t._v("*")]),t._v(" Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting"}},[t._v("XSS attacks")]),t._v(". So when "),a("code",[t._v("dangerouslyUseHTMLString")]),t._v(" is on, please make sure the content of "),a("code",[t._v("message")]),t._v(" is trusted, and "),a("strong",[t._v("never")]),t._v(" assign "),a("code",[t._v("message")]),t._v(" to user-provided content.")])])])}],i=a("2877"),l={},c=Object(i["a"])(l,n,s,!1,null,null,null),h=c.exports,d={components:{ChangeLog:h},data(){return{count:3}},mounted(){const t=this.$refs.changeLog,e=t.$el.children;let a=e[1].querySelector("a");a&&a.remove();let r=e[1].textContent.trim(),o=`<li><h3><a href="https://github.com/AlbatroFE/albatro/releases/tag/v${r}" target="_blank">${r}</a></h3>`;for(let n=e.length,s=2;s<n;s++){let t=e[s];a=e[s].querySelector("a"),a&&"header-anchor"===a.getAttribute("class")&&a.remove(),"H3"!==t.tagName?o+=e[s].outerHTML:(r=e[s].textContent.trim(),o+=`</li><li><h3><a href="https://github.com/AlbatroFE/albatro/releases/tag/v${r}" target="_blank">${r}</a></h3>`)}o=o.replace(/#(\d+)/g,'<a href="https://github.com/AlbatroFE/albatro/issues/$1" target="_blank">#$1</a>'),o=o.replace(/@(\w+)/g,'<a href="https://github.com/$1" target="_blank">@$1</a>'),this.$refs.timeline.innerHTML=`${o}</li>`,t.$el.remove()}},u=d,v=(a("82f3"),Object(i["a"])(u,r,o,!1,null,null,null));e["default"]=v.exports},ffab:function(t,e,a){t.exports=a.p+"img/theme-index-blue.c38b733c.png"}}]);