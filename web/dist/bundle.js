!function(e){function n(n){for(var r,o,s=n[0],l=n[1],c=n[2],u=0,p=[];u<s.length;u++)o=s[u],a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(d&&d(n);p.length;)p.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,s=1;s<t.length;s++){var l=t[s];0!==a[l]&&(r=!1)}r&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={1:0},i=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var d=l;i.push([26,0]),t()}([,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var a="https://us-central1-hyperapp-46652.cloudfunctions.net/api";window.location.host.includes("localhost")&&(a="http://localhost:5000/hyperapp-46652/us-central1/api/");var i=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiUrl=n,this.firebaseUrl=t}return r(e,[{key:"recommendations",value:function(){return fetch(this.apiUrl+"/recommendations/").then(function(e){return e.json()})}},{key:"addClientBrowserId",value:function(e){return fetch(this.firebaseUrl+"/clients",{body:JSON.stringify(e),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})}},{key:"orders",value:function(e){return fetch(this.apiUrl+"/orders",{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()})}},{key:"menuItems",get:function(){return fetch(this.apiUrl+"/menu/all",{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}}]),e}();n.default=new i("http://172.16.120.130:8080",a)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=s(t(17)),i=s(t(16)),o=s(t(4));s(t(15));function s(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return{state:{sideNavVisible:!1,menuItems:[],selected:{day:null,type:null},days:[{name:"Monday",plan:[{type:"BREAKFAST",items:[{id:1,name:"Item 1",image:"//via.placeholder.com/50X50"},{id:2,name:"Item 2",image:"//via.placeholder.com/50X50"}]},{type:"LUNCH",items:[]},{type:"SNACKS",items:[]},{type:"DINNER",items:[]}]},{name:"Tuesday",plan:[{type:"BREAKFAST",items:[]},{type:"LUNCH",items:[]},{type:"MY_FAV",items:[]}]}],recommendations:{BREAKFAST:[],LUNCH:[],MY_FAV:[]}},actions:{fetchMenuItems:function(e){return function(e,n){return o.default.menuItems.then(n.assignMenuItems.bind(n))}},assignMenuItems:function(e){return function(n){return{menuItems:e}}},toggleSideNav:function(e){return function(n){if(e.target.dataset&&"toggle"===e.target.dataset.action)return{sideNavVisible:!n.sideNavVisible}}},onSelect:function(e){return function(n){return console.log("[selecting]",e),{selected:{day:e.day,type:e.type},sideNavVisible:!n.sideNavVisible}}}},view:function(e){return function(e,n){var t=e.planner,o=n.planner;return(0,r.h)("div",{className:"planner-container",oncreate:o.fetchMenuItems},(0,r.h)("div",{className:"week"},(0,r.h)("div",{className:"days"},t.days.map(function(e){return(0,r.h)(a.default,{day:e,onSelect:o.onSelect})}))),(0,r.h)(i.default,{items:t.menuItems,selected:t.selected,show:t.sideNavVisible,toggleSideNav:o.toggleSideNav.bind(o)}))}}}}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"body{font-family:Noto Sans,sans-serif;margin:0}.container{padding-left:60px;padding-right:60px}a{text-decoration:none;color:#000}table td,table th{border:1px solid #eee}table td{padding:4px}",""])},function(e,n,t){var r=t(6);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"",""])},function(e,n,t){var r=t(8);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=(i(t(9)),i(t(4)));function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return{state:{orders:[],latestOrder:null},actions:{fetchOrder:function(e){return function(n,t){return a.default.orders(e.id).then(function(n){return t.assignOrders({id:e.id,orders:n})})}},assignOrders:function(e){var n=e.id,t=e.orders;return function(e){return{orders:[].concat(t),latestOrder:n?t.filter(function(e){return e.id==n}):null}}}},view:function(e){return function(n,t){var a=n.orders,i=t.orders;return(0,r.h)("div",{className:"orders",oncreate:i.fetchOrder.bind(i,e.match.params)},a.orders.map(function(e){return(0,r.h)("div",null,(0,r.h)("div",{className:"restaurant"},e.foodType," from ",e.restaurant),(0,r.h)("div",{className:"orderedFor"},"For ",e.username),(0,r.h)("div",{className:"deliverOn"},"Delivered on ",e.deliverOn),(0,r.h)("div",{className:"note"},"Notes: ",e.note))}))}}}}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".home{padding:0 70px;margin-top:16px}",""])},function(e,n,t){var r=t(11);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0);a(t(12));function a(e){return e&&e.__esModule?e:{default:e}}var i=(0,a(t(5)).default)();n.default=function(e){return{state:{},actions:{},view:function(e){return function(e,n){e.home,n.home;return(0,r.h)("div",{className:"home"},(0,r.h)(i.view,null))}}}}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'.planner-container .week .days .day .day-name{font-weight:500;padding:4px 0;border-bottom:1px solid #eee}.planner-container .week .days .day .plans{padding-top:8px;display:flex;justify-items:start;flex-wrap:wrap}.planner-container .week .days .day .plans .plan{transition:all .5s;position:relative;min-height:100px;cursor:pointer;padding:8px;border:1px solid #eee;padding:10px;flex:22%;margin:8px}.planner-container .week .days .day .plans .plan .plan-name{font-size:12px}.planner-container .week .days .day .plans .plan .plan-items{display:flex;padding:8px 0}.planner-container .week .days .day .plans .plan .plan-items .plan-item{margin-right:4px}.planner-container .week .days .day .plans .plan .plan-items .plan-item .plan-item-name{font-size:8px}.planner-container .week .days .day .plans .plan:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.planner-container .week .days .day .plans .plan .add-button{width:100%;height:100%}.planner-container .week .days .day .plans .plan .add-button:after{content:"+";font-size:100px;position:absolute;top:0;left:50%;right:0;margin-left:-30px;color:#eee}.planner-container .sidenav-container{transition:.5s;background-color:transparent}.planner-container .sidenav-container.open{background-color:rgba(0,0,0,.5);width:100%;height:100%;position:absolute;top:0;left:0}.planner-container .sidenav-container.open .sidenav{width:400px}.planner-container .sidenav-container .no-items{text-align:center}.planner-container .sidenav-container .sidenav{height:100%;width:0;position:fixed;z-index:1;top:0;right:0;background-color:#eee;overflow-x:hidden;transition:.5s;//:30px}.planner-container .sidenav-container .sidenav .heading{//:#f1f1f1;border-bottom:1px solid #aaa;margin-top:8px;padding:8px}.planner-container .sidenav-container .sidenav .list-items{padding:0;display:flex;list-style:none;justify-content:start;align-items:center;flex-wrap:wrap}.planner-container .sidenav-container .sidenav .list-items .list-item{flex:46%;display:flex;justify-content:center;padding:8px}.planner-container .sidenav-container .sidenav .closebtn{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px}',""])},function(e,n,t){var r=t(14);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0);n.default=function(e){var n=e.items,t=e.selected,a=e.toggleSideNav,i=e.show;return(0,r.h)("div",{className:"sidenav-container "+(i?"open":""),onclick:a,"data-action":"toggle"},(0,r.h)("div",{id:"mySidenav",className:"sidenav"},(0,r.h)("div",{className:"heading"},(0,r.h)("span",null,"Select ",t.type," for ",t.day),(0,r.h)("a",{href:"javascript:void(0)",class:"closebtn","data-action":"toggle"},"×")),(0,r.h)("div",{className:"list"},n&&n.length?(0,r.h)("ul",{className:"list-items"},n.map(function(e){return(0,r.h)("li",{className:"list-item"},(0,r.h)("div",null,e.name))})):(0,r.h)("div",{className:"no-items"},"No Items"))))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0);n.default=function(e){var n=e.day,t=e.onSelect;return(0,r.h)("div",{className:"day",key:n.name},(0,r.h)("div",{className:"day-name"},n.name),(0,r.h)("div",{className:"plans"},n.plan.map(function(e){return(0,r.h)("div",{className:"plan",key:e.type},(0,r.h)("div",{className:"plan-name"},e.type),e.items&&e.items.length?(0,r.h)("div",{className:"plan-items"},e.items.map(function(e){return(0,r.h)("div",{className:"plan-item",key:e.id},(0,r.h)("img",{src:e.image,alt:e.name}),(0,r.h)("div",{className:"plan-item-name"},e.name))})):(0,r.h)("div",{className:"add-button",onclick:t.bind(null,{day:n.name,type:e.type}),"data-action":"toggle"}))})))}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".footer-container{margin:16px 8px}.footer-container .footer{display:flex;justify-content:center;flex-direction:column}.footer-container .footer .footer-heading{align-self:center}.footer-container .footer .footer-links{display:flex;list-style:none;align-self:center;margin:0;padding:0}.footer-container .footer .footer-links .footer-link{margin:0 4px;padding:8px}.footer-container .footer .footer-links .footer-link a{text-decoration:none;color:#000}",""])},function(e,n,t){var r=t(18);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=t(0),i=t(19);(r=i)&&r.__esModule;n.default=function(e){return{state:{},actions:{},view:function(e){return function(e,n){return(0,a.h)("div",{className:"footer-container"},(0,a.h)("div",{className:"footer"},(0,a.h)("div",{className:"footer-heading"},(0,a.h)("strong",null,"Connect with us!")),(0,a.h)("ul",{className:"footer-links"},(0,a.h)("li",{className:"footer-link"},(0,a.h)("a",{target:"_blank",href:"http://dentalvidya.learnyst.com/"},"Test Series")),(0,a.h)("li",{className:"footer-link"},(0,a.h)("a",{target:"_blank",href:"https://www.facebook.com/DentalVidya/"},"Facebook")),(0,a.h)("li",{className:"footer-link"},"whatsapp: +91 8847408561"))))}}}}},,function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".header{//:#f5f5f5;font-size:16px;display:flex;justify-content:space-between}.header .header-logo{//:inline-block;font-size:16px;margin:8px}.header .header-links{list-style:none!important;margin:0;padding:0}.header .header-links .header-link{transition:all .2s;display:inline-block;text-decoration:none;padding:8px 16px;border-bottom:1px solid transparent}.header .header-links .header-link .header-link-text{transition:all .2s;color:#000}.header .header-links .header-link.selected{border-bottom:1px solid #000}.header .header-links .header-link.selected .header-link-text{color:#000;font-weight:700}.header .header-links .header-link:hover .header-link-text{font-weight:700}",""])},function(e,n,t){var r=t(22);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=t(0),i=t(3),o=t(23);(r=o)&&r.__esModule;n.default=function(e){return{state:{headerLinks:[{text:"Orders",to:"/orders",selected:!1},{text:"Plan My Subscription",to:"/",selected:!1}]},actions:{selectTab:function(e){return function(n){return{headerLinks:n.headerLinks.map(function(n){return n.to===e?Object.assign({},n,{selected:!0}):Object.assign({},n,{selected:!1})})}}}},view:function(e){return function(e,n){var t=e.header,r=e.location,o=n.header;return(0,a.h)("div",{class:"header container",oncreate:o.selectTab.bind(o,r.pathname)},(0,a.h)("div",{className:"header-logo"},(0,a.h)("a",{href:"/",className:"text"},"DBC")),(0,a.h)("ul",{class:"header-links"},t.headerLinks.map(function(e){return(0,a.h)(i.Link,{to:e.to,class:e.selected?"header-link selected":"header-link",onclick:o.selectTab.bind(o,e.to)},(0,a.h)("li",{class:"header-link-text"},e.text))})))}}}}},function(e,n,t){"use strict";var r,a=t(4),i=(r=a)&&r.__esModule?r:{default:r};"serviceWorker"in window.navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){e.update(),console.log("ServiceWorker registration successful with scope: ",e.scope),e.pushManager.getSubscription().then(function(n){return!(null===n)?console.log("[Service Worker] User is already subscribed."):e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){for(var n=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),t=window.atob(n),r=new Uint8Array(t.length),a=0;a<t.length;++a)r[a]=t.charCodeAt(a);return r}("BEfr-TQE853v_Cp9Vz5YZlTHJ9wzeSWT2e9mkYTcsPYgaCIoXvSUyrTYETtzRlxKTwtEWrp85K5ajCdO66ved8c")}).then(function(e){i.default.addClientBrowserId(e).then(function(e){console.log("[Service Worker] User is subscribed.")}).catch(function(e){console.error("[Service Worker] Error savinf id",e.message)})}).catch(function(e){console.log("Failed to subscribe the user: ",e)})})}).catch(function(e){return console.log("Error registering ServiceWorker",e.message)})})},function(e,n,t){"use strict";var r=t(0),a=t(3),i=(d(t(25)),d(t(24))),o=d(t(20)),s=d(t(5)),l=d(t(13)),c=d(t(10));d(t(7));function d(e){return e&&e.__esModule?e:{default:e}}var u={Header:(0,i.default)(),Home:(0,l.default)(),Footer:(0,o.default)(),Planner:(0,s.default)(),Orders:(0,c.default)()},p={state:{location:a.location.state,header:u.Header.state,home:u.Home.state,planner:u.Planner.state,orders:u.Orders.state},actions:{location:a.location.actions,header:u.Header.actions,home:u.Home.actions,planner:u.Planner.actions,orders:u.Orders.actions},view:function(e,n){var t=u.Header.view,i=u.Home.view,s=u.Orders.view;return(0,r.h)("main",null,(0,r.h)(t,null),(0,r.h)(a.Switch,null,(0,r.h)(a.Route,{path:"/",render:i}),(0,r.h)(a.Route,{path:"/orders/:id",render:s}),(0,r.h)(a.Route,{path:"/orders",render:s})),(0,r.h)(o.default,null))}},f=document.getElementById("app"),h=(0,r.app)(p.state,p.actions,p.view,f);a.location.subscribe(h.location)}]);