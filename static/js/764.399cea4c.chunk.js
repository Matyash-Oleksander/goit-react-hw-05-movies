"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{192:function(n,t,e){e.d(t,{M:function(){return m}});var r,a,c,i,u=e(68),o=e(168),s=e(444),p=s.ZP.ul(r||(r=(0,o.Z)(["\n  margin-top: 16px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n  list-style: none;\n"]))),f=s.ZP.li(a||(a=(0,o.Z)(["\n  cursor: pointer;\n  transition: all;\n  border-radius: 10px;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03) translateZ(0);\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),l=s.ZP.img(c||(c=(0,o.Z)(["\n  border-radius: inherit;\n  box-shadow: 0px 3px 4px 1px rgba(44, 133, 200, 0.2);\n  height: 450px;\n  max-width: 300px;\n"]))),h=s.ZP.h2(i||(i=(0,o.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  max-width: 300px;\n"]))),d=e(731),x=e(184),m=function(n){var t=n.films,e=n.location;return(0,x.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,x.jsx)(d.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,x.jsxs)(f,{children:[(0,x.jsx)(l,{src:null!==a?"".concat(u.YQ).concat(u.QN).concat(a):"https://houseofzayn.co.nz/wp-content/uploads/2019/08/nopicture.gif",alt:r}),(0,x.jsx)(h,{children:r})]})},t)}))})}},764:function(n,t,e){e.r(t);var r=e(885),a=e(211),c=e(791),i=e(731),u=e(689),o=e(68),s=e(192),p=e(184);t.default=function(){var n,t=(0,c.useState)(""),e=(0,r.Z)(t,2),f=e[0],l=e[1],h=(0,c.useState)([]),d=(0,r.Z)(h,2),x=d[0],m=d[1],v=(0,c.useState)("To display films, enter a query in the search field"),g=(0,r.Z)(v,2),y=g[0],Z=g[1],w=(0,i.lr)(),b=(0,r.Z)(w,2),k=b[0],j=b[1],P=(0,u.TH)(),_="".concat(P.pathname).concat(P.search),S=null!==(n=k.get("query"))&&void 0!==n?n:"";return(0,c.useEffect)((function(){S&&(Z(""),(0,o.gH)(S).then((function(n){n.total_pages;var t=n.results;return m(t)})))}),[S]),(0,c.useEffect)((function(){S&&!x.length&&Z("Sorry, nothing was found, please try your search again")}),[x.length,S]),(0,p.jsxs)("main",{children:[(0,p.jsxs)(a.U,{onSubmit:function(n){if(n.preventDefault(),""===f.trim())return Z("Nothing entered! To display films, enter a query in the search field");m([]),j(""!==f?{query:f}:{}),l("")},children:[(0,p.jsx)("input",{type:"text",name:"findForm",placeholder:"Search films",value:f,onChange:function(n){return l(n.currentTarget.value)}}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),!x.length&&(0,p.jsx)(a.v,{children:y}),(0,p.jsx)(s.M,{films:x,location:_})]})}},211:function(n,t,e){e.d(t,{U:function(){return u},v:function(){return o}});var r,a,c=e(168),i=e(444),u=i.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),o=i.ZP.div(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 700;\n"])))},68:function(n,t,e){e.d(t,{Hg:function(){return f},M1:function(){return h},QN:function(){return s},YQ:function(){return o},gH:function(){return x},nP:function(){return p},ts:function(){return l},tx:function(){return d}});var r=e(861),a=e(757),c=e.n(a),i=e(44),u="39c85cbe6405a47f44401a8e3d701a0f";i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o="https://image.tmdb.org/t/p",s="/w300",p="/w200",f=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,i.ZP.get("/trending/movie/week?api_key=".concat(u,"&page=").concat(t));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=764.399cea4c.chunk.js.map