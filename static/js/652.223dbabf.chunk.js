"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[652],{548:function(e,t,r){r.d(t,{IQ:function(){return p},Jh:function(){return h},gH:function(){return i},rj:function(){return o},s_:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(243),s="e62aa03ea01a4734fb4ccae0088b942f";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},155:function(e,t,r){r.d(t,{O:function(){return s}});var n=r(87),a=r(689),c="MoviesList_MovieList__XVN8b",u=r(184),s=function(e){var t=e.movies,r=(0,a.TH)();return(0,u.jsx)("div",{children:t.map((function(e){return(0,u.jsx)("li",{className:c,children:(0,u.jsx)(n.rU,{to:"/movies/".concat(e.id),state:{from:r},children:(0,u.jsx)("p",{children:e.title})})},e.id)}))})}},652:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(439),a=r(791),c="SearchBar_Searchbar__qe5Sc",u="SearchBar_SearchForm__J+i1a",s="SearchBar_SearchFormInput__4T9IM",o="SearchBar_SearchFormButton__J-w2N",i="SearchBar_SearchFormButtonText__9xgMl",f=r(184),p=function(e){var t=e.onSearch,r=(0,a.useState)(""),p=(0,n.Z)(r,2),h=p[0],l=p[1];return(0,f.jsx)("header",{className:c,children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==h.trim()?(t(h),l("")):alert("Input your request pleace")},className:u,children:[(0,f.jsx)("input",{className:s,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){l(e.currentTarget.value.toLowerCase())},value:h}),(0,f.jsx)("button",{type:"submit",className:o,children:(0,f.jsx)("span",{className:i,children:"Search"})})]})})},h=r(155),l=r(87),m=r(548),v=function(){var e=(0,l.lr)(),t=(0,n.Z)(e,2),r=t[0],c=t[1],u=(0,a.useState)([]),s=(0,n.Z)(u,2),o=s[0],i=s[1],v=r.get("name");(0,a.useEffect)((function(){v&&(0,m.gH)(v).then(i)}),[v]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onSearch:function(e){c(""!==e?{name:e}:{})}}),(0,f.jsx)(h.O,{movies:o})]})}}}]);
//# sourceMappingURL=652.223dbabf.chunk.js.map