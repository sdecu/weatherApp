"use strict";(self.webpackChunkrestaurantpage=self.webpackChunkrestaurantpage||[]).push([[57],{208:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(354),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([e.id,"body   {\n    background-color: #002f64;\n    margin: 0;\n    padding: 0;\n    overflow:hidden;\n}\n\nheader  {\n  display: flex;\n  justify-content: center;\n  gap: 3ch;\n}\n\nheader h1 {\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n}\n\ninput {\n  height: fit-content;\n  font-size: large;\n  align-self: center;\n}\n\n#middle {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin: 0 2%;\n}\n\n#middle div {\n  width:25ch;\n  font-size: 5ch;\n  margin-top: 10%;\n  border-radius: 20px;\n  border: 1px solid #2d9fd9;\n}\n\n.weekly {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin-top: auto;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,SAAS;IACT,UAAU;IACV,eAAe;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,UAAU;EACV,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,gBAAgB;AAClB",sourcesContent:["body   {\n    background-color: #002f64;\n    margin: 0;\n    padding: 0;\n    overflow:hidden;\n}\n\nheader  {\n  display: flex;\n  justify-content: center;\n  gap: 3ch;\n}\n\nheader h1 {\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n}\n\ninput {\n  height: fit-content;\n  font-size: large;\n  align-self: center;\n}\n\n#middle {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin: 0 2%;\n}\n\n#middle div {\n  width:25ch;\n  font-size: 5ch;\n  margin-top: 10%;\n  border-radius: 20px;\n  border: 1px solid #2d9fd9;\n}\n\n.weekly {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin-top: auto;\n}"],sourceRoot:""}]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],u=a[s]||0,m="".concat(s," ").concat(u);a[s]=u+1;var l=n(m),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var p=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:m,updater:p,references:1})}i.push(m)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},128:(e,t,n)=>{var o=n(72),r=n.n(o),a=n(825),i=n.n(a),c=n(659),d=n.n(c),s=n(56),u=n.n(s),m=n(540),l=n.n(m),f=n(113),p=n.n(f),y=n(208),A={};A.styleTagTransform=p(),A.setAttributes=u(),A.insert=d().bind(null,"head"),A.domAPI=i(),A.insertStyleElement=l(),r()(y.A,A),y.A&&y.A.locals&&y.A.locals;const g={input:document.querySelector("input"),todayDate:document.getElementById("today's date").textContent,todayTemp:document.getElementById("Temp").textContent,todayHumidity:document.getElementById("Humidity").textContent,todayRain:document.getElementById("Rain").textContent,todayLow:document.getElementById("Daily Low").textContent,todayHigh:document.getElementById("Daily High").textContent,tomorrowDate:document.getElementById("today's date").textContent,tomorrowTemp:document.getElementById("Temp").textContent,tomorrowHumidity:document.getElementById("Humidity").textContent,tomorrowRain:document.getElementById("Rain").textContent,tomorrowLow:document.getElementById("Daily Low").textContent,tomorrowHigh:document.getElementById("Daily High").textContent,dayAfterDate:document.getElementById("today's date").textContent,dayAfterTemp:document.getElementById("Temp").textContent,dayAfterHumidity:document.getElementById("Humidity").textContent,dayAfterRain:document.getElementById("Rain").textContent,dayAfterLow:document.getElementById("Daily Low").textContent,dayAfterHigh:document.getElementById("Daily High").textContent};(async function(e){const t=await fetch("https://api.weatherapi.com/v1/forecast.json?key=7696cbc4355444c4bc1221226240606&q=paris&days=3",{mode:"cors"});let n=await t.json(),o=n.forecast.forecastday[0].day,r=n.forecast.forecastday[1].day,a=n.forecast.forecastday[2].day;return o.daily_chance_of_rain,r.daily_chance_of_rain,a.daily_chance_of_rain,n.forecast.forecastday[0].date,n.forecast.forecastday[1].date,n.forecast.forecastday[2].date,o.maxtemp_F,r.maxtemp_F,a.maxtemp_F,o.mintemp_F,o.mintemp_F,a.mintemp_F,console.log(n),{data:n}})().then((e=>{console.log(e.data.forecast.forecastday[0].day)})),g.input.addEventListener("keypress",(function(e){"Enter"===e.key&&async function(e){let t=e;const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=7696cbc4355444c4bc1221226240606&q=${t}`,{mode:"cors"});let o=await n.json(),r=o.location,a=o.current,i=r.country,c=r.name,d=r.region,s=a.condition.text,u=a.temp_f,m=a.temp_c,l=a.feelslike_f,f=a.feelslike_c,p=a.humidity,y=a.wind_mph;return{country:i,city:c,region:d,condition:s,tempC:m,tempF:u,feelC:f,feelF:l,humidity:p,windKPH:a.wind_kph,windMPH:y}}(g.input.value).then((e=>{console.log(e.country)}))})),function(){const e=document.querySelector("header"),t=document.querySelector("#middle"),n=document.querySelector(".weekly");n.style.marginTop=window.innerHeight-e.offsetHeight-t.offsetHeight-n.offsetHeight-50+"px"}()}},e=>{e(e.s=128)}]);
//# sourceMappingURL=index.bundle.js.map