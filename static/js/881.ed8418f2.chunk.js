"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{881:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var r=s(439),a=s(791),n=s(243),i=s(87),l=s(689),o="Movies_searchForm__J4-xw",c="Movies_ulMovies__AZCsB",u="Movies_liMovies__XwF8x",h="Movies_aMovies__vTTUt",d="Movies_releaseMovies__SJUEz",m=s(184);function v(){var e,t,s=(0,a.useState)([]),v=(0,r.Z)(s,2),_=v[0],f=v[1],p=(0,i.lr)(),g=(0,r.Z)(p,2),x=g[0],j=g[1],b=(0,a.useState)(null!==(e=x.get("query"))&&void 0!==e?e:""),w=(0,r.Z)(b,2),y=w[0],M=w[1],k=(0,l.TH)();console.log("searchParams",x);var N=null!==(t=x.get("query"))&&void 0!==t?t:"";return(0,a.useEffect)((function(){""!==N&&n.Z.get("https://api.themoviedb.org/3/search/movie?api_key=d0540c3f94b98f357d5d7224e563e83f&query=".concat(N)).then((function(e){f(e.data.results)})).catch((function(e){console.log(e)}))}),[N]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:o,children:(0,m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===y)return alert("sorry, but you should write smthng");j({query:y}),e.target.reset()},children:[(0,m.jsx)("input",{type:"text",placeholder:"Please enter film name",onChange:function(e){M(e.target.value)}}),(0,m.jsx)("button",{type:"submit",children:"Search"})]})}),(0,m.jsx)("div",{children:(0,m.jsx)("ul",{className:c,children:_.length>0?_.map((function(e){var t=e.release_date,s=e.original_title,r=e.id,a=e.poster_path;return(0,m.jsx)("ul",{children:(0,m.jsxs)("li",{className:u,children:[(0,m.jsx)(i.rU,{className:h,to:"/movies/".concat(r),state:{from:k},children:s}),(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:s,width:"250",height:"300"})}),(0,m.jsxs)("p",{className:d,children:["Release Date:",(0,m.jsxs)("span",{children:[" ",t||"No date"]})]})]})},r)})):null})})]})}}}]);
//# sourceMappingURL=881.ed8418f2.chunk.js.map