"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,i,s){s.r(i),s.d(i,{default:function(){return m}});var t=s(439),a=s(791),r=s(689),n=s(87),c=s(243),l="MovieDetails_movieBox__pi2XS",o="MovieDetails_ulMovieDetails__A38cu",d="MovieDetails_btnBack__X1hfE",h="MovieDetails_liLinks__q9mac",v=s(184);function m(){var e,i,s=(0,a.useState)({id:0,title:"",average:0,img:"",overview:"",genres:[]}),m=(0,t.Z)(s,2),j=m[0],u=m[1],x=(0,r.TH)(),g=(0,a.useRef)(null!==(e=null===(i=x.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/movies"),p=(0,r.UO)().movieId;console.log("location",x),(0,a.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/".concat(p,"?api_key=d0540c3f94b98f357d5d7224e563e83f")).then((function(e){u({id:e.data.id,title:e.data.original_title,average:e.data.vote_average,img:e.data.poster_path,overview:e.data.overview,genres:e.data.genres})}))}),[p]);var f=j.title,_=j.img,w=j.average,k=j.overview,b=j.genres;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h1",{children:f}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{className:d,children:(0,v.jsx)(n.rU,{to:g.current,children:"Back"})})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:_?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(_),alt:f,height:"400"}):(0,v.jsx)("img",{src:"https://img10.joyreactor.cc/pics/post/anon-5573344.png",alt:"not found",width:"266",height:"400"})}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("p",{children:["User score: ",w]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:k}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("ul",{children:b&&b.map((function(e){var i=e.id,s=e.name;return(0,v.jsx)("p",{className:o,children:s},i)}))})]})]}),(0,v.jsx)("div",{children:(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(n.rU,{to:"reviews",state:{from:g},className:h,children:"Reviews"})}),(0,v.jsx)("li",{children:(0,v.jsx)(n.rU,{to:"cast",state:{from:g},className:h,children:"Cast"})})]})})," ",(0,v.jsx)(a.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading subpage..."}),children:(0,v.jsx)(r.j3,{})})]})})}}}]);
//# sourceMappingURL=135.541b2498.chunk.js.map