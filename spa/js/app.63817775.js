(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("2f39")},"0047":function(e,n,t){},"034f":function(e,n,t){"use strict";var a=t("c4ee"),r=t.n(a);r.a},"2f39":function(e,n,t){"use strict";t.r(n);var a=t("967e"),r=t.n(a),o=(t("a481"),t("96cf"),t("5c7d"),t("35fc"),t("1194"),t("573e"),t("7d6e"),t("e54f"),t("985d"),t("0047"),t("2b0e")),u=t("1f91"),c=t("42d2"),i=t("b05d"),s=t("1b3f");o["a"].use(i["a"],{config:{screen:{bodyClasses:!0},loadingBar:{color:"purple",size:"5px",position:"top"}},lang:u["a"],iconSet:c["a"],plugins:{LoadingBar:s["a"]}});var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},d=[],f=t("fc1b"),p={name:"App",mounted:function(){this.$store.dispatch("auth/checkIfAuth")}},h=p,m=(t("034f"),t("2877")),b=Object(m["a"])(h,l,d,!1,null,null,null),g=b.exports,v=t("2f62"),w=(t("6762"),t("2fdb"),{namespaced:!0,state:{user:null,isLoggedIn:!1},getters:{isLoggedIn:function(e){return e.isLoggedIn},isAdmin:function(e){return!(!e.user||!e.user.email.includes("admin"))},userEmail:function(e){return e.user?e.user.email:null},userProfile:function(e){return e.user}},mutations:{setUser:function(e,n){e.user=n},setLoggedIn:function(e,n){e.isLoggedIn=n}},actions:{login:function(e,n){var t=this,a=(e.commit,e.getters),o=e.dispatch;f["b"].auth().signInWithEmailAndPassword(n.email,n.password).then((function(e){return r.a.async((function(n){while(1)switch(n.prev=n.next){case 0:return e.user,n.next=3,r.a.awrap(o("checkIfAuth"));case 3:a.isAdmin?t.$router.replace("/admin-page"):t.$router.replace("/");case 4:case"end":return n.stop()}}))})).catch((function(e){var n=e.code,t=e.message;console.log(n),console.log(t)}))},checkIfAuth:function(e){var n;return r.a.async((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,f["b"].auth().onAuthStateChanged((function(e){console.log(e),n("setLoggedIn",null!==e),n("setUser",e?{displayName:e.displayName,email:e.email}:null)}));case 2:case"end":return t.stop()}}))},signOut:function(e){var n=this,t=e.getters;f["b"].auth().signOut().then((function(){t.isAdmin?n.$router.replace("/"):alert("you are signed out")}))}}});o["a"].use(v["a"]);var k=new v["a"].Store({modules:{auth:w},strict:!1}),x=k,A=(t("7f7f"),t("8c4f")),y=[{path:"/",component:function(){return Promise.all([t.e("vendor"),t.e("chunk-common"),t.e("2d22c0ff")]).then(t.bind(null,"f241"))},children:[{path:"",component:function(){return Promise.all([t.e("vendor"),t.e("chunk-common"),t.e("682c679c")]).then(t.bind(null,"8b24"))}},{path:"/menu",component:function(){return Promise.all([t.e("vendor"),t.e("chunk-common")]).then(t.bind(null,"504c"))}},{path:"/location",component:function(){return Promise.all([t.e("vendor"),t.e("chunk-common")]).then(t.bind(null,"172d"))}},{path:"/contact",component:function(){return Promise.all([t.e("vendor"),t.e("chunk-common")]).then(t.bind(null,"172d"))}},{path:"/admin",component:function(){return Promise.all([t.e("vendor"),t.e("2d0a314a")]).then(t.bind(null,"013f"))}}]},{path:"/admin-page",component:function(){return Promise.all([t.e("vendor"),t.e("chunk-common"),t.e("7737dd9a")]).then(t.bind(null,"f6b42"))},meta:{requiresAdmin:!0},children:[{path:"",component:function(){return Promise.all([t.e("vendor"),t.e("19c07de6")]).then(t.bind(null,"5117"))}}]}];y.push({path:"*",component:function(){return Promise.all([t.e("vendor"),t.e("4b47640d")]).then(t.bind(null,"e51e"))}});var I=y;o["a"].use(A["a"]);var P=function(){var e=new A["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:I,mode:"hash",base:""});return e.beforeResolve((function(e,n,t){e.name&&s["a"].start(),t()})),e.afterEach((function(e,n){s["a"].stop()})),e.beforeEach((function(e,n,t){e.matched.some((function(e){return e.meta.requiresAuth}))?x.getters["base/isLoggedIn"]?t():t({path:"/login"}):e.matched.some((function(e){return e.meta.requiresAdmin}))?x.getters["auth/isAdmin"]?t():t({path:"/"}):t()})),e};function L(){var e,n,t;return r.a.async((function(a){while(1)switch(a.prev=a.next){case 0:if("function"!==typeof x){a.next=6;break}return a.next=3,r.a.awrap(x({Vue:o["a"]}));case 3:a.t0=a.sent,a.next=7;break;case 6:a.t0=x;case 7:if(e=a.t0,"function"!==typeof P){a.next=14;break}return a.next=11,r.a.awrap(P({Vue:o["a"],store:e}));case 11:a.t1=a.sent,a.next=15;break;case 14:a.t1=P;case 15:return n=a.t1,e.$router=n,t={el:"#q-app",router:n,store:e,render:function(e){return e(g)}},a.abrupt("return",{app:t,store:e,router:n});case 19:case"end":return a.stop()}}))}var z=t("a925"),E={failed:"Action failed",success:"Action was successful"},$={"en-us":E};o["a"].use(z["a"]);var q=new z["a"]({locale:"en-us",fallbackLocale:"en-us",messages:$}),S=function(e){var n=e.app;n.i18n=q},V=t("bc3a"),B=t.n(V);o["a"].prototype.$axios=B.a;var C=t("1dce"),U=t.n(C),N=function(e){var n=e.Vue;n.use(U.a)};function O(){var e,n,t,a,u,c,i,s,l;return r.a.async((function(d){while(1)switch(d.prev=d.next){case 0:return d.next=2,r.a.awrap(L());case 2:e=d.sent,n=e.app,t=e.store,a=e.router,u=!0,c=function(e){u=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),s=[S,void 0,f["default"],N],l=0;case 11:if(!(!0===u&&l<s.length)){d.next=29;break}if("function"===typeof s[l]){d.next=14;break}return d.abrupt("continue",26);case 14:return d.prev=14,d.next=17,r.a.awrap(s[l]({app:n,router:a,store:t,Vue:o["a"],ssrContext:null,redirect:c,urlPath:i}));case 17:d.next=26;break;case 19:if(d.prev=19,d.t0=d["catch"](14),!d.t0||!d.t0.url){d.next=24;break}return window.location.href=d.t0.url,d.abrupt("return");case 24:return console.error("[Quasar] boot error:",d.t0),d.abrupt("return");case 26:l++,d.next=11;break;case 29:if(!1!==u){d.next=31;break}return d.abrupt("return");case 31:new o["a"](n);case 32:case"end":return d.stop()}}),null,null,[[14,19]])}O()},c4ee:function(e,n,t){},fc1b:function(e,n,t){"use strict";t.d(n,"c",(function(){return c}));var a=t("59ca");t.d(n,"b",(function(){return a}));var r=t("2398"),o=(t("ea7b"),t("66ce"),t("c9b9"),{apiKey:"AIzaSyCNT919vAVD9InE-bPeo27E4LMtGAYvcsw",authDomain:"izakaya-nobunaga.firebaseapp.com",databaseURL:"https://izakaya-nobunaga.firebaseio.com",projectId:"izakaya-nobunaga",storageBucket:"izakaya-nobunaga.appspot.com",messagingSenderId:"11941835784",appId:"1:11941835784:web:509748333820860d814dbd"}),u=a["initializeApp"](o),c=(u.auth(),u.database(),new r["a"].AuthUI(a["auth"]()))}},[[0,"runtime","vendor"]]]);