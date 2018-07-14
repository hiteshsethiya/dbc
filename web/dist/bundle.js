!function(e){function n(n){for(var a,o,s=n[0],l=n[1],d=n[2],u=0,p=[];u<s.length;u++)o=s[u],r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(c&&c(n);p.length;)p.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,s=1;s<t.length;s++){var l=t[s];0!==r[l]&&(a=!1)}a&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},r={1:0},i=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var c=l;i.push([26,0]),t()}([,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();var r="https://us-central1-hyperapp-46652.cloudfunctions.net/api";window.location.host.includes("localhost")&&(r="http://localhost:5000/hyperapp-46652/us-central1/api/");var i=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiUrl=n,this.firebaseUrl=t}return a(e,[{key:"createPlan",value:function(e){return fetch(this.apiUrl+"/plan/week/",{body:JSON.stringify(e),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})}},{key:"fetchPlanner",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";return fetch(this.apiUrl+"/plan/week/"+e).then(function(e){return e.json()})}},{key:"recommendations",value:function(){return fetch(this.apiUrl+"/recommendations/").then(function(e){return e.json()})}},{key:"addClientBrowserId",value:function(e){return fetch(this.firebaseUrl+"/clients",{body:JSON.stringify(e),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})}},{key:"orders",value:function(e){return fetch(this.apiUrl+"/orders",{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()})}},{key:"menuItems",get:function(){return fetch(this.apiUrl+"/menu/all",{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}}]),e}();n.default=new i("http://172.16.120.140:8080",r)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=s(t(17)),i=s(t(16)),o=s(t(4));s(t(15));function s(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return{state:{sideNavVisible:!1,menuItems:[],selected:{day:null,type:null,items:[]},dayPlans:[{day:"MONDAY",plans:[{mealType:"BREAKFAST",itemIds:[],menuItems:[]},{mealType:"LUNCH",itemIds:[],menuItems:[]}]}]},actions:{fetchMenuItems:function(e){return function(e,n){return o.default.menuItems.then(n.assignMenuItems.bind(n))}},assignMenuItems:function(e){return function(n){return{menuItems:e}}},toggleSideNav:function(e){return function(n){if(e.target.dataset&&"toggle"===e.target.dataset.action)return{sideNavVisible:!n.sideNavVisible}}},onSelect:function(e){return function(n){return console.log("[selecting]",e),{selected:{day:e.day,type:e.type,items:[]},sideNavVisible:!n.sideNavVisible}}},onMenuItemSelect:function(e){return function(n){console.log("[menu item] add",e.itemId);var t=n.selected.items;return t.includes(e.itemId)?t=t.filter(function(n){return n!==e.itemId}):t.push(e.itemId),{selected:Object.assign({},n.selected,{items:t})}}},addToPlan:function(e){return function(e,n){var t=e.selected,a={swiggyCustomerId:"1",dayPlans:[{day:t.day,plans:[{mealType:t.type,itemIds:t.items}]}]};return o.default.createPlan(a).then(n.fetchPlanner.bind(n)).then(n.onSelect.bind(n))}},assignPlanner:function(e){var n=e.dayPlans;return function(e){return{dayPlans:n}}},fetchPlanner:function(e){return function(e,n){return o.default.fetchPlanner().then(n.assignPlanner.bind(n))}},init:function(e){return function(e,n){n.fetchMenuItems(),n.fetchPlanner()}}},view:function(e){return function(e,n){var t=e.planner,o=n.planner;return(0,a.h)("div",{className:"planner-container",oncreate:o.init},(0,a.h)("div",{className:"week"},(0,a.h)("div",{className:"days"},t.dayPlans.map(function(e){return(0,a.h)(r.default,{day:e,onSelect:o.onSelect})}))),(0,a.h)(i.default,{items:t.menuItems,selected:t.selected,show:t.sideNavVisible,onSelect:o.onMenuItemSelect,addToPlan:o.addToPlan,toggleSideNav:o.toggleSideNav.bind(o)}))}}}}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"body{font-family:Noto Sans,sans-serif;margin:0}.container{padding-left:60px;padding-right:60px}a{text-decoration:none;color:#000}table td,table th{border:1px solid #eee}table td{padding:4px}",""])},function(e,n,t){var a=t(6);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".orders{padding:0 70px;position:relative}.orders .order{padding:16px 8px;border:1px solid #eee;margin:16px 0}.orders .order .small{font-size:12px}.orders .order .note .note-field{background-color:#eee;padding:8px 16px;display:inline-block;width:90%;border-radius:5px}.orders .order .plan-items{display:flex;padding:8px 0}.orders .order .plan-items .plan-item{margin-right:4px}.orders .order .plan-items .plan-item .plan-item-name{font-size:8px}.orders .latest-order{position:fixed;top:50px;right:50px;//:16px;width:400px;z-index:100;background-color:#eee;border:1px solid #fff;border-radius:5px}.orders .latest-order .order{padding:8px}",""])},function(e,n,t){var a=t(8);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=(t(3),i(t(9)),i(t(4)));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var n=new Date(e),t=n.getUTCMonth()+1;return n.getUTCDate()+"/"+t+"/"+n.getUTCFullYear()};n.default=function(e){return{state:{orders:[],ordersToDisplay:[],latestOrder:null},actions:{fetchOrder:function(e){return function(n,t){var a=e.id?e.id:null;return r.default.orders(a).then(function(e){return t.assignOrders({id:a,orders:e})})}},assignOrders:function(e){var n=e.id,t=e.orders;return function(e){var a=void 0!==n?t.filter(function(e){return e.id!=n}):t;return{orders:t,ordersToDisplay:a,latestOrder:n?t.find(function(e){return e.id==n}):null}}},disappear:function(e){return function(n,t){setTimeout(function(){e.go("/orders"),t.assignOrders({id:null,ordersToDisplay:n.orders})},12e3)}}},view:function(e){return function(n,t){var r=n.orders,i=t.orders,s=t.location,l=e.match.params?e.match.params.id:null,d=r.latestOrder;return(0,a.h)("div",{className:"orders",key:"demo",oncreate:i.fetchOrder.bind(i,{id:l})},r.ordersToDisplay.length?r.ordersToDisplay.map(function(e){return(0,a.h)("div",{className:"order",key:e.id},(0,a.h)("div",{className:"restaurant"},e.foodType," ",(0,a.h)("span",{className:"small"}," from")," ",e.restaurant),(0,a.h)("div",{className:"orderedFor"},(0,a.h)("span",{className:"small"}," For "),e.username),(0,a.h)("div",{className:"deliverOn"},(0,a.h)("span",{className:"small"}," Delivered on ")," ",o(e.deliverOn)),(0,a.h)("div",{className:"note"},(0,a.h)("span",{className:"small"}," Notes: "),e.note?(0,a.h)("div",{className:"note-field"},e.note):null),(0,a.h)("div",{className:"plan-items"},e.items.map(function(e){return(0,a.h)("div",{className:"plan-item",key:e.id},(0,a.h)("img",{src:"//via.placeholder.com/50x50",alt:e.id}),(0,a.h)("div",{className:"plan-item-name"},e.name))})))}):null,d?(0,a.h)("div",{className:"latest-order",key:d.id,oncreate:i.disappear.bind(i,s)},(0,a.h)("div",{className:"order",key:d.id},(0,a.h)("div",{className:"restaurant"},d.foodType," ",(0,a.h)("span",{className:"small"}," from")," ",d.restaurant),(0,a.h)("div",{className:"orderedFor"},(0,a.h)("span",{className:"small"}," For "),d.username),(0,a.h)("div",{className:"deliverOn"},(0,a.h)("span",{className:"small"}," Delivered on ")," ",o(d.deliverOn)),(0,a.h)("div",{className:"note"},(0,a.h)("span",{className:"small"}," Notes: "),d.note?(0,a.h)("div",{className:"note-field"},d.note):null))):null)}}}}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".home{padding:0 70px;margin-top:16px}",""])},function(e,n,t){var a=t(11);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0);r(t(12));function r(e){return e&&e.__esModule?e:{default:e}}var i=(0,r(t(5)).default)();n.default=function(e){return{state:{},actions:{},view:function(e){return function(e,n){e.home,n.home;return(0,a.h)("div",{className:"home"},(0,a.h)(i.view,null))}}}}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'.planner-container .week .days .day .day-name{font-weight:500;padding:4px 0;border-bottom:1px solid #eee}.planner-container .week .days .day .plans{padding-top:8px;display:flex;justify-items:start;flex-wrap:wrap}.planner-container .week .days .day .plans .plan{transition:all .5s;position:relative;min-height:100px;cursor:pointer;padding:8px;border:1px solid #eee;padding:10px;flex:22%;flex-grow:0;margin:8px}.planner-container .week .days .day .plans .plan .plan-name{font-size:12px}.planner-container .week .days .day .plans .plan .plan-items{display:flex;padding:8px 0}.planner-container .week .days .day .plans .plan .plan-items .plan-item{margin-right:4px}.planner-container .week .days .day .plans .plan .plan-items .plan-item .plan-item-name{font-size:8px}.planner-container .week .days .day .plans .plan:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.planner-container .week .days .day .plans .plan .add-button{width:100%;height:100%}.planner-container .week .days .day .plans .plan .add-button:after{content:"+";font-size:100px;position:absolute;top:0;left:50%;right:0;margin-left:-30px;color:#eee}.planner-container .sidenav-container{transition:.5s;background-color:transparent}.planner-container .sidenav-container.open{background-color:rgba(0,0,0,.5);width:100%;height:100%;position:absolute;top:0;left:0}.planner-container .sidenav-container.open .sidenav{width:400px}.planner-container .sidenav-container .no-items{text-align:center}.planner-container .sidenav-container .sidenav{height:100%;width:0;position:fixed;z-index:1;top:0;right:0;background-color:#eee;overflow-x:hidden;transition:.5s;//:30px}.planner-container .sidenav-container .sidenav .footer{position:relative}.planner-container .sidenav-container .sidenav .footer .add-to-plan-btn{background-color:green;padding:16px;color:#fff;text-align:center;position:fixed;bottom:0;width:400px;cursor:pointer}.planner-container .sidenav-container .sidenav .heading{//:#f1f1f1;border-bottom:1px solid #aaa;margin-top:8px;padding:8px}.planner-container .sidenav-container .sidenav .list{padding-bottom:40px}.planner-container .sidenav-container .sidenav .list .list-items{padding:0;list-style:none}.planner-container .sidenav-container .sidenav .list .list-items .list-item{font-size:14px;padding:8px}.planner-container .sidenav-container .sidenav .list .list-items .list-item .list-item-heading{//:1px solid #aaa;font-size:16px;margin-bottom:4px}.planner-container .sidenav-container .sidenav .list .list-items .list-item .list-item-heading:before{content:"\\2022   "}.planner-container .sidenav-container .sidenav .list .list-items .list-item .list-category-items{list-style:none;padding:0;display:flex;justify-content:start;flex-direction:row;align-items:center;flex-wrap:wrap}.planner-container .sidenav-container .sidenav .list .list-items .list-item .list-category-items .list-category-item{transition:all .5s;display:flex;flex:43%;margin:4px;justify-content:center;border:1px solid #aaa;padding:8px;cursor:pointer}.planner-container .sidenav-container .sidenav .list .list-items .list-item .list-category-items .list-category-item.selected{background-color:rgba(0,0,0,.5)}.planner-container .sidenav-container .sidenav .list .list-items .list-item .list-category-items .list-category-item:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.planner-container .sidenav-container .sidenav .closebtn{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px}',""])},function(e,n,t){var a=t(14);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0);n.default=function(e){var n=e.items,t=e.selected,r=e.toggleSideNav,i=e.show,o=e.onSelect,s=e.addToPlan,l=Object.keys(n),d=t.items;return console.log(d),(0,a.h)("div",{className:"sidenav-container "+(i?"open":""),onclick:r,"data-action":"toggle"},(0,a.h)("div",{id:"mySidenav",className:"sidenav"},(0,a.h)("div",{className:"heading"},(0,a.h)("span",null,"Select ",t.type," for ",t.day),(0,a.h)("a",{href:"javascript:void(0)",class:"closebtn","data-action":"toggle"},"×")),(0,a.h)("div",{className:"list"},l&&l.length?(0,a.h)("ul",{className:"list-items"},l.map(function(e){var t=n[e];return(0,a.h)("li",{className:"list-item",key:e},(0,a.h)("div",{className:"list-item-heading"},e),(0,a.h)("ul",{className:"list-category-items"},t.map(function(e){return d.includes(n.itemId),(0,a.h)("li",{key:n.itemId,className:"list-category-item "+(d.includes(e.itemId)?"selected":""),onclick:o.bind(null,e)},e.name)})))})):(0,a.h)("div",{className:"no-items"},"No Items")),(0,a.h)("div",{className:"footer"},(0,a.h)("div",{className:"add-to-plan-btn",onclick:s},"ADD"))))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0);n.default=function(e){var n=e.day,t=e.onSelect;return console.log(n),(0,a.h)("div",{className:"day",key:n.day},(0,a.h)("div",{className:"day-name"},n.day),(0,a.h)("div",{className:"plans"},n.plans.map(function(e){return(0,a.h)("div",{className:"plan",key:e.mealType},(0,a.h)("div",{className:"plan-name"},e.mealType),e.menuItems&&e.menuItems.length?(0,a.h)("div",{className:"plan-items"},e.menuItems.map(function(e){return(0,a.h)("div",{className:"plan-item",key:e.id},(0,a.h)("img",{src:"//via.placeholder.com/50x50",alt:e.id}),(0,a.h)("div",{className:"plan-item-name"},e.name))})):(0,a.h)("div",{className:"add-button",onclick:t.bind(null,{day:n.day,type:e.mealType}),"data-action":"toggle"}))})))}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".footer-container{margin:16px 8px}.footer-container .footer{display:flex;justify-content:center;flex-direction:column}.footer-container .footer .footer-heading{align-self:center}.footer-container .footer .footer-links{display:flex;list-style:none;align-self:center;margin:0;padding:0}.footer-container .footer .footer-links .footer-link{margin:0 4px;padding:8px}.footer-container .footer .footer-links .footer-link a{text-decoration:none;color:#000}",""])},function(e,n,t){var a=t(18);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=t(0),i=t(19);(a=i)&&a.__esModule;n.default=function(e){return{state:{},actions:{},view:function(e){return function(e,n){return(0,r.h)("div",{className:"footer-container"},(0,r.h)("div",{className:"footer"},(0,r.h)("div",{className:"footer-heading"},(0,r.h)("strong",null,"Connect with us!")),(0,r.h)("ul",{className:"footer-links"},(0,r.h)("li",{className:"footer-link"},(0,r.h)("a",{target:"_blank",href:"http://dentalvidya.learnyst.com/"},"Test Series")),(0,r.h)("li",{className:"footer-link"},(0,r.h)("a",{target:"_blank",href:"https://www.facebook.com/DentalVidya/"},"Facebook")),(0,r.h)("li",{className:"footer-link"},"whatsapp: +91 8847408561"))))}}}}},,function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".header{//:#f5f5f5;font-size:16px;display:flex;justify-content:space-between}.header .header-logo{//:inline-block;font-size:16px;margin:8px}.header .header-links{list-style:none!important;margin:0;padding:0}.header .header-links .header-link{transition:all .2s;display:inline-block;text-decoration:none;padding:8px 16px;border-bottom:1px solid transparent}.header .header-links .header-link .header-link-text{transition:all .2s;color:#000}.header .header-links .header-link.selected{border-bottom:1px solid #000}.header .header-links .header-link.selected .header-link-text{color:#000;font-weight:700}.header .header-links .header-link:hover .header-link-text{font-weight:700}",""])},function(e,n,t){var a=t(22);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,r);a.locals&&(e.exports=a.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=t(0),i=t(3),o=t(23);(a=o)&&a.__esModule;n.default=function(e){return{state:{headerLinks:[{text:"Orders",to:"/orders",selected:!1},{text:"Plan My Subscription",to:"/",selected:!1}]},actions:{selectTab:function(e){return function(n){return{headerLinks:n.headerLinks.map(function(n){return n.to===e?Object.assign({},n,{selected:!0}):Object.assign({},n,{selected:!1})})}}}},view:function(e){return function(e,n){var t=e.header,a=e.location,o=n.header;return(0,r.h)("div",{class:"header container",oncreate:o.selectTab.bind(o,a.pathname)},(0,r.h)("div",{className:"header-logo"},(0,r.h)("a",{href:"/",className:"text"},"DBC")),(0,r.h)("ul",{class:"header-links"},t.headerLinks.map(function(e){return(0,r.h)(i.Link,{to:e.to,class:e.selected?"header-link selected":"header-link",onclick:o.selectTab.bind(o,e.to)},(0,r.h)("li",{class:"header-link-text"},e.text))})))}}}}},function(e,n,t){"use strict";var a,r=t(4),i=(a=r)&&a.__esModule?a:{default:a};"serviceWorker"in window.navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){e.update(),console.log("ServiceWorker registration successful with scope: ",e.scope),e.pushManager.getSubscription().then(function(n){return!(null===n)?console.log("[Service Worker] User is already subscribed."):e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){for(var n=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),t=window.atob(n),a=new Uint8Array(t.length),r=0;r<t.length;++r)a[r]=t.charCodeAt(r);return a}("BEfr-TQE853v_Cp9Vz5YZlTHJ9wzeSWT2e9mkYTcsPYgaCIoXvSUyrTYETtzRlxKTwtEWrp85K5ajCdO66ved8c")}).then(function(e){i.default.addClientBrowserId(e).then(function(e){console.log("[Service Worker] User is subscribed.")}).catch(function(e){console.error("[Service Worker] Error savinf id",e.message)})}).catch(function(e){console.log("Failed to subscribe the user: ",e)})})}).catch(function(e){return console.log("Error registering ServiceWorker",e.message)})})},function(e,n,t){"use strict";var a=t(0),r=t(3),i=(c(t(25)),c(t(24))),o=c(t(20)),s=c(t(5)),l=c(t(13)),d=c(t(10));c(t(7));function c(e){return e&&e.__esModule?e:{default:e}}var u={Header:(0,i.default)(),Home:(0,l.default)(),Footer:(0,o.default)(),Planner:(0,s.default)(),Orders:(0,d.default)()},p={state:{location:r.location.state,header:u.Header.state,home:u.Home.state,planner:u.Planner.state,orders:u.Orders.state},actions:{location:r.location.actions,header:u.Header.actions,home:u.Home.actions,planner:u.Planner.actions,orders:u.Orders.actions},view:function(e,n){var t=u.Header.view,i=u.Home.view,s=u.Orders.view;return(0,a.h)("main",null,(0,a.h)(t,null),(0,a.h)(r.Switch,null,(0,a.h)(r.Route,{path:"/",render:i}),(0,a.h)(r.Route,{path:"/orders/:id",render:s}),(0,a.h)(r.Route,{path:"/orders",render:s})),(0,a.h)(o.default,null))}},f=document.getElementById("app"),m=(0,a.app)(p.state,p.actions,p.view,f);r.location.subscribe(m.location)}]);