(function(){"use strict";var e={828:function(e,t,n){n(454);var o=n(751),r=n(641);const a={class:"bg-gray"},c={class:"container medium-content py-3"},i={class:"d-flex justify-content-between align-items-center"},s={class:"list-group list-group-horizontal list-unstyled"},l={class:"mx-2 my-0"},u={class:"mx-2 my-0"};function d(e,t){const n=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",a,[(0,r.Lk)("div",c,[(0,r.Lk)("div",i,[(0,r.bF)(n,{class:"logo",to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("STEFAN BRADLEY")])),_:1}),(0,r.Lk)("div",null,[(0,r.Lk)("ul",s,[(0,r.Lk)("li",l,[(0,r.bF)(n,{to:"/articles"},{default:(0,r.k6)((()=>[(0,r.eW)("Articles")])),_:1})]),(0,r.Lk)("li",u,[(0,r.bF)(n,{to:"/music"},{default:(0,r.k6)((()=>[(0,r.eW)("Music")])),_:1})])])])])])])}var m=n(262);const f={},p=(0,m.A)(f,[["render",d]]);var b=p,h=n(33),v=n(953);const y=(0,v.Kh)({year:2024,mailchimpApiKey:"ec21a4c5b91c22891c8b434e9d711e5b-us22"});var g=n(31);const k={class:"bg-gray text-center py-4"},w={class:"container"},A={class:"row"},L={class:"m-0"};var E={__name:"Footer",setup(e){return(e,t)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(g.A),(0,r.Lk)("footer",null,[(0,r.Lk)("section",k,[(0,r.Lk)("div",w,[(0,r.Lk)("div",A,[(0,r.Lk)("p",L,"Property of Stefan Bradley, "+(0,h.v_)((0,v.R1)(y).year),1)])])])])],64))}};const x=E;var F=x;const T={id:"mainContent",class:"loading"};var j={__name:"App",setup(e){return(e,t)=>{const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(b),(0,r.Lk)("div",T,[(0,r.bF)(n)]),(0,r.bF)(F)],64)}}};const O=j;var C=O,M=n(220);const S=[{path:"/",name:"Home",component:()=>n.e(308).then(n.bind(n,308)),meta:{title:"Stefan Bradley",canonical:"https://www.stefanbradley.net",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}},{path:"/:catchAll(.*)*",name:"PageNotFound",component:()=>n.e(555).then(n.bind(n,555)),meta:{title:"Requested Page Not Found on Mental Health Naps",metaTags:[{name:"description",content:"Requested Page Not Found on"}]}},{path:"/article",name:"Article",component:()=>n.e(499).then(n.bind(n,499)),meta:{title:"About Me",canonical:"https://www.stefanbradley.net/article",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}},{path:"/articles",name:"Articles",component:()=>n.e(118).then(n.bind(n,118)),meta:{title:"About Me",canonical:"https://www.stefanbradley.net/articles",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}},{path:"/music",name:"Music",component:()=>n.e(533).then(n.bind(n,533)),meta:{title:"About Me",canonical:"https://www.stefanbradley.net/music",metaTags:[{name:"description",content:""},{name:"keywords",content:""},{name:"robots",content:"index, follow"}]}}],P=(0,M.aE)({history:(0,M.LA)("/"),scrollBehavior(e,t,n){return e.hash?{el:e.hash,top:80}:n||{top:0}},routes:S});P.beforeEach(((e,t,n)=>{const o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),r=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.canonical)),c=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(o?document.title=o.meta.title:c&&(document.title=c.meta.title),a){const e=document.createElement("link");e.setAttribute("rel","canonical"),e.setAttribute("href",a.meta.canonical),document.head.append(e)}if(Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!r)return n();r.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((n=>{t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),n();let i=document.querySelectorAll("[id$=Modal]");for(let s=0;s<i.length;s++){let e=i[s].id.replace("Modal","");closeModal(e)}}));var _=P;(0,o.Ef)(C).use(_).mount("#app")},31:function(e,t,n){n.d(t,{A:function(){return m}});var o=n(641);const r={class:"py-3 bg-dark-blue"},a={class:"container medium-content text-center"},c=(0,o.Lk)("p",{class:"white mb-0"},[(0,o.eW)("Subscribe to my "),(0,o.Lk)("span",{class:"fw-bold fst-italic"},"Food 4 Thought"),(0,o.eW)(" news letter for recommendations and lessons from technology, music, books, and life.")],-1),i={class:"subscribe d-flex flex-column flex-sm-row justify-content-center align-items-center"};function s(e,t){return(0,o.uX)(),(0,o.CE)("section",r,[(0,o.Lk)("div",a,[(0,o.Lk)("div",null,[c,(0,o.Lk)("div",null,[(0,o.Lk)("div",i,[((0,o.uX)(),(0,o.Wv)((0,o.$y)("script"),{async:"","data-uid":"0396ab84d5",src:"https://stefan-bradley.ck.page/0396ab84d5/index.js"}))])])])])])}var l=n(262);const u={},d=(0,l.A)(u,[["render",s]]);var m=d}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var c=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var i=!0,s=0;s<o.length;s++)(!1&a||c>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{118:"30de68c9",308:"154b5cfc",499:"3cbd906c",533:"3c911856",555:"4f7b44c6"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mhn:";n.l=function(o,r,a,c){if(e[o])e[o].push(r);else{var i,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[r];var m=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var c=n.p+n.u(t),i=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,r[1](i)}};n.l(c,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,c=o[0],i=o[1],s=o[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(t&&t(o);l<c.length;l++)a=c[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkmhn"]=self["webpackChunkmhn"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(828)}));o=n.O(o)})();
//# sourceMappingURL=app.9692c4b9.js.map