(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0439":function(e,t){},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"login",(function(){return U}));n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c={name:"app",components:{}},u=c,s=(n("034f"),n("2877")),f=Object(s["a"])(u,a,i,!1,null,null,null),l=f.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._l(e.list,(function(t,r){return n("div",{key:r,staticClass:"item"},[n("h3",[e._v("第"+e._s(r+1)+"注")]),e._l(t.blue,(function(t,r){return n("div",{key:r,staticClass:"blue"},[e._v("\n        "+e._s(t)+"\n    ")])})),n("div",{staticClass:"red"},[e._v(e._s(t.red))])],2)})),n("button",{on:{click:e.createBall}},[e._v("Go")])],2)},m=[],h=(n("8e6e"),n("456d"),n("55dd"),n("ac6a"),n("5df3"),n("4f7f"),n("bd86")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-container"},[n("p",[e._v(e._s(e.msg))])])},v=[],b={name:"Footer",props:{msg:String}},y=b,O=(n("5f3f"),Object(s["a"])(y,g,v,!1,null,"5075313a",null)),j=O.exports,w=n("2f62");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(h["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={name:"Home",components:{Footer:j},data:function(){return{list:[]}},computed:P({},Object(w["b"])(["copyright"])),mounted:function(){},destroyed:function(){},methods:{createBall:function(){var e={blue:[],red:0},t=Math.ceil(16*Math.random()),n=new Set;while(n.size<6){var r=Math.ceil(33*Math.random());n.add(r)}n.forEach((function(t){e.blue.push(t)})),e.blue.sort((function(e,t){return e-t})),e.red=t,this.list.push(e)}}},k=S,x=(n("f08a"),Object(s["a"])(k,d,m,!1,null,"3269d31e",null)),M=x.exports,T=n("18a0"),E=n.n(T),L=n("bc3a"),A=n.n(L),C="";C="https://sw4.heartinjoy.com/";var D=A.a.create({timeout:5e3,baseURL:C});D.interceptors.request.use((function(e){return e})),D.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var F=D,I=function(e){return F({url:"xxx/xxx",method:"post",data:e}).catch((function(e){return Promise.reject(e)}))},U=function(e,t){e.commit;return new Promise((function(e,n){I(t).then((function(t){t&&(0===t.rcode?(console.log("登录示例，登录成功后再做处理"),e(!0)):e(!1))})).catch((function(e){n(e)}))}))},R=n("0439"),$=n("94d5"),z={homeModulesflag:0},B={},H={},G={},J={namespaced:!0,state:z,getters:B,actions:G,mutations:H},K={firstLink:""},N=Object(h["a"])({},"SET_FIRST_LINK",(function(e,t){e.firstLink=t})),q={setFirstLink:function(e,t){var n=e.commit;n("SET_FIRST_LINK",t)}},Q={state:K,mutations:N,actions:q};o["a"].use(w["a"]);var V=new w["a"].Store({state:{copyright:"Power By Gavin"},actions:r,mutations:R,getters:$,modules:{home:J,login:Q}}),W={initConfig:function(e){/micromessenger/i.test(navigator.userAgent)&&(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)&&(V.state.theFirstLink?e=V.state.firstLink:V.dispatch("setFirstLink",e)),F({url:"ac/getSign",method:"get",data:{url:e}}).then((function(e){1==e.result&&E.a.config({debug:!1,appId:e.appId,nonceStr:e.noncestr,signature:e.sign,timestamp:e.timestamp,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"]})})).catch((function(e){return Promise.reject(e)})))},share:function(e,t,n,r){if(/micromessenger/i.test(navigator.userAgent)){var o="https://sw4.heartinjoy.com/go/index#/",a="神武邀请你加入长安城十年聊天群~ ";t&&(a=t);var i="这个H5让绝大部分的游戏玩家想起了自己曾经快乐冲浪时光，一起来看看~";n&&(i=n);var c="https://pic.zizaihome.com/3779cddc-ece4-11ea-ba76-00163e060b31.jpg";r&&(c=r),E.a.ready((function(){E.a.updateAppMessageShareData({title:a,desc:i,link:o,imgUrl:c,success:function(){}}),E.a.updateTimelineShareData({title:a,link:o,imgUrl:c}),E.a.onMenuShareAppMessage({title:a,desc:i,link:o,imgUrl:c}),E.a.onMenuShareTimeline({title:a,link:o,imgUrl:c}),E.a.error((function(e){console.log(e)}))}))}},setTitle:function(e){document.title=e;var t=document.createElement("iframe");t.src="",t.style.display="none",t.onload=function(){setTimeout((function(){t.remove()}),9)},document.body.appendChild(t)}};o["a"].use(p["a"]);var X=new p["a"]({routes:[{path:"/",name:"Home",component:M}]});X.afterEach((function(e,t){W.initConfig(encodeURI(location.origin+e.fullPath)),W.share(location.origin+e.fullPath)}));var Y=X,Z=n("bd0c"),ee=n("d6d3"),te=n.n(ee),ne=(n("18df"),n("e196")),re=n.n(ne);o["a"].use(Z["a"]),n("fda2"),n("451f"),o["a"].use(te.a),o["a"].use(re.a),o["a"].prototype.wxUtil=W,o["a"].config.productionTip=!1,new o["a"]({store:V,router:Y,render:function(e){return e(l)}}).$mount("#app")},"5f3f":function(e,t,n){"use strict";var r=n("6aea"),o=n.n(r);o.a},"64a9":function(e,t,n){},"6aea":function(e,t,n){},"94d5":function(e,t){},effb:function(e,t,n){},f08a:function(e,t,n){"use strict";var r=n("effb"),o=n.n(r);o.a}});
//# sourceMappingURL=app.6383e41b.js.map