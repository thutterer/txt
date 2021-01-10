(this.webpackJsonptxt=this.webpackJsonptxt||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(17),n(18),n(3)),l=n(5),s=n(4),d=(n(19),n(8)),u=n(9),p=n(11),h=n(10);n(20),n(21);function v(e){var t=Object(a.useRef)(),n=Object(a.useState)(0===e.title.length),r=Object(i.a)(n,2),c=r[0],l=r[1];return o.a.createElement("div",{className:"task",id:"task-".concat(e.id)},o.a.createElement("input",{type:"checkbox",id:"checkbox-".concat(e.id),checked:e.checked,onChange:e.toggleTask}),o.a.createElement("label",{htmlFor:"checkbox-".concat(e.id),style:{display:c?"none":"inline-block"}},e.title),o.a.createElement("input",{type:"text",ref:t,value:e.title,onChange:function(t){return e.changeTask(t.target.value)},onKeyUp:function(e){13===e.keyCode&&e.target.value&&l(!1)},placeholder:"new task",style:{display:c?"inline-block":"none"}}),c&&o.a.createElement("input",{type:"date",value:e.date,onChange:function(t){return e.changeDate(t.target.value)}}),c||o.a.createElement("span",null,e.date),!e.checked&&o.a.createElement("button",{className:"icon",onClick:function(){l(!c),c||window.setTimeout((function(){return t.current.focus()}),100)}},c||o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})),c&&o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}))),e.checked&&o.a.createElement("button",{className:"icon",title:"Delete task",onClick:e.deleteTask},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))))}var f=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).textarea=o.a.createRef(),a.colorInput=o.a.createRef(),a}return Object(u.a)(n,[{key:"goFullscreen",value:function(e){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():this.textarea.current.parentElement.requestFullscreen()}},{key:"createAndEditNewTask",value:function(){var e=this;this.props.dispatch({type:"addTaskToNote",payload:{id:this.props.id}}),window.setTimeout((function(){var t=e.props.tasks[e.props.tasks.length-1].id;document.querySelector("#task-".concat(t," input[type=text]")).focus()}),50)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"note",style:{borderBottom:"4px solid ".concat(this.props.color||"transparent")}},o.a.createElement("input",{ref:this.colorInput,type:"color",onChange:function(t){return e.props.dispatch({type:"colorize",payload:{id:e.props.id,color:t.target.value}})},style:{display:"none"}}),o.a.createElement("textarea",{ref:this.textarea,value:this.props.value,onChange:function(t){return e.props.dispatch({type:"changeNote",payload:{id:e.props.id,value:t.target.value}})}}),o.a.createElement("ul",null,this.props.tasks&&this.props.tasks.map((function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(v,{id:t.id,checked:t.checked,title:t.title,date:t.date,toggleTask:function(){return e.props.dispatch({type:"toggleTask",payload:{id:e.props.id,taskId:t.id}})},changeTask:function(n){return e.props.dispatch({type:"changeTask",payload:{id:e.props.id,taskId:t.id,value:n}})},deleteTask:function(){return e.props.dispatch({type:"deleteTask",payload:{id:e.props.id,taskId:t.id}})},changeDate:function(n){return e.props.dispatch({type:"changeDate",payload:{id:e.props.id,taskId:t.id,value:n}})}}))}))),o.a.createElement("footer",null,o.a.createElement("button",{className:"icon",title:"Colorize",onClick:function(){return e.colorInput.current.click()}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"}))),o.a.createElement("button",{className:"icon",title:"Fullscreen",onClick:function(t){return e.goFullscreen(t.element)}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}))),o.a.createElement("button",{className:"icon",title:"Add a task",onClick:function(){return e.createAndEditNewTask()}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"}))),0===this.props.value.length&&(!this.props.tasks||0===this.props.tasks.length)&&o.a.createElement("button",{title:"Delete permanently",className:"icon",onClick:function(){return e.props.dispatch({type:"deleteNote",payload:{id:e.props.id}})}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"})))))}}]),n}(o.a.Component);function m(){return JSON.parse(localStorage.getItem("react-notes"))||{notes:[]}}function g(e,t){switch(t.type){case"addNote":return{notes:[].concat(Object(s.a)(e.notes),[{id:Date.now(),value:"",color:"transparent",tasks:[]}])};case"changeNote":return{notes:e.notes.map((function(e){return e.id===t.payload.id&&(e.value=t.payload.value),e}))};case"deleteNote":return{notes:e.notes.filter((function(e){return e.id!==t.payload.id}))};case"addTaskToNote":return{notes:e.notes.map((function(e){if(e.id===t.payload.id){var n={id:Date.now(),checked:!1,title:"",date:void 0};return Object(l.a)(Object(l.a)({},e),{},{tasks:[].concat(Object(s.a)(e.tasks),[n])})}return e}))};case"toggleTask":return{notes:e.notes.map((function(e){if(e.id===t.payload.id){var n=JSON.parse(JSON.stringify(e));return n.tasks=n.tasks.map((function(e){return e.id===t.payload.taskId&&(e.checked=!e.checked),e})),n}return e}))};case"changeTask":return{notes:e.notes.map((function(e){if(e.id===t.payload.id){var n=JSON.parse(JSON.stringify(e));return n.tasks=n.tasks.map((function(e){return e.id===t.payload.taskId&&(e.title=t.payload.value),e})),n}return e}))};case"deleteTask":return{notes:e.notes.map((function(e){if(e.id===t.payload.id){var n=JSON.parse(JSON.stringify(e));return n.tasks=n.tasks.filter((function(e){return e.id!==t.payload.taskId})),n}return e}))};case"changeDate":return{notes:e.notes.map((function(e){if(e.id===t.payload.id){var n=JSON.parse(JSON.stringify(e));return n.tasks=n.tasks.map((function(e){return e.id===t.payload.taskId&&(e.date=t.payload.value),e})),n}return e}))};case"colorize":return{notes:e.notes.map((function(e){return e.id===t.payload.id&&(e.color=t.payload.color),e}))};default:return console.log("Unknown action type",t.type),e}}function k(){var e=Object(a.useReducer)(g,{notes:[]},m),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){localStorage.setItem("react-notes",JSON.stringify(n))})),o.a.createElement(o.a.Fragment,null,n.notes.map((function(e){return o.a.createElement(f,Object.assign({key:e.id},e,{dispatch:r}))})),o.a.createElement("button",{autoFocus:!0,className:"addBtn",onClick:function(){return r({type:"addNote"}),void window.setTimeout((function(){document.querySelector(".note:last-of-type textarea").focus()}),50)}},"+"))}function w(){return o.a.createElement("div",{className:"App"},o.a.createElement("main",null,o.a.createElement(k,null)))}var y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/txt",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/txt","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}],[[12,1,2]]]);
//# sourceMappingURL=main.38b5134b.chunk.js.map