"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(439),a=n(689),c=n(791),o=n(243),i=n(184);function s(){var e=(0,c.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],u=(0,a.UO)().movieId;return(0,c.useEffect)((function(){o.Z.get("https://api.themoviedb.org/3/movie/".concat(u,"/reviews?api_key=d0540c3f94b98f357d5d7224e563e83f&language=en-US")).then((function(e){e.data.results.length>0&&s(e.data.results)})).catch((function(e){console.log("error",e)}))}),[u]),(0,i.jsx)(i.Fragment,{children:n?n.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:t}),(0,i.jsx)("p",{children:n})]},r)})):(0,i.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=681.3480177f.chunk.js.map