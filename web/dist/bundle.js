!function(e){function n(n){for(var a,i,s=n[0],l=n[1],c=n[2],p=0,u=[];p<s.length;p++)i=s[p],o[i]&&u.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(d&&d(n);u.length;)u.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,s=1;s<t.length;s++){var l=t[s];0!==o[l]&&(a=!1)}a&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},o={1:0},r=[];function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var d=l;r.push([23,0]),t()}([,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),o=i(t(13)),r=i(t(12));i(t(11));function i(e){return e&&e.__esModule?e:{default:e}}n.default=function(e){return{state:{sideNavVisible:!1,selected:{day:null,type:null},days:[{name:"Monday",plan:[{type:"BREAKFAST",items:[{id:1,name:"Item 1",image:"//via.placeholder.com/50X50"},{id:2,name:"Item 2",image:"//via.placeholder.com/50X50"}]},{type:"LUNCH",items:[]},{type:"SNACKS",items:[]},{type:"DINNER",items:[]}]},{name:"Tuesday",plan:[{type:"BREAKFAST",items:[]},{type:"LUNCH",items:[]},{type:"MY_FAV",items:[]}]}],recommendations:{BREAKFAST:[],LUNCH:[],MY_FAV:[]}},actions:{toggleSideNav:function(e){return function(n){if(e.target.dataset&&"toggle"===e.target.dataset.action)return{sideNavVisible:!n.sideNavVisible}}},onSelect:function(e){return function(n){return console.log("[selecting]",e),{selected:{day:e.day,type:e.type},sideNavVisible:!n.sideNavVisible}}}},view:function(e){return function(e,n){var t=e.planner,i=n.planner;return(0,a.h)("div",{className:"planner-container"},(0,a.h)("div",{className:"week"},(0,a.h)("div",{className:"days"},t.days.map(function(e){return(0,a.h)(o.default,{day:e,onSelect:i.onSelect})}))),(0,a.h)(r.default,{items:[],selected:t.selected,show:t.sideNavVisible,toggleSideNav:i.toggleSideNav.bind(i)}))}}}}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"body{font-family:Noto Sans,sans-serif;margin:0}.container{padding-left:60px;padding-right:60px}a{text-decoration:none;color:#000}table td,table th{border:1px solid #eee}table td{padding:4px}",""])},function(e,n,t){var a=t(5);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".home{padding:0 70px;margin-top:16px}",""])},function(e,n,t){var a=t(7);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0);o(t(8));function o(e){return e&&e.__esModule?e:{default:e}}var r=(0,o(t(4)).default)();n.default=function(e){return{state:{},actions:{},view:function(e){return function(e,n){e.home,n.home;return(0,a.h)("div",{className:"home"},(0,a.h)(r.view,null))}}}}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'.planner-container .week .days .day .day-name{font-weight:500;padding-bottom:4px;border-bottom:1px solid #eee}.planner-container .week .days .day .plans{padding-top:8px;display:flex;justify-items:start;flex-wrap:wrap}.planner-container .week .days .day .plans .plan{transition:all .5s;position:relative;min-height:100px;cursor:pointer;padding:8px;border:1px solid #eee;padding:10px;flex:22%;margin:8px}.planner-container .week .days .day .plans .plan .plan-name{font-size:12px}.planner-container .week .days .day .plans .plan .plan-items{display:flex;padding:8px 0}.planner-container .week .days .day .plans .plan .plan-items .plan-item{margin-right:4px}.planner-container .week .days .day .plans .plan .plan-items .plan-item .plan-item-name{font-size:8px}.planner-container .week .days .day .plans .plan:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.planner-container .week .days .day .plans .plan .add-button{width:100%;height:100%}.planner-container .week .days .day .plans .plan .add-button:after{content:"+";font-size:100px;position:absolute;top:0;left:50%;right:0;margin-left:-30px;color:#eee}.planner-container .sidenav-container{transition:.5s;background-color:transparent}.planner-container .sidenav-container.open{background-color:rgba(0,0,0,.2);width:100%;height:100%;position:absolute;top:0;left:0}.planner-container .sidenav-container.open .sidenav{width:400px}.planner-container .sidenav-container .sidenav{height:100%;width:0;position:fixed;z-index:1;top:0;right:0;background-color:#111;overflow-x:hidden;transition:.5s;//:30px}.planner-container .sidenav-container .sidenav .heading{color:#f1f1f1;padding:8px}.planner-container .sidenav-container .sidenav a{padding:8px 8px 8px 32px;text-decoration:none;font-size:25px;color:#818181;display:block;transition:.3s}.planner-container .sidenav-container .sidenav a:hover{color:#f1f1f1}.planner-container .sidenav-container .sidenav .closebtn{position:absolute;top:0;right:25px;font-size:36px;margin-left:50px}',""])},function(e,n,t){var a=t(10);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0);n.default=function(e){e.items;var n=e.selected,t=e.toggleSideNav,o=e.show;return(0,a.h)("div",{className:"sidenav-container "+(o?"open":""),onclick:t,"data-action":"toggle"},(0,a.h)("div",{id:"mySidenav",className:"sidenav"},(0,a.h)("div",null,(0,a.h)("p",{className:"heading"},"Select ",n.type," for ",n.day),(0,a.h)("a",{href:"javascript:void(0)",class:"closebtn","data-action":"toggle"},"×")),(0,a.h)("div",{className:"list"},(0,a.h)("ul",{className:"list-items"}))))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0);n.default=function(e){var n=e.day,t=e.onSelect;return(0,a.h)("div",{className:"day",key:n.name},(0,a.h)("div",{className:"day-name"},n.name),(0,a.h)("div",{className:"plans"},n.plan.map(function(e){return(0,a.h)("div",{className:"plan",key:e.type},(0,a.h)("div",{className:"plan-name"},e.type),e.items&&e.items.length?(0,a.h)("div",{className:"plan-items"},e.items.map(function(e){return(0,a.h)("div",{className:"plan-item",key:e.id},(0,a.h)("img",{src:e.image,alt:e.name}),(0,a.h)("div",{className:"plan-item-name"},e.name))})):(0,a.h)("div",{className:"add-button",onclick:t.bind(null,{day:n.name,type:e.type}),"data-action":"toggle"}))})))}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".footer-container{margin:16px 8px}.footer-container .footer{display:flex;justify-content:center;flex-direction:column}.footer-container .footer .footer-heading{align-self:center}.footer-container .footer .footer-links{display:flex;list-style:none;align-self:center;margin:0;padding:0}.footer-container .footer .footer-links .footer-link{margin:0 4px;padding:8px}.footer-container .footer .footer-links .footer-link a{text-decoration:none;color:#000}",""])},function(e,n,t){var a=t(14);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=t(0),r=t(15);(a=r)&&a.__esModule;n.default=function(e){return{state:{},actions:{},view:function(e){return function(e,n){return(0,o.h)("div",{className:"footer-container"},(0,o.h)("div",{className:"footer"},(0,o.h)("div",{className:"footer-heading"},(0,o.h)("strong",null,"Connect with us!")),(0,o.h)("ul",{className:"footer-links"},(0,o.h)("li",{className:"footer-link"},(0,o.h)("a",{target:"_blank",href:"http://dentalvidya.learnyst.com/"},"Test Series")),(0,o.h)("li",{className:"footer-link"},(0,o.h)("a",{target:"_blank",href:"https://www.facebook.com/DentalVidya/"},"Facebook")),(0,o.h)("li",{className:"footer-link"},"whatsapp: +91 8847408561"))))}}}}},,function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".header{//:#f5f5f5;font-size:16px;display:flex;justify-content:space-between}.header .header-logo{//:inline-block;font-size:16px;margin:8px}.header .header-links{list-style:none!important;margin:0;padding:0}.header .header-links .header-link{transition:all .2s;display:inline-block;text-decoration:none;padding:8px 16px;border-bottom:1px solid transparent}.header .header-links .header-link .header-link-text{transition:all .2s;color:#000}.header .header-links .header-link.selected{border-bottom:1px solid #000}.header .header-links .header-link.selected .header-link-text{color:#000;font-weight:700}.header .header-links .header-link:hover .header-link-text{font-weight:700}",""])},function(e,n,t){var a=t(18);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(a,o);a.locals&&(e.exports=a.locals)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=t(0),r=t(3),i=t(19);(a=i)&&a.__esModule;n.default=function(e){return{state:{headerLinks:[{text:"Plan My Subscription",to:"/",selected:!1}]},actions:{selectTab:function(e){return function(n){return{headerLinks:n.headerLinks.map(function(n){return n.to===e?Object.assign({},n,{selected:!0}):Object.assign({},n,{selected:!1})})}}}},view:function(e){return function(e,n){var t=e.header,a=e.location,i=n.header;return(0,o.h)("div",{class:"header container",oncreate:i.selectTab.bind(i,a.pathname)},(0,o.h)("div",{className:"header-logo"},(0,o.h)("a",{href:"/",className:"text"},"DBC")),(0,o.h)("ul",{class:"header-links"},t.headerLinks.map(function(e){return(0,o.h)(r.Link,{to:e.to,class:e.selected?"header-link selected":"header-link",onclick:i.selectTab.bind(i,e.to)},(0,o.h)("li",{class:"header-link-text"},e.text))})))}}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();var o="https://us-central1-hyperapp-46652.cloudfunctions.net/api";window.location.host.includes("localhost")&&(o="http://localhost:5000/hyperapp-46652/us-central1/api");var r=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiUrl=n,this.firebaseUrl=t}return a(e,[{key:"recommendations",value:function(){return fetch(this.apiUrl+"/recommendations/").then(function(e){return e.json()})}},{key:"addClientBrowserId",value:function(e){return fetch(this.firebaseUrl+"/clients",{body:JSON.stringify(e),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})}}]),e}();n.default=new r("",o)},function(e,n,t){"use strict";var a,o=t(21),r=(a=o)&&a.__esModule?a:{default:a};"serviceWorker"in window.navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){e.update(),console.log("ServiceWorker registration successful with scope: ",e.scope),e.pushManager.getSubscription().then(function(n){return!(null===n)?console.log("[Service Worker] User is already subscribed."):e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){for(var n=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),t=window.atob(n),a=new Uint8Array(t.length),o=0;o<t.length;++o)a[o]=t.charCodeAt(o);return a}("BEfr-TQE853v_Cp9Vz5YZlTHJ9wzeSWT2e9mkYTcsPYgaCIoXvSUyrTYETtzRlxKTwtEWrp85K5ajCdO66ved8c")}).then(function(e){r.default.addClientBrowserId(e).then(function(e){console.log("[Service Worker] User is subscribed.")}).catch(function(e){console.error("[Service Worker] Error savinf id",e.message)})}).catch(function(e){console.log("Failed to subscribe the user: ",e)})})}).catch(function(e){return console.log("Error registering ServiceWorker",e.message)})})},function(e,n,t){"use strict";var a=t(0),o=t(3),r=(c(t(22)),c(t(20))),i=c(t(16)),s=c(t(4)),l=c(t(9));c(t(6));function c(e){return e&&e.__esModule?e:{default:e}}var d={Header:(0,r.default)(),Home:(0,l.default)(),Footer:(0,i.default)(),Planner:(0,s.default)()},p={state:{location:o.location.state,header:d.Header.state,home:d.Home.state,planner:d.Planner.state},actions:{location:o.location.actions,header:d.Header.actions,home:d.Home.actions,planner:d.Planner.actions},view:function(e,n){var t=d.Header.view,r=d.Home.view;return(0,a.h)("main",null,(0,a.h)(t,null),(0,a.h)(o.Switch,null,(0,a.h)(o.Route,{path:"/",render:r})),(0,a.h)(i.default,null))}},u=document.getElementById("app"),f=(0,a.app)(p.state,p.actions,p.view,u);o.location.subscribe(f.location)}]);