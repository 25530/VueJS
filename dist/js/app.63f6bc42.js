(function(e){function t(t){for(var o,a,c=t[0],l=t[1],u=t[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p=" /";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"4e9f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Addtheo",{on:{"add-theo":e.addtheo}}),n("theoes",{attrs:{theoes:e.theoes},on:{"del-theo":e.deletetheo}})],1)},i=[],a=(n("99af"),n("4de4"),n("2909")),c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("h1",[e._v("Wish List")])])}],u={name:"Header"},s=u,d=(n("d15c"),n("2877")),h=Object(d["a"])(s,c,l,!1,null,"419a1e5a",null),f=h.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.theoes,(function(t){return n("div",{key:t.id},[n("theoItem",{attrs:{theo:t},on:{"del-theo":function(n){return e.$emit("del-theo",t.id)}}})],1)})),0)},m=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theo-item",class:{"is-complete":e.theo.completed}},[n("p",[n("input",{attrs:{type:"checkbox"},on:{change:e.markComplete}}),e._v(" "+e._s(e.theo.title)+" "),n("button",{staticClass:"del",on:{click:function(t){return e.$emit("del-theo",e.theo.id)}}},[e._v("x")])])])},b=[],_={name:"theoItem",props:["theo"],methods:{markComplete:function(){this.theo.completed=!this.theo.completed}}},y=_,O=(n("df73"),Object(d["a"])(y,v,b,!1,null,"045c7a28",null)),g=O.exports,j={name:"theoes",components:{theoItem:g},props:["theoes"]},x=j,w=Object(d["a"])(x,p,m,!1,null,"102ae3a3",null),$=w.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{on:{submit:e.addtheo}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add theo..."},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},P=[],C=n("11c1"),E=n.n(C),S={name:"Addtheo",data:function(){return{title:""}},methods:{addtheo:function(e){e.preventDefault();var t={id:E.a.v4(),title:this.title,completed:!1};this.$emit("add-theo",t),this.title=""}}},T=S,A=(n("abcc"),Object(d["a"])(T,k,P,!1,null,"5e48cb4e",null)),M=A.exports,H={name:"app",components:{Header:f,theoes:$,Addtheo:M},data:function(){return{theoes:[{id:1,title:"Theo 1",completed:!1},{id:2,title:"theo 2",completed:!1},{id:3,title:"Theo 3",completed:!0}]}},methods:{deletetheo:function(e){this.theoes=this.theoes.filter((function(t){return t.id!==e}))},addtheo:function(e){this.theoes=[].concat(Object(a["a"])(this.theoes),[e])}}},I=H,J=(n("034f"),Object(d["a"])(I,r,i,!1,null,null,null)),D=J.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(D)}}).$mount("#app")},6339:function(e,t,n){},"85ec":function(e,t,n){},abcc:function(e,t,n){"use strict";var o=n("f68d"),r=n.n(o);r.a},d15c:function(e,t,n){"use strict";var o=n("4e9f"),r=n.n(o);r.a},df73:function(e,t,n){"use strict";var o=n("6339"),r=n.n(o);r.a},f68d:function(e,t,n){}});
//# sourceMappingURL=app.63f6bc42.js.map