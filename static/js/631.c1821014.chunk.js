"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{631:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,c,o,i,s,u,p,l,d,f=t(885),h=t(689),v=t(791),x=t(68),g=t(168),m=t(444),Z=t(731),w=(0,m.ZP)(Z.rU)(r||(r=(0,g.Z)(["\n  color: black;\n  &:hover {\n    color: orangered;\n  }\n"]))),j=(0,m.ZP)(Z.OL)(a||(a=(0,g.Z)(["\n  color: black;\n  text-decoration: none;\n  &:hover {\n    color: orangered;\n  }\n  &.active {\n    color: orangered;\n  }\n"]))),k=m.ZP.div(c||(c=(0,g.Z)(["\n  margin-top: 16px;\n  margin-left: 16px;\n"]))),y=m.ZP.div(o||(o=(0,g.Z)(["\n  margin-top: 16px;\n  display: flex;\n  gap: 16px;\n"]))),P=m.ZP.h2(i||(i=(0,g.Z)(["\n  font-size: 24px;\n  font-weight: 700;\n"]))),b=m.ZP.p(s||(s=(0,g.Z)(["\n  color: orangered;\n  font-weight: 700;\n"]))),_=m.ZP.h3(u||(u=(0,g.Z)(["\n  margin-top: 16px;\n  font-weight: 700;\n"]))),S=m.ZP.p(p||(p=(0,g.Z)(["\n  margin-top: 8px;\n"]))),U=m.ZP.p(l||(l=(0,g.Z)(["\n  margin-top: 8px;\n  display: flex;\n  gap: 8px;\n"]))),Q=m.ZP.ul(d||(d=(0,g.Z)(["\n  margin-top: 8px;\n  list-style: disc;\n  display: flex;\n  flex-direction: column;\n"]))),z=t(184),C=function(){var n,e,t=(0,h.UO)().movieId;console.log("movieId -",t);var r=(0,v.useState)({}),a=(0,f.Z)(r,2),c=a[0],o=a[1],i=(0,v.useState)([]),s=(0,f.Z)(i,2),u=s[0],p=s[1],l=c.poster_path,d=c.title,g=c.vote_average,m=c.overview,Z=c.release_date,C=new Date(Z).getFullYear(),H=(0,h.TH)();return(0,v.useEffect)((function(){try{(0,x.ts)(t).then((function(n){o(n),p(n.genres)}))}catch(n){console.log(n)}}),[t]),(0,z.jsxs)(k,{children:[(0,z.jsx)(w,{to:null!==(n=null===H||void 0===H||null===(e=H.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"}),(0,z.jsxs)(y,{children:[(0,z.jsx)("div",{children:(0,z.jsx)("img",{src:null!==l?"".concat(x.YQ).concat(x.QN).concat(l):"https://houseofzayn.co.nz/wp-content/uploads/2019/08/nopicture.gif",alt:d})}),(0,z.jsxs)("div",{children:[(0,z.jsxs)(P,{children:[d," (",C,")"]}),(0,z.jsxs)(b,{children:[(0,z.jsx)("span",{children:"Average:"})," ",g]}),(0,z.jsx)(_,{children:"Overview"}),(0,z.jsx)(S,{children:m}),(0,z.jsx)(_,{children:"Genres"}),(0,z.jsx)(U,{children:u.map((function(n){var e=n.name;return(0,z.jsx)("li",{children:e},e)}))})]})]}),(0,z.jsx)(_,{children:"Aditional information"}),(0,z.jsxs)(Q,{children:[(0,z.jsx)("li",{children:(0,z.jsx)(j,{to:"cast",state:{from:H.state.from},children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(j,{to:"reviews",state:{from:H.state.from},children:"Reviews"})})]}),(0,z.jsx)(v.Suspense,{fallback:(0,z.jsx)("div",{children:"Loading page..."}),children:(0,z.jsx)(h.j3,{context:t})})]})}},68:function(n,e,t){t.d(e,{Hg:function(){return l},M1:function(){return f},QN:function(){return u},YQ:function(){return s},gH:function(){return v},nP:function(){return p},ts:function(){return d},tx:function(){return h}});var r=t(861),a=t(757),c=t.n(a),o=t(44),i="39c85cbe6405a47f44401a8e3d701a0f";o.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="https://image.tmdb.org/t/p",u="/w300",p="/w200",l=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,o.ZP.get("/trending/movie/week?api_key=".concat(i,"&page=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=").concat(t));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=631.c1821014.chunk.js.map