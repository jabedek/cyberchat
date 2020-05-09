(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(51),c=a.n(r),i=a(3),l=a(4),m=a(6),o=a(5),u=a(10),f=a(11),h=(a(60),a(61),function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{className:"header"},s.a.createElement("h1",{className:"logo !glitch ","data-text":"\r\nglitch"},"cyberchat")))}),E=(a(62),a(21)),d=a.n(E),g=function(e){return s.a.createElement("p",{onClick:e.handleClick,className:e.classes},e.text)},b=a(15),p=a.n(b),v=a(52),_=a.n(v)()("http://localhost:5000/"),j=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).generateUsername=function(){var e=["unique","rare","exceptional"],t=["entity","individual","subject","one"],a=t[Math.floor(Math.random()*(t.length-0))+0],s=e[Math.floor(Math.random()*(e.length-0))+0]+"-"+a;n.setState({username:s})},n.handleClick=function(e){n.setState({username:e})},n.registerUsername=function(){_.emit("USER_JOIN",{username:n.state.username,room:"Main",time:p()().format("h:mm:ss")})},n.state={username:"",classAnimate:"animation-appear",btnVisibility:{display:"none"},formVisibility:{height:"0",border:"none",width:"0"}},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.on("SERVER_WELCOME",(function(e){console.log("SERVER_WELCOME:\n",e)})),setTimeout((function(){e.setState({classAnimate:"",formVisibility:{height:"12vh",width:"40vw",border:"0.14rem solid rgba(255, 255, 0, 0.6)"}}),e.generateUsername()}),800)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"Join !glitch ","data-text":"\r glitch"},s.a.createElement("div",{className:"join-bg"},s.a.createElement("div",{className:"panorama animation-bg-opacity"},s.a.createElement("img",{alt:"city",className:"panorama__image",id:"panoramaImage",src:d.a}))),s.a.createElement(h,null),s.a.createElement("form",{className:"join-form ".concat(this.state.classAnimate),id:"joinForm",style:this.state.formVisibility,onFocus:function(){e.setState({btnVisibility:{display:"flex"}})},onSubmit:function(t){t.preventDefault(),e.registerUsername()}},s.a.createElement("input",{type:"text",id:"usernameInput",name:"username",className:"join-form__input ",spellCheck:"false",maxLength:"25",minLength:"1",required:!0,autoComplete:"off",value:this.state.username,onChange:function(t){e.setState({username:t.target.value})}}),s.a.createElement("p",{className:"join-form__hint",id:"joinFormHint"},s.a.createElement("span",{id:"usernameLength"},this.state.username.length)," / 25"),s.a.createElement("div",{className:"form-control",style:{display:"none "}},s.a.createElement("label",{htmlFor:"room"},"Room"),s.a.createElement("select",{name:"room",id:"room"},s.a.createElement("option",{defaultValue:"Og\xf3lne"},"Og\xf3lne"),s.a.createElement("option",{value:"Memesy"},"Memesy"),s.a.createElement("option",{value:"Nowy",id:"newRoom"},"nowy"))),s.a.createElement("div",{className:"button-wrapper",style:this.state.btnVisibility},s.a.createElement(u.c,{to:"chat"},s.a.createElement(g,{handleClick:this.registerUsername,text:"Go",classes:"join-button"}))))))}}]),a}(s.a.Component),N=a(32),y=a(13),O=(a(100),function(e){var t=Object(n.useState)("Elo"),a=Object(y.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),l=Object(y.a)(i,2),m=l[0],o=l[1],u=Object(n.useState)([]),f=Object(y.a)(u,2),h=f[0],E=f[1];Object(n.useEffect)((function(){c(e.username),o(e.room),E(e.users)}),[e.username,e.room,e.users]);return s.a.createElement("div",{className:"sidebar"},s.a.createElement("label",{className:"sidebar__header"},"Status"),s.a.createElement("ul",{className:"sidebar__list"},s.a.createElement("li",{className:"sidebar__item"},s.a.createElement("i",{className:"cube icon"}),"Room:",s.a.createElement("p",{className:"sidebar__value"},m)),s.a.createElement("li",{className:"sidebar__item"},s.a.createElement("i",{className:" eye icon"}),"You:",s.a.createElement("p",{className:"sidebar__value"},r)),s.a.createElement("li",{className:"sidebar__item"},s.a.createElement("i",{className:" users icon"}),"Users:",function(){if(h){var e=h.map((function(e,t){return s.a.createElement("li",{key:t},e.username)}));return s.a.createElement("ul",{className:"sidebar__value"},e)}return s.a.createElement("p",{className:"sidebar__value"},h.length)}())))}),S=(a(101),function(e){var t=Object(n.useState)([]),a=Object(y.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(null),l=Object(y.a)(i,2),m=l[0],o=l[1];Object(n.useEffect)((function(){m&&(m.scrollTop=m.scrollHeight)})),Object(n.useEffect)((function(){c(e.messages)}),[e.messages]),Object(n.useEffect)((function(){if(m&&m.children.length){var e=m.children[m.children.length-1];e.classList.toggle("animation-new-message"),setTimeout((function(){e.classList.toggle("animation-new-message")}),550)}}),[r]);return s.a.createElement("div",{className:"messages-bar"},s.a.createElement("label",{className:"messages-bar__header"},"Messages"),s.a.createElement("div",{className:"messages-bar__list-wrapper"},s.a.createElement("ul",{className:"messages-bar__list",ref:function(e){o(e)}},r&&r.map((function(e,t){return s.a.createElement("li",{key:t,className:"message"},s.a.createElement("p",{className:"message__username"},e.username,s.a.createElement("span",{className:"message__time"}," ",e.time)),s.a.createElement("p",{className:"message__text"}," ",e.text))})))))}),M=(a(102),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).sendMessage=function(){_.emit("USER_MESSAGE",{username:n.state.username,text:n.state.text,time:p()().format("h:mm:ss")}),n.setState({message:""}),n.setState({text:""})},n.state={text:"",username:e.username,time:null},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"new-message-bar"},s.a.createElement("label",{className:"new-message-bar__header"}),s.a.createElement("form",{className:"message__form",id:"message__form"},s.a.createElement("textarea",{id:"msg",type:"text",placeholder:"Enter a message",value:this.state.text,name:"message",autoComplete:"off",spellCheck:"false",className:"message__input ",onChange:function(t){e.setState({text:t.target.value})},onKeyDown:function(t){13===t.keyCode&&!1===t.shiftKey&&(t.preventDefault(),e.state.text&&e.sendMessage())}}),s.a.createElement(g,{handleClick:function(){e.state.text&&e.sendMessage()},text:">",classes:"send-button"})))}}]),a}(s.a.Component)),x=(a(103),a(18)),k=a.n(x),C=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s)))._isMounted=!1,e.state={connected:!1,username:"",messages:[],users:[],room:""},e.sendMessage=function(t){_.emit("USER_MESSAGE",{username:e.state.username,text:t,time:p()().format("h:mm:ss")}),e.setState({message:""})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,_.on("SERVER_MESSAGE",(function(t){if(e._isMounted)if(e.state.messages){var a=[].concat(Object(N.a)(e.state.messages),[t]);e.setState({messages:a})}else e.setState({messages:[t]})})),_.on("ROOM_USERS",(function(t){var a=t.room,n=t.users;e._isMounted&&e.setState({room:a,users:n})})),_.on("SERVER_REGISTER",(function(t){if(e._isMounted)if(e.setState({username:t.username,connected:!0}),e.state.messages){var a=[].concat(Object(N.a)(e.state.messages),[t.botMessage]);e.setState({messages:a})}else e.setState({messages:[t.botMessage]})})),console.log("ifvisible",k.a),this._isMounted&&(k.a.now("hidden")&&(console.log("ifvisible hidden"),_.disconnect(),this.setState({connected:!1})),k.a.on("blur",(function(){})),k.a.on("idle",(function(){})))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return s.a.createElement("div",{className:"chat"},s.a.createElement("div",{className:"chat__bg"},s.a.createElement("img",{alt:"city",className:"panorama__image panorama__image--chat",id:"panoramaImage",src:d.a})),s.a.createElement(h,null),this.state.connected?s.a.createElement("div",{className:"chat__board",onClick:function(){}},s.a.createElement(O,{username:this.state.username,room:this.state.room,users:this.state.users}),s.a.createElement(S,{messages:this.state.messages}),s.a.createElement(M,{username:this.state.username})):s.a.createElement(u.c,{to:"/"},s.a.createElement(g,{text:"Back",classes:"home-button animation-delayed-appear"})))}}]),a}(s.a.Component),R=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getList=function(){fetch("/api/getList").then((function(e){return e.json()})).then((function(e){return n.setState({list:e})}))},n.state={list:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){var e=this.state.list;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"List of Items"),e.length?s.a.createElement("div",null,e.map((function(e){return s.a.createElement("div",null,e)}))):s.a.createElement("div",null,s.a.createElement("h2",null,"No List Items Found")))}}]),a}(s.a.Component),w=(a(104),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=function(){return s.a.createElement(u.b,{basename:"/"},s.a.createElement(f.c,null,s.a.createElement(f.a,{exact:!0,path:"/",component:j}),s.a.createElement(f.a,{exact:!0,path:"/chat",component:C}),s.a.createElement(f.a,{exact:!0,path:"/list",component:R})))};return s.a.createElement(f.c,null,s.a.createElement(e,null))}}]),a}(s.a.Component));c.a.render(s.a.createElement(u.a,null,s.a.createElement(w,null)),document.getElementById("root"))},21:function(e,t,a){e.exports=a.p+"static/media/panorama.fee7f301.png"},55:function(e,t,a){e.exports=a(105)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},93:function(e,t){}},[[55,1,2]]]);
//# sourceMappingURL=main.07cb96a2.chunk.js.map