(this.webpackJsonptxt=this.webpackJsonptxt||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.e35fa18e.png"},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),i=n.n(r),c=(n(14),n(2)),l=n(3),s=n(1),u=n(5),d=n(4),h=n(8),p=n.n(h),m=(n(15),n(16),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("note-".concat(this.props.id)).focus()}},{key:"goFullscreen",value:function(e){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.getElementById("note-".concat(this.props.id)).parentElement.requestFullscreen()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"note"},a.a.createElement("textarea",{id:"note-".concat(this.props.id),value:this.props.value,onChange:function(t){return e.props.handleChange(e.props.id,t.target.value)}}),a.a.createElement("footer",null,a.a.createElement("button",{className:"icon",title:"Fullscreen",onClick:function(t){return e.goFullscreen(t.element)}},a.a.createElement("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},a.a.createElement("path",{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}),a.a.createElement("path",{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}),a.a.createElement("path",{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}),a.a.createElement("path",{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"})))),0===this.props.value.length&&a.a.createElement("button",{style:{position:"absolute",bottom:"1em",right:"1em",zIndex:100},onClick:function(){return e.props.deleteNote(e.props.id)}},"-"))}}]),n}(a.a.Component)),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={notes:[]},e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.deleteNote=e.deleteNote.bind(Object(s.a)(e)),e.addNote=e.addNote.bind(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"addNote",value:function(){this.setState((function(e){return{notes:e.notes.concat({id:Date.now(),value:""})}}))}},{key:"handleChange",value:function(e,t){this.setState((function(n){return{notes:n.notes.map((function(n){return n.id===e&&(n.value=t),n}))}}))}},{key:"deleteNote",value:function(e){this.setState((function(t){return{notes:t.notes.filter((function(t){return t.id!==e}))}}))}},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("react-notes"));this.setState(e||{notes:[{id:1,value:""}]})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("react-notes",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this,t=this.state.notes.map((function(t){return a.a.createElement(m,{key:t.id,id:t.id,value:t.value,handleChange:e.handleChange,deleteNote:e.deleteNote})}));return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("a",{href:"https://github.com/thutterer/txt/"},a.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}))),a.a.createElement("main",null,t),a.a.createElement("br",null),a.a.createElement("button",{className:"addBtn",onClick:this.addNote},"+"))}}]),n}(a.a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/txt",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/txt","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.5236da86.chunk.js.map