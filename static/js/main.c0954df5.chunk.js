(this["webpackJsonpballoon-clouds-app"]=this["webpackJsonpballoon-clouds-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),c=a.n(r),s=(a(12),a(13),a(3)),i=a(4),l=a(6),m=a(5),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={positionX:0,positionY:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("mousemove",(function(t){return e.setNewPosition(t)}))}},{key:"componentWillMount",value:function(){var e=this;document.addEventListener("mousemove",(function(t){return e.setNewPosition(t)}))}},{key:"setNewPosition",value:function(e){var t=e.clientX,a=e.clientY,n=this.props,o=n.ratioX,r=n.ratioY,c=t-window.innerWidth/2,s=a-window.innerHeight/2;this.setState({positionX:c*-o,positionY:s*-r})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.src,n=this.state,r=n.positionX,c=n.positionY;return o.a.createElement("img",{className:t,src:a,style:{transform:"translate(".concat(r,"px, ").concat(c,"px)")},alt:""})}}]),a}(n.Component),p=function(e){return o.a.createElement("img",{className:e.className,src:e.src,alt:""})};var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"flying-clouds"},o.a.createElement(u,{className:"cloud",src:"/cloud.png",ratioX:"0.35",ratioY:"0.32"}),o.a.createElement(u,{className:"cloud",src:"/cloud.png",ratioX:"0.25",ratioY:"0.21"}),o.a.createElement(u,{className:"cloud",src:"/cloud.png",ratioX:"0.28",ratioY:"0.34"}),o.a.createElement(u,{className:"cloud",src:"/cloud.png",ratioX:"0.52",ratioY:"0.49"}),o.a.createElement(u,{className:"cloud",src:"/cloud.png",ratioX:"0.19",ratioY:"0.63"}),o.a.createElement(u,{className:"cloud",src:"/cloud.png",ratioX:"0.47",ratioY:"0.25"}),o.a.createElement(u,{className:"balloon",src:"/air-balloon-big.png",ratioX:"0.07",ratioY:"0.3"}),o.a.createElement(u,{className:"balloon",src:"/air-balloon-mid.png",ratioX:"0.12",ratioY:"0.4"}),o.a.createElement(u,{className:"balloon",src:"/air-balloon-small.png",ratioX:"0.15",ratioY:"0.5"}),o.a.createElement(p,{className:"mountain-left",src:"/mountain1.png"}),o.a.createElement(p,{className:"mountain-right",src:"/mountain2.png"}),o.a.createElement(p,{className:"sun",src:"/sun.png"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c0954df5.chunk.js.map