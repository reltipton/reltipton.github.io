(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0992":function(t,e,n){t.exports=n.p+"img/GenerationInfographicSnippet.df1f61e7.png"},4558:function(t,e,n){t.exports=n.p+"img/InfographicSnippet.94333907.png"},"4e1a":function(t,e,n){},"55f5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",elevation:"0",height:"150",light:""}},[n("div",{staticClass:"d-flex align-center"},[n("router-link",{attrs:{to:"/"}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:t.images.sample,transition:"scale-transition",width:"200"}})],1)],1),n("v-spacer"),n("v-btn",{attrs:{to:"/about",text:""}},[n("span",{staticClass:"mr-2"},[t._v("About")])]),n("v-btn",{attrs:{href:"/docs/ArielTiptonResume.pdf",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Resume")])])],1),n("v-content",{staticClass:"font-and-background"},[n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{images:{sample:n("a858")}}}},s=i,c=(n("7500"),n("2877")),l=n("6544"),u=n.n(l),p=n("7496"),f=n("40dc"),d=n("8336"),m=n("a75b"),h=n("adda"),g=n("2fa4"),v=Object(c["a"])(s,a,o,!1,null,"65e2c809",null),j=v.exports;u()(v,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VContent:m["a"],VImg:h["a"],VSpacer:g["a"]});var b=n("9483");Object(b["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var w=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("ProjectsList")],1)},x=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white lighten-5"},[n("v-row",t._l(t.projects,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"mx-auto no-border",attrs:{"max-width":"344",outlined:"",tile:"",to:e.url}},[n("v-img",{attrs:{height:"100%",width:"100%","max-height":"300","max-width":"300",src:e.image,center:""}}),n("v-card-title",[n("span",{staticClass:"card-title"},[t._v(t._s(e.name))])])],1)],1)})),1)],1)},I=[],_={name:"ProjectsList",data:function(){return{projects:[{id:"ids-407",name:"IDS-407 Final Infographic",image:n("4558"),url:"project/ids-407"},{id:"ids-401",name:"IDS 401 Final Project",image:n("a360"),url:"project/ids-401"},{id:"gen-info",name:"Generation Infographic",image:n("0992"),url:"project/gen-info"}]}}},S=_,V=(n("6a40"),n("b0af")),P=n("99d9"),O=n("62ad"),k=n("a523"),D=n("0fd9"),A=Object(c["a"])(S,C,I,!1,null,"7640ff62",null),F=A.exports;u()(A,{VCard:V["a"],VCardTitle:P["a"],VCol:O["a"],VContainer:k["a"],VImg:h["a"],VRow:D["a"]});var $={name:"home",components:{ProjectsList:F}},E=$,T=Object(c["a"])(E,y,x,!1,null,null,null),R=T.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6",md:"6"}},[n("strong",[n("h2",{staticClass:"centered-text display-1"},[t._v(t._s(t.projectInContext.title))])])])],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6",md:"6"}},[n("p",{staticClass:"centered-text"},[t._v(t._s(t.projectInContext.description))])])],1)],1),n("v-container",[n("v-row",{attrs:{justify:"center"}},t._l(t.projectInContext.images,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:"",tile:""}},[n("v-img",{attrs:{height:"100%",width:"100%","max-height":"300","max-width":"300",src:t,center:""}})],1)],1)})),1)],1),n("v-container",[n("v-row",[n("h4",{staticClass:"headline"},[t._v(" Other Projects... ")])]),n("v-row",{attrs:{justify:"center"}},t._l(t.otherProjects,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:"",tile:"",to:t.url}},[n("v-img",{attrs:{height:"100%",width:"100%","max-height":"300","max-width":"300",src:t.images[0],center:""}})],1)],1)})),1)],1)],1)},L=[],B=(n("4de4"),n("7db0"),{name:"Project",beforeRouteUpdate:function(t,e,n){this.projectInContext=this.projects.find((function(e){return e.id===t.params.id})),this.otherProjects=this.projects.filter((function(e){return e.id!==t.params.id})),n()},created:function(){var t=this;this.projectInContext=this.projects.find((function(e){return e.id===t.$route.params.id})),this.otherProjects=this.projects.filter((function(e){return e.id!==t.$route.params.id}))},data:function(){return{projectInContext:{},otherProjects:[],projects:[{id:"ids-407",title:"IDS-407 Final Infographic",description:"IDS-407-Description",images:[n("4558"),n("ad63")],url:"/project/ids-407"},{id:"ids-401",title:"IDS 401 Final Project Infographic",description:"IDS-401 Final Project Description",url:"/project/ids-401",images:[n("a360"),n("7cf4")]},{id:"gen-info",title:"Generation Infographic",description:"Generation Infographic Description",url:"/project/gen-info",images:[n("0992"),n("e58f")]}]}}}),M=B,N=(n("e73e"),Object(c["a"])(M,G,L,!1,null,"860a908c",null)),H=N.exports;u()(N,{VCard:V["a"],VCol:O["a"],VContainer:k["a"],VImg:h["a"],VRow:D["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6",md:"6"}},[n("strong",[n("h1",{staticClass:"centered-text display-3"},[t._v("Hi! I'm Ariel.")])])])],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"6",md:"6"}},[n("p",[t._v("I graduated from the THE Ohio State with my Bachelor's degree in Computer Science. I'm currently attending Northwestern University getting my masters in Information Design and Strategy with a specialization in Data Science and Analytics. ")]),n("p",[t._v("In my freetime, I'm drinking a sour beer or playing with my dog!")])])],1)],1)],1)},U=[],q={name:"About",data:function(){return{}}},z=q,K=Object(c["a"])(z,J,U,!1,null,null,null),Q=K.exports;u()(K,{VCol:O["a"],VContainer:k["a"],VRow:D["a"]}),r["a"].use(w["a"]);var W=[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:Q},{path:"/project/:id",component:H}],X=new w["a"]({mode:"history",base:"/",routes:W}),Y=X,Z=n("f309");r["a"].use(Z["a"]);var tt=new Z["a"]({theme:{themes:{light:{primary:"#1F2846"}}}});r["a"].config.productionTip=!1,new r["a"]({router:Y,vuetify:tt,render:function(t){return t(j)}}).$mount("#app")},"6a40":function(t,e,n){"use strict";var r=n("55f5"),a=n.n(r);a.a},7500:function(t,e,n){"use strict";var r=n("881c"),a=n.n(r);a.a},"7cf4":function(t,e,n){t.exports=n.p+"img/IDS401_FinalProject.6e08fd6e.png"},"881c":function(t,e,n){},a360:function(t,e,n){t.exports=n.p+"img/FitInSnippet.566fab6d.png"},a858:function(t,e,n){t.exports=n.p+"img/ArielTiptonLogo.7138410a.png"},ad63:function(t,e,n){t.exports=n.p+"img/IDS407_finalInfographic.a2bef9c7.png"},e58f:function(t,e,n){t.exports=n.p+"img/GenerationInfographic.61d01b89.png"},e73e:function(t,e,n){"use strict";var r=n("4e1a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.426c6eff.js.map