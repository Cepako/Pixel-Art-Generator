(()=>{var t={963:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},7:(t,e,r)=>{var n=r(286);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},50:(t,e,r)=>{var n=r(741),o=r(797),u=r(508),i=r(875),c=r(886);t.exports=function(t,e){var r=1==t,a=2==t,s=3==t,l=4==t,f=6==t,v=5==t||f,d=e||c;return function(e,c,p){for(var y,h,m=u(e),g=o(m),x=n(c,p,3),E=i(g.length),L=0,S=r?d(e,E):a?d(e,0):void 0;E>L;L++)if((v||L in g)&&(h=x(y=g[L],L,m),t))if(r)S[L]=h;else if(h)switch(t){case 3:return!0;case 5:return y;case 6:return L;case 2:S.push(y)}else if(l)return!1;return f?-1:s||l?l:S}}},736:(t,e,r)=>{var n=r(286),o=r(302),u=r(314)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[u])&&(e=void 0)),void 0===e?Array:e}},886:(t,e,r)=>{var n=r(736);t.exports=function(t,e){return new(n(t))(e)}},32:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},645:t=>{var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},741:(t,e,r)=>{var n=r(963);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},355:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},57:(t,e,r)=>{t.exports=!r(253)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},457:(t,e,r)=>{var n=r(286),o=r(816).document,u=n(o)&&n(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},985:(t,e,r)=>{var n=r(816),o=r(645),u=r(728),i=r(234),c=r(741),a="prototype",s=function(t,e,r){var l,f,v,d,p=t&s.F,y=t&s.G,h=t&s.S,m=t&s.P,g=t&s.B,x=y?n:h?n[e]||(n[e]={}):(n[e]||{})[a],E=y?o:o[e]||(o[e]={}),L=E[a]||(E[a]={});for(l in y&&(r=e),r)v=((f=!p&&x&&void 0!==x[l])?x:r)[l],d=g&&f?c(v,n):m&&"function"==typeof v?c(Function.call,v):v,x&&i(x,l,v,t&s.U),E[l]!=v&&u(E,l,d),m&&L[l]!=v&&(L[l]=v)};n.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},253:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},18:(t,e,r)=>{t.exports=r(825)("native-function-to-string",Function.toString)},816:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},181:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},728:(t,e,r)=>{var n=r(275),o=r(681);t.exports=r(57)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},734:(t,e,r)=>{t.exports=!r(57)&&!r(253)((function(){return 7!=Object.defineProperty(r(457)("div"),"a",{get:function(){return 7}}).a}))},797:(t,e,r)=>{var n=r(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},302:(t,e,r)=>{var n=r(32);t.exports=Array.isArray||function(t){return"Array"==n(t)}},286:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},461:t=>{t.exports=!1},275:(t,e,r)=>{var n=r(7),o=r(734),u=r(689),i=Object.defineProperty;e.f=r(57)?Object.defineProperty:function(t,e,r){if(n(t),e=u(e,!0),n(r),o)try{return i(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},681:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},234:(t,e,r)=>{var n=r(816),o=r(728),u=r(181),i=r(953)("src"),c=r(18),a="toString",s=(""+c).split(a);r(645).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,r,c){var a="function"==typeof r;a&&(u(r,"name")||o(r,"name",e)),t[e]!==r&&(a&&(u(r,i)||o(r,i,t[e]?""+t[e]:s.join(String(e)))),t===n?t[e]=r:c?t[e]?t[e]=r:o(t,e,r):(delete t[e],o(t,e,r)))})(Function.prototype,a,(function(){return"function"==typeof this&&this[i]||c.call(this)}))},825:(t,e,r)=>{var n=r(645),o=r(816),u="__core-js_shared__",i=o[u]||(o[u]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(461)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},717:(t,e,r)=>{"use strict";var n=r(253);t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},467:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},875:(t,e,r)=>{var n=r(467),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},508:(t,e,r)=>{var n=r(355);t.exports=function(t){return Object(n(t))}},689:(t,e,r)=>{var n=r(286);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},953:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},314:(t,e,r)=>{var n=r(825)("wks"),o=r(953),u=r(816).Symbol,i="function"==typeof u;(t.exports=function(t){return n[t]||(n[t]=i&&u[t]||(i?u:o)("Symbol."+t))}).store=n},336:(t,e,r)=>{"use strict";var n=r(985),o=r(50)(0),u=r(717)([].forEach,!0);n(n.P+n.F*!u,"Array",{forEach:function(t){return o(this,t,arguments[1])}})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var u=e[n]={exports:{}};return t[n](u,u.exports,r),u.exports}(()=>{"use strict";r(336);var t=document.querySelector("#grid-width"),e=document.querySelector("#grid-height"),n=document.querySelector(".grid-height-value"),o=document.querySelector(".grid-width-value"),u=1,i=1;function c(t){"grid-height"===t.target.id?(i=t.target.value,t.target.value>9?n.textContent=t.target.value:n.textContent="0".concat(t.target.value)):(u=t.target.value,t.target.value>9?o.textContent=t.target.value:o.textContent="0".concat(t.target.value))}function a(t,e){"click"===t.type||"touchstart"===t.type?e.style.backgroundColor=s?"".concat(h.value):"transparent":s&&l?e.style.backgroundColor="".concat(h.value):!s&&l&&(e.style.backgroundColor="transparent")}e.addEventListener("input",(function(t){c(t)})),t.addEventListener("input",(function(t){c(t)}));var s=!0,l=!1,f=document.querySelector(".create-grid"),v=document.querySelector(".clear-grid"),d=document.querySelector(".grid"),p=document.querySelector(".paint"),y=document.querySelector(".erase"),h=document.querySelector("#color-picker");p.addEventListener("click",(function(){s=!0,y.classList.remove("active"),p.classList.add("active")})),y.addEventListener("click",(function(){s=!1,y.classList.add("active"),p.classList.remove("active")})),d.addEventListener("mousedown",(function(){return l=!0})),d.addEventListener("mouseup",(function(){return l=!1})),d.addEventListener("mouseleave",(function(){return l=!1})),d.addEventListener("dragstart",(function(t){return t.preventDefault()})),f.addEventListener("click",(function(){d.innerHTML="";for(var t=0;t<i;t++){var e=document.createElement("div");e.classList.add("grid-column");for(var r=0;r<u;r++){var n=document.createElement("div");e.appendChild(n)}d.appendChild(e)}document.querySelectorAll(".grid-column div").forEach((function(t){t.addEventListener("mousemove",(function(e){return a(e,t)})),t.addEventListener("touchmove",(function(t){t.preventDefault();var e=t.touches[0],r=document.elementFromPoint(e.clientX,e.clientY);null!==r&&null!==r.parentElement.classList.value&&r&&"grid-column"===r.parentElement.classList.value&&a(t,r)})),t.addEventListener("click",(function(e){return a(e,t)}))}))})),v.addEventListener("click",(function(){d.innerHTML=""})),d.addEventListener("touchstart",(function(){return l=!0})),d.addEventListener("touchend",(function(){return l=!1})),d.addEventListener("touchcancel",(function(){return l=!1}))})()})();