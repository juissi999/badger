(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],l=0,m=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ac6bc11a"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-app-bar",{attrs:{absolute:"",app:"",color:"primary",flat:"",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("cf05"),transition:"scale-transition",width:"40"}}),a("span",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"badger Name",contain:"","min-width":"100",width:"100"}},[t._v("badger")])],1),a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.changePage("/")}}},[a("span",{staticClass:"mr-2 hidden-md-and-down"},[t._v("home")]),a("v-icon",[t._v("mdi-counter")])],1),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.changePage("/chart")}}},[a("span",{staticClass:"mr-2 hidden-md-and-down"},[t._v("chart")]),a("v-icon",[t._v("mdi-chart-line")])],1),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.changePage("/about")}}},[a("span",{staticClass:"mr-2 hidden-md-and-down"},[t._v("about")]),a("v-icon",[t._v("mdi-alphabetical")])],1)],1),a("v-main",[a("router-view")],1),a("v-footer",{attrs:{absolute:""}},[a("Footer")],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" - "),n("a",{attrs:{href:"http://github.com/juissi999"}},[t._v("juissi999")])])},i=[],c=n("2877"),u=n("6544"),l=n.n(u),d=n("62ad"),m={},f=Object(c["a"])(m,s,i,!1,null,null,null),p=f.exports;l()(f,{VCol:d["a"]});var v={name:"App",components:{Footer:p},methods:{changePage:function(t){this.$route.path!==t&&this.$router.push(t)}},data:function(){return{}}},h=v,b=n("7496"),g=n("40dc"),_=n("8336"),y=n("553a"),w=n("132d"),C=n("adda"),x=n("f6c4"),V=n("2fa4"),j=Object(c["a"])(h,r,o,!1,null,null,null),k=j.exports;l()(j,{VApp:b["a"],VAppBar:g["a"],VBtn:_["a"],VFooter:y["a"],VIcon:w["a"],VImg:C["a"],VMain:x["a"],VSpacer:V["a"]});n("d3b7");var S=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("MainPage")],1)},P=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"pa-0 pa-md-5",attrs:{cols:"12"}},[a("v-flex",{attrs:{xs2:"","offset-xs5":"",sm6:"","offset-sm3":""}},[a("v-img",{attrs:{src:n("cf05"),contain:"","max-height":"200"}})],1)],1),a("v-col",{staticClass:"mb-0 mb-md-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-1 mb-md-3"},[t._v(" badger ")]),a("p",{staticClass:"subheading font-weight-regular mb-0 mb-md-3"},[t._v(" Every bouncers necessary tool upgraded to 2020. ")])]),a("v-col",{staticClass:"mb-0 mb-md-5",attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center"}},[a("v-btn",{staticClass:"primary mx-1 my-1",on:{click:function(e){return t.addVisitor(1)}}},[t._v("Add 1")]),a("v-btn",{staticClass:"mx-1 my-1",on:{click:function(e){return t.addVisitor(5)}}},[t._v("Add 5")]),a("v-btn",{staticClass:"mx-1 my-1",on:{click:function(e){return t.substractVisitor(1)}}},[t._v("Remove 1")])],1)],1),a("v-col",{staticClass:"mb-0 mb-md-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-1 mb-md-3"},[t._v(" Today's number ")]),a("v-row",{attrs:{justify:"center"}},[a("h1",[t._v(t._s(this.$store.state.count.length))])])],1),a("v-col",{staticClass:"mb-0 mb-md-5",attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center"}},[a("PopUp")],1)],1)],1)],1)},A=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"red my-1",attrs:{dark:""}},a),[t._v("Reset")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Reset counter?")]),n("v-card-text",[t._v("Are you sure you want to reset the badger counter?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.resetCounter()}}},[t._v("Reset")])],1)],1)],1)},M=[],T={data:function(){return{dialog:!1}},methods:{resetCounter:function(){this.$store.commit("reset"),this.dialog=!1}}},I=T,F=n("b0af"),R=n("99d9"),B=n("169a"),J=Object(c["a"])(I,E,M,!1,null,null,null),D=J.exports;l()(J,{VBtn:_["a"],VCard:F["a"],VCardActions:R["a"],VCardText:R["b"],VCardTitle:R["c"],VDialog:B["a"],VSpacer:V["a"]});var L={name:"MainPage",components:{PopUp:D},methods:{addVisitor:function(t){this.$store.commit("increment",t)},substractVisitor:function(t){this.$store.commit("decrement",t)}}},N=L,H=n("a523"),U=n("0e8f"),q=n("0fd9"),Y=Object(c["a"])(N,$,A,!1,null,null,null),z=Y.exports;l()(Y,{VBtn:_["a"],VCol:d["a"],VContainer:H["a"],VFlex:U["a"],VImg:C["a"],VRow:q["a"]});var G={name:"Home",components:{MainPage:z}},K=G,Q=Object(c["a"])(K,O,P,!1,null,null,null),W=Q.exports;a["a"].use(S["a"]);var X=[{path:"/",name:"Home",component:W},{path:"/chart",name:"Chart",component:function(){return n.e("about").then(n.bind(null,"5178"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Z=new S["a"]({routes:X}),tt=Z,et=n("2f62");a["a"].use(et["a"]);var nt=new et["a"].Store({state:{count:[]},mutations:{increment:function(t,e){for(var n=0;n<e;n++)t.count.push(new Date)},decrement:function(t){t.count.length>0?t.count.pop():t.count=[]},reset:function(t){t.count=[]},initialiseStore:function(t){localStorage.getItem("badgerStore")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("badgerStore"))))}},actions:{},modules:{}}),at=n("f309");a["a"].use(at["a"]);var rt=new at["a"]({});a["a"].config.productionTip=!1,nt.subscribe((function(t,e){localStorage.setItem("badgerStore",JSON.stringify(e))})),new a["a"]({router:tt,store:nt,vuetify:rt,beforeCreate:function(){this.$store.commit("initialiseStore")},render:function(t){return t(k)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.d5865581.png"}});
//# sourceMappingURL=app.d817e74d.js.map