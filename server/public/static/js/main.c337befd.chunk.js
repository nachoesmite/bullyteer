(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(99)},67:function(e,t,n){},96:function(e,t){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),o=n.n(c),i=n(36),s=n(37),u=n(40),l=n(38),p=n(41),d=n(4),f=n.n(d),m=n(16),h=n(39),v=n.n(h),b=(n(67),function(){var e=Object(m.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="/".concat(t),e.next=4,v.a.get(a);case 4:n=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={authors:{}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=Object(m.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("list");case 2:t=e.sent,this.setState({authors:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleOnClick",value:function(e){return b(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app-container"},r.a.createElement("header",{className:"globalHeader",role:"banner"},r.a.createElement("div",{className:"Banner"},r.a.createElement("h2",null,"Bullyteer!"))),Object.keys(this.state.authors).map(function(t){return r.a.createElement("div",{key:t,className:"author-row"},r.a.createElement("div",{className:"author-title"},t),r.a.createElement("div",{className:"sounds-list"},e.state.authors[t].map(function(n){return r.a.createElement("button",{onClick:function(){return e.handleOnClick("".concat(t,"/").concat(n))},key:n,className:"sound-item"},n)})))}))}}]),t}(a.Component);console.log("env",Object({NODE_ENV:"production",PUBLIC_URL:""}).SERVER_PORT);var E=n(70).connect("/"),N=new Audio;E.on("messages",function(e,t){N.pause(),N.currentTime=0,function(e,t){N=new Audio(e),"Notification"in window?"granted"===Notification.permission?(new Notification(t),N.play()):"denied"!==Notification.permission&&Notification.requestPermission(function(e){"granted"===e&&(new Notification(t),N.play())}):alert("This browser does not support desktop notification")}(e,t)}),o.a.render(r.a.createElement(w,{serverPort:Object({NODE_ENV:"production",PUBLIC_URL:""}).SERVER_PORT}),document.getElementById("root"))}},[[42,2,1]]]);
//# sourceMappingURL=main.c337befd.chunk.js.map