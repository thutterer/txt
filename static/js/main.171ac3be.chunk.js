(this.webpackJsonptxt=this.webpackJsonptxt||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.e35fa18e.png"},,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(15),n(2)),l=n(3),s=n(1),u=n(5),h=n(4),d=n(8),p=n.n(d),v=(n(16),n(17),n(9));n(18);function f(e){var t=Object(a.useRef)(),n=Object(a.useState)(0===e.title.length),r=Object(v.a)(n,2),i=r[0],c=r[1];return o.a.createElement("div",{className:"task"},o.a.createElement("input",{type:"checkbox",id:"checkbox-".concat(e.id),checked:e.checked,onChange:e.toggleTask}),o.a.createElement("label",{htmlFor:"checkbox-".concat(e.id),style:{display:i?"none":"inline-block"}},e.title),o.a.createElement("input",{type:"text",ref:t,value:e.title,onChange:function(t){return e.changeTask(t.target.value)},onKeyUp:function(e){13===e.keyCode&&c(!1)},onBlur:function(){return c(!1)},placeholder:"new task",style:{display:i?"inline-block":"none"}}),!e.checked&&o.a.createElement("button",{className:"icon",onClick:function(){c(!i),i||window.setTimeout((function(){return t.current.focus()}),100)}},i||o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})),i&&o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}))),e.checked&&o.a.createElement("button",{className:"icon",title:"Delete task",onClick:e.deleteTask},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))))}var m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).textarea=o.a.createRef(),a.colorInput=o.a.createRef(),a}return Object(l.a)(n,[{key:"goFullscreen",value:function(e){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():this.textarea.parentElement.requestFullscreen()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"note",style:{borderBottom:"4px solid ".concat(this.props.color||"transparent")}},o.a.createElement("input",{ref:this.colorInput,type:"color",onChange:function(t){return e.props.colorize(e.props.id,t.target.value)},style:{display:"none"}}),o.a.createElement("textarea",{ref:this.textarea,value:this.props.value,onChange:function(t){return e.props.handleChange(e.props.id,t.target.value)}}),o.a.createElement("ul",null,this.props.tasks&&this.props.tasks.map((function(t){return o.a.createElement("li",null,o.a.createElement(f,{key:t.id,id:t.id,checked:t.checked,title:t.title,toggleTask:function(){return e.props.toggleTask(e.props.id,t.id)},changeTask:function(n){return e.props.changeTask(e.props.id,t.id,n)},deleteTask:function(){return e.props.deleteTask(e.props.id,t.id)}}))}))),o.a.createElement("footer",null,o.a.createElement("button",{className:"icon",title:"Colorize",onClick:function(){return e.colorInput.current.click()}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"}))),o.a.createElement("button",{className:"icon",title:"Fullscreen",onClick:function(t){return e.goFullscreen(t.element)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}))),o.a.createElement("button",{className:"icon",title:"Add a task",onClick:function(t){return e.props.addTask(e.props.id)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"}))),0===this.props.value.length&&(!this.props.tasks||0===this.props.tasks.length)&&o.a.createElement("button",{title:"Delete permanently",className:"icon",onClick:function(){return e.props.deleteNote(e.props.id)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"})))))}}]),n}(o.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={notes:[]},e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.deleteNote=e.deleteNote.bind(Object(s.a)(e)),e.addNote=e.addNote.bind(Object(s.a)(e)),e.addTask=e.addTask.bind(Object(s.a)(e)),e.toggleTask=e.toggleTask.bind(Object(s.a)(e)),e.changeTask=e.changeTask.bind(Object(s.a)(e)),e.deleteTask=e.deleteTask.bind(Object(s.a)(e)),e.colorize=e.colorize.bind(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"addNote",value:function(){this.setState((function(e){return{notes:e.notes.concat({id:Date.now(),value:"",color:"transparent",tasks:[]})}}))}},{key:"handleChange",value:function(e,t){this.setState((function(n){return{notes:n.notes.map((function(n){return n.id===e&&(n.value=t),n}))}}))}},{key:"deleteNote",value:function(e){this.setState((function(t){return{notes:t.notes.filter((function(t){return t.id!==e}))}}))}},{key:"addTask",value:function(e){var t=Date.now();this.setState((function(n){return{notes:n.notes.map((function(n){if(n.id===e){var a=JSON.parse(JSON.stringify(n)),o={id:t,checked:!1,title:""};return a.tasks||(a.tasks=[]),a.tasks.push(o),a}return n}))}}))}},{key:"toggleTask",value:function(e,t){this.setState((function(n){return{notes:n.notes.map((function(n){if(n.id===e){var a=JSON.parse(JSON.stringify(n));return a.tasks=a.tasks.map((function(e){return e.id===t&&(e.checked=!e.checked),e})),a}return n}))}}))}},{key:"changeTask",value:function(e,t,n){this.setState((function(a){return{notes:a.notes.map((function(a){if(a.id===e){var o=JSON.parse(JSON.stringify(a));return o.tasks=o.tasks.map((function(e){return e.id===t&&(e.title=n),e})),o}return a}))}}))}},{key:"deleteTask",value:function(e,t){this.setState((function(n){return{notes:n.notes.map((function(n){if(n.id===e){var a=JSON.parse(JSON.stringify(n));return a.tasks=a.tasks.filter((function(e){return e.id!==t})),a}return n}))}}))}},{key:"colorize",value:function(e,t){console.log(e,t),this.setState((function(n){return{notes:n.notes.map((function(n){return n.id===e&&(n.color=t),n}))}}))}},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("react-notes"));this.setState(e||{notes:[{id:1,value:""}]})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("react-notes",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("a",{href:"https://github.com/thutterer/txt/"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),o.a.createElement("button",{className:"addBtn",onClick:this.addNote},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))),o.a.createElement("main",null,this.state.notes.map((function(t){return o.a.createElement(m,Object.assign({key:t.id},t,{handleChange:e.handleChange,deleteNote:e.deleteNote,addTask:e.addTask,toggleTask:e.toggleTask,changeTask:e.changeTask,deleteTask:e.deleteTask,colorize:e.colorize}))}))))}}]),n}(o.a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/txt",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/txt","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.171ac3be.chunk.js.map