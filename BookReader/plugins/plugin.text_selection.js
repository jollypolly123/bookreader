(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[423],{7967:function(t,e,n){"use strict";n(5666),n(6992),n(1539),n(3948),n(9826),n(9714),n(2222),n(1249),n(4916),n(3123),n(2707),n(9601),n(8674),n(2526),n(1817),n(2165),n(8783),n(7042),n(8309),n(1038),n(489),n(2419),n(4819),n(5003);var r=n(9860),o=n(7775);function i(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s;return null==t?void 0:t.replace(/\{\{([^}]*?)\}\}/g,(function(t,o){if(!o)return t;var a=i(o.split("|").map((function(t){return t.trim()}))),u=a[0],s=a.slice(1);if(!(u in n)&&!(u in e))return t;var l=u in n?n[u]:u in e?e[u]:null;return s.map((function(t){return r[t]})).reduce((function(t,e){return e(t)}),l&&l.toString())}))}n(5306),n(3210),n(5827);var s={urlencode:encodeURIComponent},l=n(3609);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e,n,r,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,o)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,u,"next",t)}function u(t){y(i,r,o,a,u,"throw",t)}a(void 0)}))}}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t}var S=window.BookReader,P={enabled:!0,fullDjvuXmlUrl:null,singlePageDjvuXmlUrl:null},A=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;b(this,t),this.maxSize=e,this.entries=[]}return x(t,[{key:"add",value:function(t){this.entries.length>=this.maxSize&&this.entries.shift(),this.entries.push(t)}}]),t}(),j=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,o.vU)(),i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,o.G6)();b(this,t),this.options=e,this.optionVariables=n,this.djvuPagesPromise=null,this.svgParagraphElement="text",this.svgWordElement="tspan",this.insertNewlines=r,this.pointerEventsOnParagraph=i,r&&(this.svgParagraphElement="g",this.svgWordElement="text"),this.pageTextCache=new A,this.maxWordRendered=2500}var e,n;return x(t,[{key:"init",value:function(){this.options.singlePageDjvuXmlUrl||(this.djvuPagesPromise=l.ajax({type:"GET",url:u(this.options.fullDjvuXmlUrl,this.optionVariables),dataType:"html",error:function(t){}}).then((function(t){try{var e=l.parseXML(t);return e&&l(e).find("OBJECT")}catch(t){return}})))}},{key:"getPageText",value:(n=m(regeneratorRuntime.mark((function t(e){var n,r,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.options.singlePageDjvuXmlUrl){t.next=7;break}if(!(n=this.pageTextCache.entries.find((function(t){return t.index==e})))){t.next=4;break}return t.abrupt("return",n.response);case 4:return t.abrupt("return",l.ajax({type:"GET",url:u(this.options.singlePageDjvuXmlUrl,this.optionVariables,{pageIndex:e}),dataType:"html",error:function(t){}}).then((function(t){try{var n=l.parseXML(t),r=n&&l(n).find("OBJECT")[0];return o.pageTextCache.add({index:e,response:r}),r}catch(t){return}})));case 7:return t.next=9,this.djvuPagesPromise;case 9:if(!(r=t.sent)){t.next=12;break}return t.abrupt("return",r[e]);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"interceptCopy",value:function(t){t[0].addEventListener("copy",(function(t){var e=document.getSelection();t.clipboardData.setData("text/plain",e.toString()),t.preventDefault()}))}},{key:"defaultMode",value:function(t){var e=this;t.classList.remove("selectingSVG"),l(t).on("mousedown.textSelectPluginHandler",(function(n){l(n.target).is(".BRwordElement")&&(n.stopPropagation(),t.classList.add("selectingSVG"),l(t).one("mouseup.textSelectPluginHandler",(function(n){""!=window.getSelection().toString()?(n.stopPropagation(),l(t).off(".textSelectPluginHandler"),e.textSelectingMode(t)):t.classList.remove("selectingSVG")})))}))}},{key:"textSelectingMode",value:function(t){var e=this;l(t).on("mousedown.textSelectPluginHandler",(function(t){l(t.target).is(".BRwordElement")||""!=window.getSelection().toString()&&window.getSelection().removeAllRanges(),t.stopPropagation()})),l(t).on("mouseup.textSelectPluginHandler",(function(n){n.stopPropagation(),""==window.getSelection().toString()&&(l(t).off(".textSelectPluginHandler"),e.defaultMode(t))}))}},{key:"stopPageFlip",value:function(t){var e=this,n=t.find("svg.textSelectionSVG");n.length&&(n.each((function(t,n){return e.defaultMode(n)})),this.interceptCopy(t))}},{key:"createTextLayer",value:(e=m(regeneratorRuntime.mark((function t(e){var n,o,i,a,u,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.page.index,!(o=e.$container).find(".textSelectionSVG").length){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,this.getPageText(n);case 7:if(i=t.sent){t.next=10;break}return t.abrupt("return");case 10:if(!((a=l(i).find("WORD").length)>this.maxWordRendered)){t.next=14;break}return console.log("Page ".concat(n," has too many words (").concat(a," > ").concat(this.maxWordRendered,"). Not rendering text layer.")),t.abrupt("return");case 14:u=(0,r.hy)(e.page,"textSelectionSVG"),o.append(u),l(i).find("PARAGRAPH").each((function(t,e){var n=l(e).find("WORD");if(n.length){var r=document.createElementNS("http://www.w3.org/2000/svg",s.svgParagraphElement);r.setAttribute("class","BRparagElement"),s.pointerEventsOnParagraph&&(r.style.pointerEvents="all");for(var o=[],i=0;i<n.length;i++){var a=n[i],c=d(l(a).attr("coords").split(",").map(parseFloat),4),f=c[0],p=c[1],h=c[2],g=p-c[3];o.push(g);var v=document.createElementNS("http://www.w3.org/2000/svg",s.svgWordElement);if(v.setAttribute("class","BRwordElement"),v.setAttribute("x",f.toString()),v.setAttribute("y",p.toString()),v.setAttribute("textLength",(h-f).toString()),v.setAttribute("lengthAdjust","spacingAndGlyphs"),v.textContent=a.textContent,r.appendChild(v),i<n.length-1){var y=n[i+1],m=d(l(y).attr("coords").split(",").map(parseFloat),4),b=m[0],w=(m[1],m[2],m[3],document.createElementNS("http://www.w3.org/2000/svg",s.svgWordElement));w.setAttribute("class","BRwordElement"),w.setAttribute("x",h.toString()),w.setAttribute("y",p.toString()),b-h>0&&w.setAttribute("textLength",(b-h).toString()),w.setAttribute("lengthAdjust","spacingAndGlyphs"),w.textContent=" ",r.appendChild(w)}i==n.length-1&&s.insertNewlines&&r.appendChild(document.createTextNode("\n"))}o.sort();var x=o[Math.floor(.85*o.length)];r.setAttribute("font-size",x.toString()),u.appendChild(r)}})),this.stopPageFlip(o);case 18:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}(),E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=g(e);if(n){var o=g(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return h(this,t)});function o(){return b(this,o),r.apply(this,arguments)}return x(o,[{key:"init",value:function(){var t=Object.assign({},P,this.options.plugins.textSelection);t.enabled&&(this.textSelectionPlugin=new j(t,this.options.vars),this.options.plugins.textSelection=t,this.textSelectionPlugin.init()),f(g(o.prototype),"init",this).call(this)}},{key:"_createPageContainer",value:function(t){var e,n=f(g(o.prototype),"_createPageContainer",this).call(this,t);return this.mode!==this.constModeThumb&&n.page&&(null===(e=this.textSelectionPlugin)||void 0===e||e.createTextLayer(n)),n}}]),o}(S);window.BookReader=E},7775:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.vendor;return/chrome/i.test(t)&&/google inc/i.test(e)}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;return/firefox/i.test(t)}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;return/safari/i.test(t)&&!/chrome|chromium/i.test(t)}n.d(e,{i7:function(){return r},vU:function(){return o},G6:function(){return i}})},6091:function(t,e,n){var r=n(7293),o=n(1361);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},3210:function(t,e,n){"use strict";var r=n(2109),o=n(3111).trim;r({target:"String",proto:!0,forced:n(6091)("trim")},{trim:function(){return o(this)}})}},function(t){t(t.s=7967)}]);
//# sourceMappingURL=plugin.text_selection.js.map