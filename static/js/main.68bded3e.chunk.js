(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),o=(n(95),n(18)),l=n(133),u=n(136),s=n(138),p=l.a.Header,m=function(e){var t=e.page,n=(Object(a.useRef)(null),Object(a.useState)({})),i=Object(o.a)(n,2);i[0],i[1];return Object(a.useEffect)((function(){}),[]),r.a.createElement(l.a,{className:"layout",style:{position:"relative",width:"100%",top:0,float:"right"}},r.a.createElement(p,{style:{display:0===t?"none":"",background:"white",zIndex:1}},r.a.createElement(u.a,{style:{paddingLeft:"10px",paddingRight:"10px",float:"right",color:"black",opacity:"0.5",zIndex:1,borderRadius:"100px 100px 100px 100px"},theme:"light",mode:"horizontal",defaultSelectedKeys:[(t+2).toString()]},r.a.createElement(u.a.Item,{key:"1"},"Home"),r.a.createElement(u.a.Item,{key:"2"},"About"),r.a.createElement(u.a.Item,{key:"3"},"Skill"),r.a.createElement(u.a.Item,{key:"4"},"Project"),r.a.createElement(u.a.Item,{key:"5"},"Contact"),r.a.createElement("div",{onClick:function(){window.open("https://github.com/kwonth211/newstart")},style:{display:"inline",float:"right",marginLeft:"120px",cursor:"pointer"}},r.a.createElement(s.a,{style:{fontSize:"22px"}})," GitHub"))))},b=(n(118),n(24)),f=n(25),d=(n(119),n(137));function E(){var e=Object(b.a)(["\n  text-align: center;\n  color: ",";\n  background: ",";\n  margin-bottom: ",";\n  cursor: pointer;\n  z-index: 0;\n  width: 100%;\n"]);return E=function(){return e},e}var g=l.a.Footer,v=Object(f.b)(g)(E(),(function(e){return e.delayFlag?"black":e.page<1?"white":"black"}),(function(e){return e.delayFlag?"white":e.page<1?"rgb(25,25,25)":"white"}),(function(e){return"prev"===e.type?"60px":""})),x=function(e){var t=e.pageEvent,n=e.type,i=e.page,c=Object(a.useState)(!1),l=Object(o.a)(c,2),u=l[0],s=l[1];return Object(a.useEffect)((function(){"prev"===n&&setTimeout((function(){s(!0)}),1e3)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{page:i,type:n,delayFlag:u,onClick:function(){t("next")}},"prev"===n?r.a.createElement(z,null,"\u2963 ",r.a.createElement("br",null),"\uc774\uc804 \ud398\uc774\uc9c0"):r.a.createElement(z,{animation:!0},"\ub2e4\uc74c \ud398\uc774\uc9c0",r.a.createElement("br",null),"\u2965")))};function h(){var e=Object(b.a)(["\n    from {\n        visibility: visibility;\n    }\n    to {\n        visibility: hidden;\n    }\n    from {\n        visibility: visibility;\n    }\n    to {\n        visibility: hidden;\n    }\n    "]);return h=function(){return e},e}var y=Object(f.c)(h()),O=function(e){var t=e.component,n=e.pageEvent,i=e.animationMoveType,c=e.page,l=Object(a.useState)(!0),u=Object(o.a)(l,2),s=u[0],p=u[1];return Object(a.useEffect)((function(){p(!1)}),[t,c]),"next"===i?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{in:s,timeout:2e3,classNames:"list-transition",unmountOnExit:!0,appear:!0},r.a.createElement("div",{className:"list-body"},t[c-1])),r.a.createElement(d.a,{in:!s,timeout:2e3,classNames:"list-transition",unmountOnExit:!0,appear:!0},r.a.createElement("div",{className:"list-body"},r.a.createElement(x,{page:c,type:"prev",pageEvent:function(){n("prev")}}),t[c]))):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{in:!s,timeout:1500,classNames:"list-transition2",unmountOnExit:!0,appear:!0},r.a.createElement("div",{className:"list-body2"},t[c])),r.a.createElement(d.a,{in:s,timeout:1500,classNames:"list-transition2",unmountOnExit:!0,appear:!0},r.a.createElement("div",{className:"list-body2"},r.a.createElement(x,{page:c,type:"prev",pageEvent:function(){n("prev")}}),t[c+1])))};function j(){var e=Object(b.a)(["\n      animation: "," 300ms steps(5, start) infinite alternate;\n    "]);return j=function(){return e},e}function k(){var e=Object(b.a)(["\n  background: inherit;\n  border: 0px;\n  z-index: 1;\n  cursor: pointer;\n  ","\n"]);return k=function(){return e},e}function w(){var e=Object(b.a)(["\n  color: white;\n  font-size: ",";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  text-align: center;\n  display: block;\n  width: 100%;\n  height: 150px;\n  line-height: 50px;\n"]);return w=function(){return e},e}function S(){var e=Object(b.a)(["\n  background: rgb(25, 25, 25);\n  width: 100vw;\n  height: 90vh;\n  -webkit-box-shadow: 0 10px 6px -6px rgb(221, 221, 221);\n  -moz-box-shadow: 0 10px 6px -6px rgb(221, 221, 221);\n  box-shadow: 0 10px 6px -6px rgb(221, 221, 221);\n"]);return S=function(){return e},e}var T=f.b.div(S()),I=f.b.div(w(),(function(e){return e.fontSize})),z=f.b.button(k(),(function(e){return e.animation&&Object(f.a)(j(),y)}));function N(){var e=Object(b.a)(["\n  background: inherit;\n  border: 0px;\n  z-index: 1;\n  cursor: pointer;\n  font-size: 20pt;\n  animation: "," 300ms steps(5, start) infinite alternate;\n"]);return N=function(){return e},e}var F=l.a.Content,R=f.b.span(N(),y),C=function(e){var t=e.pageEvent,n=Object(a.useState)([]),i=Object(o.a)(n,2),c=i[0],l=i[1],u=Object(a.useRef)(),s="\uc548\ub155\ud558\uc138\uc694.".split("").reverse(),p="\uc800\ub294 <FrontEnd/> \uac1c\ubc1c\uc790 \uad8c\ud0dc\ud6c8 \uc785\ub2c8\ub2e4.".split("").reverse();return Object(a.useEffect)((function(){return setTimeout((function(){u.current=setInterval((function(){s.length>0?c=c.concat(s.pop()||""):(0===s.length&&0===p.length&&(c=c.concat(r.a.createElement("br",null))),c=c.concat(p.pop()||""),0===p.length&&clearInterval(u.current)),l(c)}),80)}),1e3),function(){clearInterval(u.current)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null,r.a.createElement(T,null,r.a.createElement(I,{fontSize:"17pt"},c,r.a.createElement(R,null,"|"))),r.a.createElement(x,{type:"next",page:0,pageEvent:t})))},A=n(135),H=n(139),M=n(134),P=l.a.Content,D=A.a.Step,J=[{title:"\uba85\uc9c0\uc804\ubb38\ub300\ud559",description:"2013/02 ~ 2018/02"},{title:"\uc778\uc7ac \uac1c\ubc1c\uc6d0",description:"2018/08 ~ 2019/03"},{title:"\ub354\uc874\ube44\uc988\uc628",description:"2019/08 ~ 2020/09"},{title:"???",description:""}],L=["front-end","back-end","javascript","typescript","reacthooks","next","node","graphql"],q=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useRef)(null),l=Object(a.useRef)();Object(a.useEffect)((function(){var e=c.current.getContext("2d");return e&&(l.current=setInterval((function(){p(e),m(e)}),20)),function(){clearInterval(l.current)}}),[]);var u=120,s=100,p=function(e){if(console.log(s),s>15){e.clearRect(0,0,400,400),e.beginPath(),e.arc(u,s,7,0,2*Math.PI),e.moveTo(u-5,s+5),e.lineTo(u-5,s+25);var t=0;setInterval((function(){t<50?(e.moveTo(u-6,s+25),e.lineTo(u+7,s+45)):(e.moveTo(u-6,s+35),e.lineTo(u+7,s+45),t>100&&(t=0)),e.stroke(),t++}),10),e.moveTo(u-6,s+25),e.lineTo(u-15,s+45),e.stroke(),u+=1.5,s-=.8}},m=function(e){for(var t=135,n=135,a=0;a<10;a++)e.rect(t,n,20,350),t+=20,n-=10;e.border="1px solid red",e.fill(),e.closePath(),t-=.5,n-=.8};return Object(a.useEffect)((function(){n<2&&setTimeout((function(){i(n+1)}),500)}),[n]),r.a.createElement("div",null,r.a.createElement(P,{style:{paddingTop:"140px",padding:"0 50px",width:"80%",margin:"0 auto",boxShadow:"5px 5px 10px 0px rgb(128,128,128)"}},r.a.createElement("h1",{style:{textAlign:"center",textDecoration:"underline",paddingTop:"10px"}},"About"),r.a.createElement("div",{style:{display:"inline",float:"right"}},r.a.createElement("canvas",{ref:c})),r.a.createElement("div",{className:"site-layout-content"},"\ud558\ub8e8\ud558\ub8e8 \uc131\uc7a5\ud558\uace0 \uc2f6\uc740 \uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc778 html,css,javascript \ub97c \ub2e4\ub97c\uc904 \uc54c\uba70 \ucd5c\uc2e0 \ud504\ub808\uc784\uc6cc\ud06c react\ub97c \ub2e4\ub8e8\ub294\ub370\uc5d0\ub3c4 \uc775\uc219\ud569\ub2c8\ub2e4.",r.a.createElement("br",null)," \ud5a5\ud6c4\uc5d0\ub294 \uc6f9 \uc804\ubc18\uc801\uc778 fullstack \uc5ed\ub7c9\uc744 \uae38\ub7ec \uac1c\ubc1c \uc804\ubb38\uac00\uac00 \ub418\ub294\uac83\uc774 \uc81c \uafc8\uc785\ub2c8\ub2e4.",r.a.createElement("br",null),r.a.createElement("br",null),L.map((function(e,t){return r.a.createElement(H.a,{color:"default"},"#"+e)})))),r.a.createElement(P,{style:{padding:"30px 50px",marginTop:"20px"}},r.a.createElement("h1",{style:{textAlign:"center",textDecoration:"underline"}},"History"),r.a.createElement(A.a,{current:n},J.map((function(e,t){return r.a.createElement(D,{key:e.title,title:e.title,description:e.description})}))),r.a.createElement(M.a,null)),r.a.createElement(x,{type:"next",page:2,pageEvent:function(){}}))};var B=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(0),l=Object(o.a)(c,2),u=l[0],s=l[1],p=Object(a.useState)(!1),b=Object(o.a)(p,2),f=b[0],d=b[1],E=Object(a.useState)(""),g=Object(o.a)(E,2),v=g[0],x=g[1];Object(a.useEffect)((function(){d(!0)}),[]),Object(a.useEffect)((function(){f&&y[u]&&i(y[u])}),[u]);var h=function(e){"next"===e?u<=y.length-1&&s(u+1):0<u&&s(u-1),x(e)},y=Object(a.useMemo)((function(){return[r.a.createElement(C,{pageEvent:h}),r.a.createElement(q,null)]}),[]);return r.a.createElement("div",{style:{background:"rgb(249,249,249)"}},r.a.createElement(m,{page:u}),n?r.a.createElement(O,{animationMoveType:v,page:u,component:y,pageEvent:h}):r.a.createElement(C,{pageEvent:h}))};c.a.render(r.a.createElement(B,null),document.getElementById("root"))},90:function(e,t,n){e.exports=n(130)},95:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.68bded3e.chunk.js.map