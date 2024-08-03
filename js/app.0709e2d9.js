(function(){"use strict";var t={5118:function(t,e,i){var r=i(5471),s=i(5668),n=i(301),a=i(8143),o=i(5322),l=function(){var t=this,e=t._self._c;return e(s.A,[e(n.A,{attrs:{app:""}},[e("Header")],1),e(o.A,{staticStyle:{padding:"0"}},[e("router-view")],1),e(a.A,[e("Footer")],1)],1)},c=[],u=i(2696),m=i(3740),d=i(3449),p=i(8983),f=i(7296),g=i(9637),v=i(833),h=i(1034),A=i(198),y=i(2367),_=function(){var t=this,e=t._self._c;return e(d.A,[e(A.A,{attrs:{tag:"div",color:"transparent",flat:""}},[e(y.sw,[t._v("v2-Gallery")]),e(h.A),t.$resize&&t.$mq.above(600)?e(y.MZ,t._l(t.items,(function(i,r){return e(m.A,{key:r,attrs:{text:""}},[e("router-link",{attrs:{to:i.href}},[t._v(" "+t._s(i.title)+" ")])],1)})),1):e(y.MZ,[e(u.A,{attrs:{id:"menu-activator"}}),e(v.A,{attrs:{activator:"#menu-activator"}},[e(p.A,t._l(t.items,(function(i,r){return e(f.A,{key:r,attrs:{value:r}},[e(g.UZ,[t._v(t._s(i.title))])],1)})),1)],1)],1)],1)],1)},b=[],x={name:"Header",data:()=>({items:[{href:"/",title:"Home"},{href:"/about",title:"About"},{href:"/contacts",title:"Contact"}]})},w=x,j=i(1656),C=(0,j.A)(w,_,b,!1,null,null,null),k=C.exports,O=i(1856),$=i(2938),P=i(9483),q=i(6930),S=function(){var t=this,e=t._self._c;return e(d.A,[e(a.A,{attrs:{tag:"div"}},[e(O.A,{staticClass:"text-center",attrs:{tile:"",flat:""}},[e($.OQ,t._l(t.icons,(function(i){return e(m.A,{key:i,staticClass:"mx-4",attrs:{icon:""}},[e(q.A,{attrs:{size:"24px"}},[t._v(t._s(i))])],1)})),1),e($.OQ,{staticClass:"pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),e(P.A),e($.OQ,[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("v2-Gallery")])])],1)],1)],1)},H=[],z={name:"Footer",data:()=>({icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]})},M=z,F=(0,j.A)(M,S,H,!1,null,null,null),T=F.exports,G={name:"App",components:{Header:k,Footer:T},data:()=>({})},L=G,Q=(0,j.A)(L,l,c,!1,null,null,null),W=Q.exports,D=i(3971);r.Ay.use(D.A);var N=new D.A({}),Z=i(3039),B=i(173),E=i(1054),R=function(){var t=this,e=t._self._c;return e(E.A,[e("Hero"),e("Gallery"),e("LatestPost")],1)},U=[],Y=i(6006),I=i(4242),V=i(2756),J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"heroBlock"},[e(Y.A,{attrs:{"hide-delimiters":"","show-arrows":!1,cycle:""}},t._l(t.items,(function(i){return e(I.A,{key:i.id,attrs:{src:i.src,"reverse-transition":"fade-transition",transition:"fade-transition",cover:""}},[e(V.A,{directives:[{name:"show",rawName:"v-show",value:t.$resize&&t.$mq.above(600),expression:"$resize && $mq.above(600)"}],staticClass:"fill-height title",attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(i.title)+" ")])],1)})),1)],1)},K=[],X={name:"Hero",data:()=>({items:[{id:1,src:i(5979),title:"We are creative"},{id:2,src:i(812),title:"We are hard worker"},{id:3,src:i(5161),title:"We are professional"}]})},tt=X,et=(0,j.A)(tt,J,K,!1,null,null,null),it=et.exports,rt=i(4414),st=i(5420),nt=i(1554),at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"block galleryBlock"},[e(d.A,[e("h2",{staticClass:"text-center"},[t._v("Gallery")]),t.$resize&&t.$mq.above(600)?e(V.A,t._l(t.items,(function(i){return e(rt.A,{key:i.id,staticClass:"d-flex child-flex col-2",class:{"col-4":t.$resize&&t.$mq.above(768)}},[e(st.A,{staticClass:"bg-grey-lighten-2",attrs:{src:i.src,"aspect-ratio":"1",cover:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(V.A,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e(nt.A,{attrs:{color:"grey-lighten-5",indeterminate:""}})],1)]},proxy:!0}],null,!0)})],1)})),1):e(Y.A,{attrs:{height:"320","hide-delimiter-background":""}},t._l(t.items,(function(t){return e(I.A,{key:t.id,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition",cover:""}})})),1)],1)],1)},ot=[],lt={name:"Gallery",data:()=>({items:[{id:1,src:i(8004)},{id:2,src:i(2483)},{id:3,src:i(3958)},{id:4,src:i(5405)},{id:5,src:i(832)},{id:6,src:i(5167)},{id:7,src:i(2498)},{id:8,src:i(5417)},{id:9,src:i(1068)},{id:10,src:i(4558)},{id:11,src:i(505)},{id:12,src:i(8892)}]})},ct=lt,ut=(0,j.A)(ct,at,ot,!1,null,null,null),mt=ut.exports,dt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"block latestPostBlock"},[e(d.A,[e("h2",{staticClass:"text-center"},[t._v("Latest Post")]),e(V.A,t._l(t.items,(function(i){return e(rt.A,{key:i.id,staticClass:"auto",class:{"col-4":t.$resize&&t.$mq.above(768)}},[e(O.A,{staticClass:"mx-auto fill-height",attrs:{outlined:""}},[e(st.A,{staticClass:"align-end text-white",attrs:{height:"200",src:i.src,cover:""}},[e($.ri,[t._v(t._s(i.title))])],1),e($.ZR,{staticClass:"pt-4"},[t._v(" "+t._s(i.subtitle)+" ")]),e($.OQ,[e("div",[t._v(t._s(i.description))])]),e($.SL,[e(m.A,{attrs:{color:"primary",text:""}},[t._v("More")])],1)],1)],1)})),1)],1)],1)},pt=[],ft={name:"LatestPost",data:()=>({items:[{id:1,title:"Top western road trips",subtitle:"1,000 miles of wonder",description:"Embark on a scenic journey through the American West, with breathtaking landscapes and historic landmarks. A road trip to remember",src:i(4558)},{id:2,title:"Christmas tales to read",subtitle:"2,000 miles of wonder",description:"Spread joy and cheer this holiday season with festive decor, warm gatherings, and meaningful gifts. Make memories to cherish forever.",src:i(505)},{id:3,title:"20 movies not to miss in 2020",subtitle:"3,000 miles of wonder",description:"Escape reality and immerse yourself in a world of imagination through the magic of movies. Discover new stories, emotions, and adventures.",src:i(8892)}]})},gt=ft,vt=(0,j.A)(gt,dt,pt,!1,null,null,null),ht=vt.exports,At={name:"Home",components:{Hero:it,Gallery:mt,LatestPost:ht},data:()=>({})},yt=At,_t=(0,j.A)(yt,R,U,!1,null,null,null),bt=_t.exports,xt=function(){var t=this,e=t._self._c;return e(E.A,[e("div",{staticClass:"staticHero"},[e(st.A,{attrs:{src:i(3097)}},[e(V.A,{staticClass:"lightbox white--text pa-2 fill-height",attrs:{align:"end"}},[e(rt.A,[e(d.A,[e("div",{staticClass:"headline title",class:{"text-md-h1 text-sm-h2":t.$resize&&t.$mq.above(769)}},[t._v(" About Us ")])])],1)],1)],1)],1),e("div",{staticClass:"block block-mq"},[e(d.A,[e("p",[t._v(" Photography is an art form that allows us to express our creativity and preserve memories for generations to come. It's a way to capture the world around us, from the grand landscapes to the small details, and to tell a story through a single image. Whether you're a professional photographer or just starting out, the journey of improving your craft is always exciting. You can experiment with different lighting, compositions, and techniques to create unique and visually stunning images. Additionally, photography allows us to document the world, capture social and political issues, and raise awareness about important causes. So grab your camera, go out and explore, and let your creativity run free. ")])])],1),e("div",{staticClass:"block"},[e(d.A,[e("h2",{staticClass:"text-center"},[t._v("Our Teams")]),e(V.A,t._l(t.items,(function(i){return e(rt.A,{key:i.id,staticClass:"col-auto",class:{"col-4":t.$resize&&t.$mq.above(600)}},[e(O.A,{staticClass:"mx-auto",attrs:{flat:""}},[e(st.A,{staticClass:"align-end text-white",attrs:{src:i.src,cover:""}}),e($.OQ,{staticClass:"text--primary text-center"},[e("div",{staticClass:"title"},[t._v(t._s(i.name))]),e("p",[t._v(t._s(i.title))])])],1)],1)})),1)],1)],1)])},wt=[],jt={name:"About",data:()=>({items:[{id:1,src:i(7852),name:"Peter Smith",title:"Director"},{id:2,src:i(4827),name:"Roy Perry",title:"Photographer"},{id:3,src:i(3518),name:"Lisa White",title:"Freelancer"}]})},Ct=jt,kt=(0,j.A)(Ct,xt,wt,!1,null,null,null),Ot=kt.exports,$t=function(){var t=this,e=t._self._c;return e(E.A,[t._v(" Contacts ")])},Pt=[],qt={name:"Contacts",data:()=>({})},St=qt,Ht=(0,j.A)(St,$t,Pt,!1,null,null,null),zt=Ht.exports,Mt=function(){var t=this,e=t._self._c;return e(E.A,[t._v(" Not Found ")])},Ft=[],Tt={name:"NotFound",data:()=>({})},Gt=Tt,Lt=(0,j.A)(Gt,Mt,Ft,!1,null,null,null),Qt=Lt.exports;const Wt=new Z.H5;r.Ay.use(Wt),r.Ay.use(B.A),r.Ay.config.productionTip=!1;const Dt=new B.A({mode:"history",routes:[{path:"/",component:bt},{path:"/about",component:Ot},{path:"/contacts",component:zt},{path:"*",component:Qt}]});new r.Ay({vuetify:N,router:Dt,mediaQueries:Wt,render:t=>t(W)}).$mount("#app")},8004:function(t,e,i){t.exports=i.p+"img/img1.b2912791.jpg"},2483:function(t,e,i){t.exports=i.p+"img/img2.f69f2d72.jpg"},3958:function(t,e,i){t.exports=i.p+"img/img3.5dd8e90d.jpg"},5405:function(t,e,i){t.exports=i.p+"img/img4.df46c786.jpg"},832:function(t,e,i){t.exports=i.p+"img/img5.9e52c0fc.jpg"},5167:function(t,e,i){t.exports=i.p+"img/img6.991adc0c.jpg"},2498:function(t,e,i){t.exports=i.p+"img/img7.08608b98.jpg"},5417:function(t,e,i){t.exports=i.p+"img/img8.f3ae47fb.jpg"},1068:function(t,e,i){t.exports=i.p+"img/img9.024adb24.jpg"},5979:function(t,e,i){t.exports=i.p+"img/img-carousel1.c7a3cfc9.jpg"},812:function(t,e,i){t.exports=i.p+"img/img-carousel2.3cf42707.jpg"},5161:function(t,e,i){t.exports=i.p+"img/img-carousel3.8085e15f.jpg"},3097:function(t,e,i){t.exports=i.p+"img/img1.6a577864.jpg"},4558:function(t,e,i){t.exports=i.p+"img/img1.3b0adb29.jpg"},505:function(t,e,i){t.exports=i.p+"img/img2.db447095.jpg"},8892:function(t,e,i){t.exports=i.p+"img/img3.034c44de.jpg"},7852:function(t,e,i){t.exports=i.p+"img/team1.41c52ea9.jpg"},4827:function(t,e,i){t.exports=i.p+"img/team2.b2e96cdd.jpg"},3518:function(t,e,i){t.exports=i.p+"img/team3.61bdb53f.jpg"}},e={};function i(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,r,s,n){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],n=t[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(i.O).every((function(t){return i.O[t](r[l])}))?r.splice(l--,1):(o=!1,n<a&&(a=n));if(o){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,s,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/v2-gallery/"}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,n,a=r[0],o=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(l)var u=l(i)}for(e&&e(r);c<a.length;c++)n=a[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(u)},r=self["webpackChunkgallery"]=self["webpackChunkgallery"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=i.O(void 0,[504],(function(){return i(5118)}));r=i.O(r)})();
//# sourceMappingURL=app.0709e2d9.js.map