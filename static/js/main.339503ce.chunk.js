(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),c=(n(95),n(18)),l=n(133),u=n(136),s=n(138),p=l.a.Header,m=function(e){var t=e.page,n=(Object(a.useRef)(null),Object(a.useState)({})),r=Object(c.a)(n,2);r[0],r[1];return Object(a.useEffect)((function(){}),[]),i.a.createElement(l.a,{className:"layout",style:{position:"relative",width:"100%",top:0,float:"right"}},i.a.createElement(p,{style:{display:0===t?"none":"",background:"white",zIndex:1}},i.a.createElement(u.a,{style:{paddingLeft:"10px",paddingRight:"10px",float:"right",color:"black",opacity:"0.5",zIndex:1,borderRadius:"100px 100px 100px 100px"},theme:"light",mode:"horizontal",defaultSelectedKeys:[(t+2).toString()]},i.a.createElement(u.a.Item,{key:"1"},"Home"),i.a.createElement(u.a.Item,{key:"2"},"About"),i.a.createElement(u.a.Item,{key:"3"},"Skill"),i.a.createElement(u.a.Item,{key:"4"},"Project"),i.a.createElement(u.a.Item,{key:"5"},"Contact"),i.a.createElement("div",{onClick:function(){window.open("https://github.com/kwonth211/newstart")},style:{display:"inline",float:"right",marginLeft:"120px",cursor:"pointer"}},i.a.createElement(s.a,{style:{fontSize:"22px"}})," GitHub"))))},g=(n(118),n(20)),b=n(21),f=n(137);function d(){var e=Object(g.a)(["\n  text-align: center;\n  color: ",";\n  background: ",";\n  margin-bottom: ",";\n  cursor: pointer;\n  z-index: 0;\n  border: ",";\n  display: ",";\n  ",";\n  width: 100%;\n"]);return d=function(){return e},e}var h=l.a.Footer,v=Object(b.b)(h)(d(),(function(e){return e.delayFlag&&e.page<1?"white":"black"}),(function(e){var t,n=e.firstFlag,a=e.page,i=e.delayFlag;return n&&0===a&&(t="rgb(25,25,25)"),0===a?n||(t=i?"rgb(25,25,25)":"white"):t="white",t}),(function(e){return e.type,""}),(function(e){return 0!==e.page?"1px solid rgb(238,238,238)":""}),(function(e){return 0===e.page&&"prev"===e.type?"none":""}),(function(e){return"next"===e.type?"bottom:0;position:fixed;":""})),E=!0,x=function(e){var t=e.pageEvent,n=e.type,r=e.page,o=Object(a.useState)(!1),l=Object(c.a)(o,2),u=l[0],s=l[1];return Object(a.useEffect)((function(){"next"===n&&0===r&&setTimeout((function(){s(!0)}),750)}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{page:r,type:n,firstFlag:E,delayFlag:u,onClick:function(e){var n=e.currentTarget.innerText.includes("\ub2e4\uc74c")?"next":"prev";t(n),E=!1}},"prev"===n?i.a.createElement(A,null,"\u2963 ",i.a.createElement("br",null),"\uc774\uc804 \ud398\uc774\uc9c0"):i.a.createElement(A,{animation:!0},"\ub2e4\uc74c \ud398\uc774\uc9c0",i.a.createElement("br",null),"\u2965")))};function y(){var e=Object(g.a)(["\n  position: absolute;\n  top: ",";\n  z-index: 0;\n  background-color: white;\n  box-sizing: border-box;\n  width: 100%;\n  height: 90vh;\n  margin-top: 87px;\n  overflow: hidden;\n\n  &.list-transition2-enter,\n  &.list-transition2-appear {\n    /* \uc774 \ucabd\uc774 \uc560\ub2c8\uba54\uc774\uc158 */\n    /*We give the list the initial dimension of the list button*/\n    top: 99%;\n    width: 100%;\n    /* max-height: 80%; */\n  }\n  /* This is where we can add the transition*/\n  &.list-transition2-enter-active,\n  &.list-transition2-appear-active {\n    top: ",";\n\n    /* height: 90%; */\n    width: 100%;\n    /* max-height: 70%; */\n    background-color: white;\n    transition: all 800ms;\n  }\n\n  /* This fires as soon as the this.state.showList is false */\n  &.list-transition2-exit {\n    top: 0%;\n    width: 100%;\n    max-height: 90%;\n    height: 100%;\n  }\n  &.list-transition2-exit-active {\n    top: 100%;\n    height: 0%;\n\n    transition: all 1200ms;\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(g.a)(["\n  position: absolute;\n  top: 7%;\n  z-index: 0;\n  background-color: white;\n  box-sizing: border-box;\n  width: 100%;\n  height: 90vh;\n  overflow: hidden;\n  &.list-transition-enter,\n  &.list-transition-appear {\n    top: 99%;\n    width: 100%;\n    max-height: 70%;\n  }\n  &.list-transition-enter-active,\n  &.list-transition-appear-active {\n    top: 7%;\n    height: 100%;\n    width: 100%;\n    max-height: 100%;\n    background-color: white;\n    transition: all 900ms;\n  }\n  &.list-transition-exit {\n    top: 0%;\n    width: 100%;\n    max-height: 100%;\n    height: 100%;\n    /* background-color: black; */\n  }\n  &.list-transition-exit-active {\n    top: -90%;\n    height: 0%;\n    transition: all 1300ms;\n  }\n"]);return O=function(){return e},e}var j=b.b.div(O()),w=b.b.div(y(),(function(e){return 0===e.page?"-9.2%":"0%"}),(function(e){return 0===e.page?"-9.2%":"0%"}));function k(){var e=Object(g.a)(["\n    from {\n        visibility: visibility;\n    }\n    to {\n        visibility: hidden;\n    }\n    from {\n        visibility: visibility;\n    }\n    to {\n        visibility: hidden;\n    }\n    "]);return k=function(){return e},e}var S=Object(b.c)(k()),z=function(e){var t=e.component,n=e.pageEvent,r=e.animationMoveType,o=e.page,l=Object(a.useState)(!0),u=Object(c.a)(l,2),s=u[0],p=u[1];return Object(a.useEffect)((function(){"next"===r&&setTimeout((function(){p(!0),p(!1)})),p(!1)}),[t,o,r]),"next"===r?i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{in:s,timeout:2e3,classNames:"list-transition",unmountOnExit:!0,appear:!0},i.a.createElement(j,null,i.a.createElement(x,{page:o,type:"prev",pageEvent:function(){n("prev")}}),t[o-1])),i.a.createElement(f.a,{in:!s,timeout:2e3,classNames:"list-transition",unmountOnExit:!0,appear:!0},i.a.createElement(j,null,i.a.createElement(x,{page:o,type:"prev",pageEvent:function(){n("prev")}}),t[o],i.a.createElement(x,{type:"next",page:o,pageEvent:function(){n("next")}})))):i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{in:!s,timeout:750,classNames:"list-transition2",unmountOnExit:!0,appear:!0},i.a.createElement(w,{page:o},i.a.createElement(x,{page:o,type:"prev",pageEvent:function(){n("prev")}}),t[o],i.a.createElement(x,{type:"next",page:o,pageEvent:function(){n("next")}}))),i.a.createElement(f.a,{in:s,timeout:750,classNames:"list-transition2",unmountOnExit:!0,appear:!0},i.a.createElement(w,{page:o},i.a.createElement(x,{page:o,type:"prev",pageEvent:function(){n("prev")}}),t[o+1],i.a.createElement(x,{type:"next",page:o,pageEvent:function(){n("next")}}))))};function T(){var e=Object(g.a)(["\n      animation: "," 300ms steps(5, start) infinite alternate;\n    "]);return T=function(){return e},e}function I(){var e=Object(g.a)(["\n  background: inherit;\n  border: 0px;\n  z-index: 1;\n  cursor: pointer;\n  ","\n"]);return I=function(){return e},e}function F(){var e=Object(g.a)(["\n  color: white;\n  font-size: ",";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  text-align: center;\n  display: block;\n  width: 100%;\n  height: 150px;\n  line-height: 50px;\n"]);return F=function(){return e},e}function C(){var e=Object(g.a)(["\n  background: rgb(25, 25, 25);\n  width: 100vw;\n  height: 90vh;\n  -webkit-box-shadow: 0 10px 6px -6px rgb(221, 221, 221);\n  -moz-box-shadow: 0 10px 6px -6px rgb(221, 221, 221);\n  box-shadow: 0 10px 6px -6px rgb(221, 221, 221);\n"]);return C=function(){return e},e}var N=b.b.div(C()),R=b.b.div(F(),(function(e){return e.fontSize})),A=b.b.button(I(),(function(e){return e.animation&&Object(b.a)(T(),S)}));function H(){var e=Object(g.a)(["\n  background: inherit;\n  border: 0px;\n  z-index: 1;\n  cursor: pointer;\n  font-size: 20pt;\n  animation: "," 300ms steps(5, start) infinite alternate;\n"]);return H=function(){return e},e}var L=l.a.Content,M=b.b.span(H(),S),D=function(e){var t=e.pageEvent,n=Object(a.useState)([]),r=Object(c.a)(n,2),o=r[0],l=r[1],u=Object(a.useRef)(),s="\uc548\ub155\ud558\uc138\uc694.".split("").reverse(),p="\uc800\ub294 <FrontEnd/> \uac1c\ubc1c\uc790 \uad8c\ud0dc\ud6c8 \uc785\ub2c8\ub2e4.".split("").reverse();return Object(a.useEffect)((function(){return setTimeout((function(){u.current=setInterval((function(){s.length>0?o=o.concat(s.pop()||""):(0===s.length&&27===p.length&&(o=o.concat(i.a.createElement("br",{key:"br"}))),o=o.concat(p.pop()||""),0===p.length&&clearInterval(u.current)),l(o)}),80)}),1e3),function(){l([]),clearInterval(u.current)}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(L,null,i.a.createElement(N,null,i.a.createElement(R,{fontSize:"17pt"},o,i.a.createElement(M,null,"|"))),i.a.createElement(x,{type:"next",page:0,pageEvent:t})))},J=n(135),W=n(139),q=n(134),B=l.a.Content,G=J.a.Step,K=[{title:"\uba85\uc9c0\uc804\ubb38\ub300\ud559",description:"2013/02 ~ 2018/02"},{title:"\uc751\uc6a9 SW\uac1c\ubc1c\uc790 \uc591\uc131\uacfc\uc815",description:"2018/08 ~ 2019/03"},{title:"\ub354\uc874\ube44\uc988\uc628",description:"2019/08 ~ 2020/09"},{title:"???",description:""}],P=["front-end","back-end","javascript","typescript","reacthooks","next","node","graphql"],Q=function(e){e.pageEvent;var t=Object(a.useState)(0),n=Object(c.a)(t,2),r=n[0],o=n[1],l=Object(a.useRef)(null),u=Object(a.useRef)();return Object(a.useEffect)((function(){l.current.getContext("2d");return function(){clearInterval(u.current)}}),[]),Object(a.useEffect)((function(){r<2&&setTimeout((function(){o(r+1)}),500)}),[r]),i.a.createElement("div",null,i.a.createElement(B,{style:{paddingTop:"140px",height:"40vh",padding:"0 50px",width:"70%",margin:"0 auto",boxShadow:"5px 5px 10px 0px rgb(128,128,128)"}},i.a.createElement("h1",{style:{textAlign:"center",textDecoration:"underline",paddingTop:"10px"}},"About"),i.a.createElement("div",{style:{display:"inline",float:"right"}},i.a.createElement("canvas",{ref:l})),i.a.createElement("div",{className:"site-layout-content"},"\ud558\ub8e8\ud558\ub8e8 \uc131\uc7a5\ud558\uace0 \uc2f6\uc740 \uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc778 html,css,javascript \ub97c \ub2e4\ub97c\uc904 \uc54c\uba70 \ucd5c\uc2e0 \ud504\ub808\uc784\uc6cc\ud06c react\ub97c \ub2e4\ub8e8\ub294\ub370\uc5d0\ub3c4 \uc775\uc219\ud569\ub2c8\ub2e4.",i.a.createElement("br",null)," \ud5a5\ud6c4\uc5d0\ub294 \uc6f9 \uc804\ubc18\uc801\uc778 fullstack \uc5ed\ub7c9\uc744 \uae38\ub7ec \uac1c\ubc1c \uc804\ubb38\uac00\uac00 \ub418\ub294\uac83\uc774 \uc81c \uafc8\uc785\ub2c8\ub2e4.",i.a.createElement("br",null),i.a.createElement("br",null),P.map((function(e,t){return i.a.createElement(W.a,{key:t,color:"default"},"#"+e)})))),i.a.createElement(B,{style:{padding:"30px 50px",width:"70%",marginTop:"20px",height:"30%"}},i.a.createElement("h1",{style:{textAlign:"center",textDecoration:"underline"}},"History"),i.a.createElement(J.a,{current:r},K.map((function(e,t){return i.a.createElement(G,{key:t,title:e.title,description:e.description})}))),i.a.createElement(q.a,null)))},U=(n(129),l.a.Content,J.a.Step,function(){});var V=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),l=Object(c.a)(o,2),u=l[0],s=l[1],p=Object(a.useState)(!1),g=Object(c.a)(p,2),b=g[0],f=g[1],d=Object(a.useState)(""),h=Object(c.a)(d,2),v=h[0],E=h[1];Object(a.useEffect)((function(){f(!0)}),[]),Object(a.useEffect)((function(){b&&r("sadasdsa")}),[u]);var x=function(e){"next"===e?u<=y.length-1&&s(u+1):0<u&&s(u-1),E(e)},y=Object(a.useMemo)((function(){return[i.a.createElement(D,{pageEvent:x}),i.a.createElement(Q,null),i.a.createElement(U,null)]}),[u]);return i.a.createElement("div",{style:{background:"rgb(249,249,249)"}},i.a.createElement(m,{page:u}),n?i.a.createElement(z,{animationMoveType:v,page:u,component:y,pageEvent:x}):y[0])};o.a.render(i.a.createElement(V,null),document.getElementById("root"))},90:function(e,t,n){e.exports=n(130)},95:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.339503ce.chunk.js.map