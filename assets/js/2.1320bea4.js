(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(t,e,n){},201:function(t,e,n){},202:function(t,e,n){},203:function(t,e,n){},204:function(t,e,n){},219:function(t,e,n){"use strict";var a=n(200);n.n(a).a},220:function(t,e,n){"use strict";var a=n(201);n.n(a).a},221:function(t,e,n){"use strict";var a=n(202);n.n(a).a},222:function(t,e,n){"use strict";var a=n(203);n.n(a).a},223:function(t,e,n){"use strict";var a=n(204);n.n(a).a},227:function(t,e,n){"use strict";var a={name:"LuluFooter"},i=(n(223),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"112535e0",null);e.a=s.exports},228:function(t,e,n){"use strict";var a={name:"LuluHeader"},i=(n(221),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"48bc08bc",null);e.a=s.exports},229:function(t,e,n){"use strict";var a={name:"LuluContent"},i=(n(220),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Lulu-content"},[this._t("default")],2)},[],!1,null,"09cc286c",null);e.a=s.exports},230:function(t,e,n){"use strict";n(55),n(14),n(25);var a={name:"LuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"LuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)})}},i=(n(219),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"2a1e99c9",null);e.a=s.exports},233:function(t,e,n){"use strict";var a={name:"LuluSider",data:function(){return{visible:!0}},methods:{}},i=(n(222),n(1)),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"slider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])},[],!1,null,"65dd9e51",null);e.a=s.exports},264:function(t,e,n){"use strict";n.r(e);var a=n(230),i=n(229),s=n(228),r=n(233),c=n(227),u={components:{"g-layout":a.a,"g-content":i.a,"g-header":s.a,"g-sider":r.a,"g-footer":c.a},data:function(){return{content:'\n<g-layout style="color: white; overflow:hidden;">\n    <g-header style="height: 50px; background:lightskyblue;">\n    header\n</g-header>\n<g-layout>\n    <g-sider style="height: 100px; background: #7cb8ff; width:200px; color: black;">\n        sider\n    </g-sider>\n    <g-content style="height: 100px; background:deepskyblue;">\n        content\n    </g-content>\n</g-layout>\n<g-footer style="height: 50px; background:lightskyblue;">\n    footer\n</g-footer>\n</g-layout>\n                    '}}},o=n(1),l=Object(o.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white",overflow:"hidden"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        header\n    ")]),t._v(" "),n("g-layout",[n("g-sider",{staticStyle:{height:"100px",background:"#7cb8ff",width:"200px",color:"black"}},[t._v("\n            sider\n        ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n            content\n        ")])],1),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n        footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("内嵌式布局：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码:")])])}],!1,null,null,null);e.default=l.exports}}]);