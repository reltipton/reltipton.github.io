(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00e2":function(t,e,n){"use strict";var r=n("2c54"),o=n.n(r);o.a},"0992":function(t,e,n){t.exports=n.p+"img/GenerationInfographicSnippet.df1f61e7.png"},"2c54":function(t,e,n){},4558:function(t,e,n){t.exports=n.p+"img/InfographicSnippet.94333907.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",elevation:"0",height:"150",light:""}},[n("div",{staticClass:"d-flex align-center"},[n("router-link",{attrs:{to:"/"}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:t.images.sample,transition:"scale-transition",width:"200"}})],1)],1),n("v-spacer"),n("v-btn",{attrs:{to:"about",text:""}},[n("span",{staticClass:"mr-2"},[t._v("About")])]),n("v-btn",{attrs:{href:"/docs/ArielTiptonResume.pdf",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Resume")])])],1),n("v-content",{staticClass:"font-and-background"},[n("router-view")],1)],1)},a=[],i={name:"App",data:function(){return{images:{sample:n("a858")}}}},c=i,s=(n("a0fe"),n("2877")),l=n("6544"),u=n.n(l),p=n("7496"),f=n("40dc"),d=n("8336"),h=n("a75b"),g=n("adda"),m=n("2fa4"),v=Object(s["a"])(c,o,a,!1,null,"01e03940",null),b=v.exports;u()(v,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VContent:h["a"],VImg:g["a"],VSpacer:m["a"]});var j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var x=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},_=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white lighten-5"},[n("v-row",t._l(t.projects,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"mx-auto no-border",attrs:{"max-width":"344",outlined:"",tile:"",to:e.url}},[n("v-img",{attrs:{height:"100%",width:"100%","max-height":"300","max-width":"300",src:e.image,center:""}}),n("v-card-title",[n("span",{staticClass:"card-title"},[t._v(t._s(e.name))])])],1)],1)})),1)],1)},I=[],y={name:"HelloWorld",data:function(){return{projects:[{id:"ids-407",name:"IDS-407 Final Infographic",image:n("4558"),url:"project/ids-407"},{id:"ids-401",name:"IDS 401 Final Project",image:n("a360"),url:"project/ids-401"},{id:"gen-info",name:"Generation Infographic",image:n("0992"),url:"project/gen-info"}]}}},V=y,O=(n("00e2"),n("b0af")),S=n("99d9"),P=n("62ad"),k=n("a523"),A=n("0fd9"),D=Object(s["a"])(V,C,I,!1,null,"3ca5f102",null),F=D.exports;u()(D,{VCard:O["a"],VCardTitle:S["a"],VCol:P["a"],VContainer:k["a"],VImg:g["a"],VRow:A["a"]});var $={name:"home",components:{HelloWorld:F}},E=$,T=Object(s["a"])(E,w,_,!1,null,null,null),G=T.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v(t._s(t.projectInContext.title))]),n("p",[t._v(t._s(t.projectInContext.description))]),n("v-container",{staticClass:"grey lighten-5"},[n("v-row",t._l(t.projectInContext.images,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:"",tile:""}},[n("v-img",{attrs:{height:"100%",width:"100%","max-height":"300","max-width":"300",src:t,center:""}})],1)],1)})),1),n("v-row",[n("h1",[t._v(" Other Projects... ")])]),n("v-row",t._l(t.otherProjects,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:"",tile:"",to:t.url}},[n("v-img",{attrs:{height:"100%",width:"100%","max-height":"300","max-width":"300",src:t.images[0],center:""}})],1)],1)})),1)],1)],1)},M=[],W=(n("4de4"),n("7db0"),{name:"Project",beforeRouteUpdate:function(t,e,n){this.projectInContext=this.projects.find((function(e){return e.id===t.params.id})),this.otherProjects=this.projects.filter((function(e){return e.id!==t.params.id})),n()},created:function(){var t=this;this.projectInContext=this.projects.find((function(e){return e.id===t.$route.params.id})),this.otherProjects=this.projects.filter((function(e){return e.id!==t.$route.params.id}))},data:function(){return{projectInContext:{},otherProjects:[],projects:[{id:"ids-407",title:"IDS-407 Final Infographic",description:"IDS-407-Description",images:[n("ad63"),n("cf05")],url:"/project/ids-407"},{id:"ids-401",title:"IDS 401 Final Project Infographic",description:"IDS-401 Final Project Description",url:"/project/ids-401",images:[n("7cf4"),n("cf05")]},{id:"gen-info",title:"Generation Infographic",description:"Generation Infographic Description",url:"/project/gen-info",images:[n("e58f")]}]}}}),B=W,H=Object(s["a"])(B,R,M,!1,null,null,null),N=H.exports;u()(H,{VCard:O["a"],VCol:P["a"],VContainer:k["a"],VImg:g["a"],VRow:A["a"]});var J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],q={name:"About",data:function(){return{}}},U=q,Y=Object(s["a"])(U,J,L,!1,null,null,null),z=Y.exports;r["a"].use(x["a"]);var K=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:z},{path:"/project/:id",component:N}],Q=new x["a"]({mode:"history",base:"/",routes:K}),X=Q,Z=n("f309");r["a"].use(Z["a"]);var tt=new Z["a"]({theme:{themes:{light:{primary:"#1F2846"}}}});r["a"].config.productionTip=!1,new r["a"]({router:X,vuetify:tt,render:function(t){return t(b)}}).$mount("#app")},"7cf4":function(t,e,n){t.exports=n.p+"img/IDS401_FinalProject.6e08fd6e.png"},a0fe:function(t,e,n){"use strict";var r=n("cfdc"),o=n.n(r);o.a},a360:function(t,e,n){t.exports=n.p+"img/FitInSnippet.566fab6d.png"},a858:function(t,e,n){t.exports=n.p+"img/ArielTiptonLogo.7138410a.png"},ad63:function(t,e,n){t.exports=n.p+"img/IDS407_finalInfographic.a2bef9c7.png"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},cfdc:function(t,e,n){},e58f:function(t,e,n){t.exports=n.p+"img/GenerationInfographic.61d01b89.png"}});
//# sourceMappingURL=app.ede7c556.js.map