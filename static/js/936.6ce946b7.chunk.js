"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{936:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var s=a(439),n=a(791),r=a(243),i=a(87),c="Home_h1Home__n7DdH",l="Home_ulHome__kRpIO",o="Home_liHome__Tlvbb",m="Home_aHome__qAPD7",d="Home_releaseHome__viFqJ",h=a(184);function _(){var e=(0,n.useState)([]),t=(0,s.Z)(e,2),a=t[0],_=t[1];return(0,n.useEffect)((function(){r.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=d0540c3f94b98f357d5d7224e563e83f").then((function(e){_(e.data.results)}))}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:c,children:"TOP 20 Movies"}),(0,h.jsx)("ul",{className:l,children:a.map((function(e){var t=e.id,a=e.title,s=e.name,n=e.release_date,r=e.poster_path;return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("li",{className:o,children:[(0,h.jsx)(i.rU,{to:"movies/".concat(t),className:m,children:a||s}),(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(r),alt:a,width:"250",height:"300"})}),(0,h.jsxs)("p",{className:d,children:["Release Date:",(0,h.jsx)("span",{children:n||"No date"})]})]},t)})}))})]})}}}]);
//# sourceMappingURL=936.6ce946b7.chunk.js.map