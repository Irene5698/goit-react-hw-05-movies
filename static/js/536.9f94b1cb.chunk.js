"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[536],{548:function(e,n,t){t.d(n,{IQ:function(){return p},Jh:function(){return d},gH:function(){return u},rj:function(){return o},s_:function(){return l}});var r=t(861),a=t(757),s=t.n(a),i=t(243),c="e62aa03ea01a4734fb4ccae0088b942f";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(c,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"?api_key=").concat(c));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/credits?api_key=").concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},536:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,a=t(439),s=t(791),i=t(87),c=t(689),o=t(548),u=t(168),l=t(128),p=t(444),d=t(184),f=(0,p.ZP)(i.rU)(r||(r=(0,u.Z)(["\n  display: inline-flex;\n  align-items: center;\n  background-color: #795e93;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  padding: 5px 10px;\n  margin-bottom: 5px;\n\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: #babdd2;\n  }\n"]))),h=function(e){var n=e.to,t=e.children;return(0,d.jsxs)(f,{to:n,children:[(0,d.jsx)(l.jTe,{size:"24"}),t]})},v="MovieDetails_ActorImg__pFBg3",x="MovieDetails_Description__DW17q",m="MovieDetails_Details__xdbSO",_="MovieDetails_Information__en5EZ",j="MovieDetails_DetailsList__gSOY-",g="MovieDetails_InfoTitle__5Bi0D",w=function(){var e,n,t=(0,s.useState)(null),r=(0,a.Z)(t,2),u=r[0],l=r[1],p=(0,c.UO)().movieId,f=null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";if((0,s.useEffect)((function(){(0,o.s_)(p).then(l)}),[p]),u)return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{to:f,children:"Go back"}),(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("img",{className:v,src:"https://www.themoviedb.org/t/p/w500/".concat(u.poster_path),alt:"".concat(u.title)}),(0,d.jsxs)("div",{className:x,children:[(0,d.jsxs)("h2",{children:[u.title," (",u.release_date.slice(0,4),")"]}),(0,d.jsxs)("p",{children:["User score: ",Math.floor(10*u.vote_average),"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:u.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:u.genres.map((function(e){return e.name})).join(" / ")})]})]}),(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("h2",{className:g,children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{className:j,children:(0,d.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{className:j,children:(0,d.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading subpage..."}),children:(0,d.jsx)(c.j3,{})})]})]})}}}]);
//# sourceMappingURL=536.9f94b1cb.chunk.js.map