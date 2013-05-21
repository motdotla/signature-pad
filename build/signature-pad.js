/*! signature-pad.js - 0.0.1 - 2013-05-20 - scottmotte */
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function E(a){return a==null?String(a):y[z.call(a)]||"object"}function F(a){return E(a)=="function"}function G(a){return a!=null&&a==a.window}function H(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function I(a){return E(a)=="object"}function J(a){return I(a)&&!G(a)&&a.__proto__==Object.prototype}function K(a){return a instanceof Array}function L(a){return typeof a.length=="number"}function M(a){return g.call(a,function(a){return a!=null})}function N(a){return a.length>0?c.fn.concat.apply([],a):a}function O(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function P(a){return a in j?j[a]:j[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function Q(a,b){return typeof b=="number"&&!l[O(a)]?b+"px":b}function R(a){var b,c;return i[a]||(b=h.createElement(a),h.body.appendChild(b),c=k(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),i[a]=c),i[a]}function S(a){return"children"in a?f.call(a.children):c.map(a.childNodes,function(a){if(a.nodeType==1)return a})}function T(c,d,e){for(b in d)e&&(J(d[b])||K(d[b]))?(J(d[b])&&!J(c[b])&&(c[b]={}),K(d[b])&&!K(c[b])&&(c[b]=[]),T(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function U(b,d){return d===a?c(b):c(b).filter(d)}function V(a,b,c,d){return F(b)?b.call(a,c,d):b}function W(a,b,c){c==null?a.removeAttribute(b):a.setAttribute(b,c)}function X(b,c){var d=b.className,e=d&&d.baseVal!==a;if(c===a)return e?d.baseVal:d;e?d.baseVal=c:b.className=c}function Y(a){var b;try{return a?a=="true"||(a=="false"?!1:a=="null"?null:isNaN(b=Number(a))?/^[\[\{]/.test(a)?c.parseJSON(a):a:b):a}catch(d){return a}}function Z(a,b){b(a);for(var c in a.childNodes)Z(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=e.filter,h=window.document,i={},j={},k=h.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,o=/^(?:body|html)$/i,p=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],r=h.createElement("table"),s=h.createElement("tr"),t={tr:h.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:s,th:s,"*":h.createElement("div")},u=/complete|loaded|interactive/,v=/^\.([\w-]+)$/,w=/^#([\w-]*)$/,x=/^[\w-]+$/,y={},z=y.toString,A={},B,C,D=h.createElement("div");return A.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=D).appendChild(a),d=~A.qsa(e,b).indexOf(a),f&&D.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},A.fragment=function(b,d,e){b.replace&&(b=b.replace(n,"<$1></$2>")),d===a&&(d=m.test(b)&&RegExp.$1),d in t||(d="*");var g,h,i=t[d];return i.innerHTML=""+b,h=c.each(f.call(i.childNodes),function(){i.removeChild(this)}),J(e)&&(g=c(h),c.each(e,function(a,b){p.indexOf(a)>-1?g[a](b):g.attr(a,b)})),h},A.Z=function(a,b){return a=a||[],a.__proto__=c.fn,a.selector=b||"",a},A.isZ=function(a){return a instanceof A.Z},A.init=function(b,d){if(!b)return A.Z();if(F(b))return c(h).ready(b);if(A.isZ(b))return b;var e;if(K(b))e=M(b);else if(I(b))e=[J(b)?c.extend({},b):b],b=null;else if(m.test(b))e=A.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(h,b)}return A.Z(e,b)},c=function(a,b){return A.init(a,b)},c.extend=function(a){var b,c=f.call(arguments,1);return typeof a=="boolean"&&(b=a,a=c.shift()),c.forEach(function(c){T(a,c,b)}),a},A.qsa=function(a,b){var c;return H(a)&&w.test(b)?(c=a.getElementById(RegExp.$1))?[c]:[]:a.nodeType!==1&&a.nodeType!==9?[]:f.call(v.test(b)?a.getElementsByClassName(RegExp.$1):x.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=function(a,b){return a!==b&&a.contains(b)},c.type=E,c.isFunction=F,c.isWindow=G,c.isArray=K,c.isPlainObject=J,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=B,c.trim=function(a){return a.trim()},c.uuid=0,c.support={},c.expr={},c.map=function(a,b){var c,d=[],e,f;if(L(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return N(d)},c.each=function(a,b){var c,d;if(L(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){y["[object "+b+"]"]=b.toLowerCase()}),c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,indexOf:e.indexOf,concat:e.concat,map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return u.test(h.readyState)?a(c):h.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return F(a)?this.not(this.not(a)):c(g.call(this,function(b){return A.matches(b,a)}))},add:function(a,b){return c(C(this.concat(c(a,b))))},is:function(a){return this.length>0&&A.matches(this[0],a)},not:function(b){var d=[];if(F(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):L(b)&&F(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return I(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!I(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!I(a)?a:c(a)},find:function(a){var b,d=this;return typeof a=="object"?b=c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):this.length==1?b=c(A.qsa(this[0],a)):b=this.map(function(){return A.qsa(this,a)}),b},closest:function(a,b){var d=this[0],e=!1;typeof a=="object"&&(e=c(a));while(d&&!(e?e.indexOf(d)>=0:A.matches(d,a)))d=d!==b&&!H(d)&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&!H(a)&&b.indexOf(a)<0)return b.push(a),a});return U(b,a)},parent:function(a){return U(C(this.pluck("parentNode")),a)},children:function(a){return U(this.map(function(){return S(this)}),a)},contents:function(){return this.map(function(){return f.call(this.childNodes)})},siblings:function(a){return U(this.map(function(a,b){return g.call(S(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),k(this,"").getPropertyValue("display")=="none"&&(this.style.display=R(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=F(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));var b;while((b=a.children()).length)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=F(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?d.css("display")=="none":b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(V(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(I(c))for(b in c)W(this,b,c[b]);else W(this,c,V(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&W(this,a)})},prop:function(b,c){return c===a?this[0]&&this[0][b]:this.each(function(a){this[b]=V(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+O(b),c);return d!==null?Y(d):a},val:function(b){return b===a?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(a){return this.selected}).pluck("value"):this[0].value):this.each(function(a){this.value=V(this,b,a,this.value)})},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=V(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};d.css("position")=="static"&&(g.position="relative"),d.css(g)});if(this.length==0)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,c){if(arguments.length<2&&typeof a=="string")return this[0]&&(this[0].style[B(a)]||k(this[0],"").getPropertyValue(a));var d="";if(E(a)=="string")!c&&c!==0?this.each(function(){this.style.removeProperty(O(a))}):d=O(a)+":"+Q(a,c);else for(b in a)!a[b]&&a[b]!==0?this.each(function(){this.style.removeProperty(O(b))}):d+=O(b)+":"+Q(b,a[b])+";";return this.each(function(){this.style.cssText+=";"+d})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return e.some.call(this,function(a){return this.test(X(a))},P(a))},addClass:function(a){return this.each(function(b){d=[];var e=X(this),f=V(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&X(this,e+(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return X(this,"");d=X(this),V(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(P(a)," ")}),X(this,d.trim())})},toggleClass:function(b,d){return this.each(function(e){var f=c(this),g=V(this,b,e,X(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var a=this[0],b=this.offsetParent(),d=this.offset(),e=o.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||h.body;while(a&&!o.test(a.nodeName)&&c(a).css("position")=="static")a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=this[0],g=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?G(f)?f["inner"+g]:H(f)?f.documentElement["offset"+g]:(e=this.offset())&&e[b]:this.each(function(a){f=c(this),f.css(b,V(this,d,a,f[b]()))})}}),q.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,e=c.map(arguments,function(b){return a=E(b),a=="object"||a=="array"||b==null?b:A.fragment(b)}),f,g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=b==0?h.nextSibling:b==1?h.firstChild:b==2?h:null,e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();Z(f.insertBefore(a,h),function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),A.Z.prototype=c.fn,A.uniq=C,A.deserializeValue=Y,c.zepto=A,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/),m=a.match(/(BB10).*Version\/([\d.]+)/),n=a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),o=a.match(/PlayBook/),p=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),q=a.match(/Firefox\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),m&&(b.bb10=!0,b.version=m[2]),n&&(b.rimtabletos=!0,b.version=n[2]),o&&(c.playbook=!0),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0),p&&(c.chrome=!0,c.version=p[1]),q&&(c.firefox=!0,c.version=q[1]),b.tablet=!!(f||o||e&&!a.match(/Mobile/)||q&&a.match(/Tablet/)),b.phone=!b.tablet&&!!(e||g||h||l||m||p&&a.match(/Android/)||p&&a.match(/CriOS\/([\d.]+)/)||q&&a.match(/Mobile/))}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a){function g(a){return a._zid||(a._zid=d++)}function h(a,b,d,e){b=i(b);if(b.ns)var f=j(b.ns);return(c[g(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||f.test(a.ns))&&(!d||g(a.fn)===g(d))&&(!e||a.sel==e)})}function i(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function j(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function k(b,c,d){a.type(b)!="string"?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function l(a,b){return a.del&&(a.e=="focus"||a.e=="blur")||!!b}function m(a){return f[a]||a}function n(b,d,e,h,j,n){var o=g(b),p=c[o]||(c[o]=[]);k(d,e,function(c,d){var e=i(c);e.fn=d,e.sel=h,e.e in f&&(d=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return e.fn.apply(this,arguments)}),e.del=j&&j(d,c);var g=e.del||d;e.proxy=function(a){var c=g.apply(b,[a].concat(a.data));return c===!1&&(a.preventDefault(),a.stopPropagation()),c},e.i=p.length,p.push(e),b.addEventListener(m(e.e),e.proxy,l(e,n))})}function o(a,b,d,e,f){var i=g(a);k(b||"",d,function(b,d){h(a,b,d,e).forEach(function(b){delete c[i][b.i],a.removeEventListener(m(b.e),b.proxy,l(b,f))})})}function t(b){var c,d={originalEvent:b};for(c in b)!r.test(c)&&b[c]!==undefined&&(d[c]=b[c]);return a.each(s,function(a,c){d[a]=function(){return this[c]=p,b[a].apply(b,arguments)},d[c]=q}),d}function u(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={},f={mouseenter:"mouseover",mouseleave:"mouseout"};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:n,remove:o},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=g(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){n(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){o(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){n(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return o(d,b,a),c}})})};var p=function(){return!0},q=function(){return!1},r=/^([A-Z]|layer[XY]$)/,s={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){return this.each(function(e,f){n(f,c,d,b,function(c){return function(d){var e,g=a(d.target).closest(b,f).get(0);if(g)return e=a.extend(t(d),{currentTarget:g,liveFired:f}),c.apply(g,[e].concat([].slice.call(arguments,1)))}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){o(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return!c||a.isFunction(c)?this.bind(b,c||d):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return!c||a.isFunction(c)?this.unbind(b,c||d):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){if(typeof b=="string"||a.isPlainObject(b))b=a.Event(b);return u(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,g){d=t(typeof b=="string"?a.Event(b):b),d.data=c,d.target=g,a.each(h(g,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){typeof a!="string"&&(b=a,a=b.type);var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c.isDefaultPrevented=function(){return this.defaultPrevented},c}}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a=a.split(";",2)[0]),a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){a.processData&&a.data&&$.type(a.data)!="string"&&(a.data=$.param(a.data,a.traditional)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function parseArguments(a,b,c,d){var e=!$.isFunction(b);return{url:a,data:e?b:undefined,success:e?$.isFunction(c)?c:undefined:b,dataType:e?d||c:c}}function serialize(a,b,c,d){var e,f=$.isArray(b);$.each(b,function(b,g){e=$.type(g),d&&(b=c?d:d+"["+(f?"":b)+"]"),!d&&f?a.add(g.name,g.value):e=="array"||!c&&e=="object"?serialize(a,g,c,b):a.add(b,g)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){if("type"in a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){clearTimeout(g),$(c).remove(),delete window[b]},e=function(c){d();if(!c||c=="timeout")window[b]=empty;ajaxError(null,c||"abort",f,a)},f={abort:e},g;return ajaxBeforeSend(f,a)===!1?(e("abort"),!1):(window[b]=function(b){d(),ajaxSuccess(b,f,a)},c.onerror=function(){e("error")},c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(g=setTimeout(function(){e("timeout")},a.timeout)),f)}return $.ajax(a)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,xhr.status?"error":"abort",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b,c,d){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(a,b,c,d){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(a,b,c){var d=parseArguments.apply(null,arguments);return d.dataType="json",$.ajax(d)},$.fn.load=function(a,b,c){if(!this.length)return this;var d=this,e=a.split(/\s/),f,g=parseArguments(a,b,c),h=g.success;return e.length>1&&(g.url=e[0],f=e[1]),g.success=function(a){d.html(f?$("<div>").html(a.replace(rscript,"")).find(f):a),h&&h.apply(d,arguments)},$.ajax(g),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a,b){function s(a){return t(a.replace(/([a-z])([A-Z])/,"$1-$2"))}function t(a){return a.toLowerCase()}function u(a){return d?d+a:t(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k,l,m,n,o,p,q,r={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+t(a)+"-",d=e,!1}),k=c+"transform",r[l=c+"transition-property"]=r[m=c+"transition-duration"]=r[n=c+"transition-timing-function"]=r[o=c+"animation-name"]=r[p=c+"animation-duration"]=r[q=c+"animation-timing-function"]="",a.fx={off:d===b&&i.style.transitionProperty===b,speeds:{_default:400,fast:200,slow:600},cssPrefix:c,transitionEnd:u("TransitionEnd"),animationEnd:u("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isPlainObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c=(typeof c=="number"?c:a.fx.speeds[c]||a.fx.speeds._default)/1e3),this.anim(b,c,d,e)},a.fn.anim=function(c,d,e,f){var g,h={},i,t="",u=this,v,w=a.fx.transitionEnd;d===b&&(d=.4),a.fx.off&&(d=0);if(typeof c=="string")h[o]=c,h[p]=d+"s",h[q]=e||"linear",w=a.fx.animationEnd;else{i=[];for(g in c)j.test(g)?t+=g+"("+c[g]+") ":(h[g]=c[g],i.push(s(g)));t&&(h[k]=t,i.push(k)),d>0&&typeof c=="object"&&(h[l]=i.join(", "),h[m]=d+"s",h[n]=e||"linear")}return v=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(w,v)}a(this).css(r),f&&f.call(this)},d>0&&this.bind(w,v),this.size()&&this.get(0).clientLeft,this.css(h),d<=0&&setTimeout(function(){u.each(function(){v.call(this)})},0),this},i=null}(Zepto);

(function(exports){
  var self;
  var TOUCH_SUPPORTED   = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? true : false;
  var EASING            = 0.7;
  var BRUSH_PRESSURE    = 0.5;
  var COLOR             = [0, 0, 0];
  var STROKE_STYLE      = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + BRUSH_PRESSURE + ")";
  var REFRESH_RATE      = 5;
  var MAX_STROKES       = 12;
  var BRUSH_SIZE        = 2.5;
  var MOUSE_DOWN        = "mousedown";
  var MOUSE_MOVE        = "mousemove";
  var MOUSE_UP          = "mouseup";
  if (!!TOUCH_SUPPORTED) {
    MOUSE_DOWN          = "touchstart";
    MOUSE_MOVE          = "touchmove";
    MOUSE_UP            = "touchend";
  } else {
    REFRESH_RATE        = 10;
    MAX_STROKES         = 100;
    BRUSH_SIZE          = 2.5;
  }

  var SignatureMark = function(canvas) {
    if(!(this instanceof SignatureMark)){
      return new SignatureMark(canvas);
    }

    this.canvas               = canvas;
    this.context              = this.canvas.getContext('2d');
    this.context.lineWidth    = BRUSH_SIZE;
    this.context.strokeStyle  = STROKE_STYLE;
    this.painters             = [];
    this.mouseX               = 0;
    this.mouseY               = 0;
    this.strokeIntervals      = [];
    
    self                      = this;

    this.init();

    return this;
  };

  SignatureMark.prototype.Offset = function(element) {
    if (element === undefined) return null;
    var obj = element.getBoundingClientRect();
    return {
      left: obj.left + window.pageXOffset,
      top: obj.top + window.pageYOffset
    };
  };

  SignatureMark.prototype.init = function() {
    this.setupPainters();

    this.canvas.addEventListener(MOUSE_DOWN, this.onCanvasMouseDown, false);
    this.canvas.addEventListener(MOUSE_MOVE, this.onCanvasMouseMove, false);
    this.canvas.addEventListener('contextmenu', this.preventRightClick, false);

    document.addEventListener(MOUSE_UP, this.onCanvasMouseUp, false);
    this.canvas.addEventListener(MOUSE_UP, this.onCanvasMouseUp, false);    
  };

  SignatureMark.prototype.setupPainters = function() {
      self.painters = [];
      for(var i = 0; i < MAX_STROKES; i++) {
        var ease = Math.random() * 0.05 + EASING;
        self.painters.push({
          dx : 0,
          dy : 0,
          ax : 0,
          ay : 0,
          div : 0.1,
          ease : ease
        });
      }
  };

  SignatureMark.prototype.drawStroke = function() {
    var i;
    for(i = 0; i < self.painters.length; i++) {
      self.context.beginPath();
      
      pntr = self.painters[i];
      self.context.moveTo(pntr.dx, pntr.dy);
      var dx1 = pntr.ax = (pntr.ax + (pntr.dx - self.mouseX) * pntr.div) * pntr.ease;
      pntr.dx -= dx1;
      var dx2 = pntr.dx;
      var dy1 = pntr.ay = (pntr.ay + (pntr.dy - self.mouseY) * pntr.div) * pntr.ease;
      pntr.dy -= dy1;
      var dy2 = pntr.dy;
      self.context.lineTo(dx2, dy2);
      self.context.stroke();
    }
  };

  SignatureMark.prototype.startDrawingStroke = function() {
    var interval = setInterval(self.drawStroke, REFRESH_RATE);
    self.strokeIntervals.push(interval);
  };

  SignatureMark.prototype.stopDrawingStroke = function() {
    for(var i = 0; i < self.strokeIntervals.length; i++) {
      clearInterval(self.strokeIntervals[i]);
    }
  };

  SignatureMark.prototype.setPainters = function() {
    for(var i = 0; i < self.painters.length; i++) {
      pntr    = self.painters[i];
      pntr.dx = self.mouseX;
      pntr.dy = self.mouseY;
    }
  };

  SignatureMark.prototype.preventRightClick = function(e) {
    e.preventDefault();
  };

  SignatureMark.prototype.onCanvasMouseDown = function(e) {
    e.preventDefault();
    self.setCanvasOffset();
    self.startDrawingStroke();
    self.setMouseXAndMouseY(e);
    self.setPainters();
  };

  SignatureMark.prototype.onCanvasMouseMove = function(e) {
    e.preventDefault();
    self.setMouseXAndMouseY(e);
  };

  SignatureMark.prototype.onCanvasMouseUp = function(e) {
    self.stopDrawingStroke();
  };

  SignatureMark.prototype.setMouseXAndMouseY = function(e) {
    if (!!TOUCH_SUPPORTED) {
      target                 = event.touches[0];
      self.mouseX            = target.pageX - self.canvasOffsetLeft;
      self.mouseY            = target.pageY - self.canvasOffsetTop;
    } else {
      self.mouseX            = event.pageX - self.canvasOffsetLeft;
      self.mouseY            = event.pageY - self.canvasOffsetTop;
    }
  };

  SignatureMark.prototype.setCanvasOffset = function() {
    canvasOffset              = self.Offset(self.canvas);
    self.canvasOffsetLeft     = canvasOffset.left;
    self.canvasOffsetTop      = canvasOffset.top;
  };

  exports.SignatureMark = SignatureMark;

}(this));

(function(exports){
  var SignaturePad = function() {
    if(!(this instanceof SignaturePad)){
      return new SignaturePad();
    }

    this.endpoint  = "https://www.signature.io";
    this.uuid      = this.Uuid();
    this.script    = this.CurrentlyExecutedScript();
    if (this.script) {
      this.key      = this.script.getAttribute("data-signature-key");

      var data_signature_endpoint = this.script.getAttribute("data-signature-endpoint");
      if (data_signature_endpoint) {
        this.endpoint = data_signature_endpoint;
      }
    }

    this.init();

    return this;
  };

  SignaturePad.prototype.init = function() {
    if (this.script) {
      this.script.className += " signature-pad-script";
      this.script.id        = "signature-pad-script-"+this.uuid;

      this.draw();
      this.events();
      SignatureMark(this.canvas);
    } else {
      console.error("Could not find script tag to initialize on.");
    }
  };

  exports.SignaturePad = SignaturePad;

}(this));

(function(SignaturePad){
  var DEFAULT_SIGNATURE = "data:image/gif;base64,R0lGODlhRAIEAaIAAOLi1v7+5enp2ubm2Pf34e7u3QAAAAAAACH5BAAHAP8ALAAAAABEAgQBAAP/GLrc/jDKSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAMKHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mix/6PHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169g5CADAnUCE7QAEZE9DgDuAARAKmB+vZoB57w3Ud2dP3rx4BuXn009jHgD8AP/5AVDAfmrIF94C5g1IoBr9eQfefQumYWABBkbIRn/vWbgGeBlqqEaAAnq4BogKingGiNyZiAaG+qk4xoMBoueiGPLJ2OCMYBgIn4EQ4rhFgP8FcKOPWgRYogITEqlFgg/0pyQWD6bHZAMsYuhAlVZSieV6Wm4JwJVeftnllmB6WSaZY2J5ppppVrmmm22y+KaccWbJQJhi3hnmnHYiuGedTgLKpZ5mCpqioXn6WSihaDLKpqNwQkrnC1FGEKiklyraqKaPchqpp5OC2qcCePKZKal/YnqqkKmKumqpiJo6qKuzoroorYeqWiurt9q6qa+dAvupsKESOyqvvyIbrLKKwzJbLAsERDtBtNIaKmuuuCZq7KutbrsrrLpi6624zh4LbrbXalsut72u+2237pJ77rjqzhtvvfDaq2++/LZr75MAByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8cUYZ6zxxhx37PHHIIcs8sgkl2zyySinrPLKLLfs8sswxyzzzDTXbPPNbiUAADs=";

  SignaturePad.prototype.draw = function() {   
    this._drawCss();
    this._drawPad();
    this._drawOverlay();
    this._drawRotator();
    this.setSize();
  };

  SignaturePad.prototype.setSize = function(e) {
    if (this.StandardScreen()) {
      this.wrapper.width        = 580;
      this.wrapper.setAttribute("style","width:580px");
      this.canvas.height        = 260;
      this.canvas.width         = 580;
    } else {
      // set for iPhone
      this.wrapper.style.width  = 446;
      this.wrapper.setAttribute("style","width:446px");
      this.wrapper.className    += " signature-iphone";
      this.canvas.height        = 200;
      this.canvas.width         = 446;
    }
  };

  SignaturePad.prototype._drawPad = function() {
    this.pad                          = document.createElement('div');
    // this.pad.setAttribute("style", "display:none");
    this.pad.className                = "signature-pad";
    this.pad.id                       = "signature-pad-"+this.uuid;

    this.hidden_field                 = document.createElement('input');
    this.hidden_field.className       = "signature-hidden-field";
    this.hidden_field.id              = "signature-hidden-field-"+this.uuid;
    this.hidden_field.type            = "hidden";
    this.hidden_field.name            = "signature_url";
    this.hidden_field.value           = "";
    this.pad.appendChild(this.hidden_field);

    this.pad_img                      = document.createElement('img');
    this.pad_img.className            = "signature-pad-img";
    this.pad_img.id                   = "signature-pad-img-"+this.uuid;
    this.pad_img.src                  = DEFAULT_SIGNATURE;
    this.pad.appendChild(this.pad_img);
    
    var pad_msg                       = document.createElement('div');
    var text_click_sign               = document.createTextNode("Click to Sign");
    var pad_msg_icon                  = document.createElement('span');
    pad_msg_icon.setAttribute("data-icon", "A");

    pad_msg.className                 = "signature-pad-msg";
    pad_msg.id                        = "signature-pad-msg-"+this.uuid;

    pad_msg.appendChild(text_click_sign);
    pad_msg.appendChild(pad_msg_icon);
    this.pad.appendChild(pad_msg);

    return this.InsertAfter(this.script, this.pad);
  };

  SignaturePad.prototype._drawOverlay = function() {
    this.overlay                    = document.createElement('div');
    // this.overlay.setAttribute("style", "display:none");
    this.overlay.className          = "signature-overlay";
    this.overlay.id                 = "signature-overlay-"+this.uuid;

    this.wrapper                    = document.createElement('div');
    this.wrapper.className          = "signature-wrapper";
    this.wrapper.id                 = "signature-wrapper-"+this.uuid;
    this.overlay.appendChild(this.wrapper);

    this.canvas                     = document.createElement('canvas');
    this.canvas.className           = "signature-canvas";
    this.canvas.id                  = "signature-canvas-"+this.uuid;

    this.close_signature            = document.createElement('a');
    var text_x                      = document.createTextNode(" x ");
    var pad_close_icon              = document.createElement('span');
    pad_close_icon.setAttribute("data-icon", "G");

    this.close_signature.className  = "signature-btn close-signature-btn";
    this.close_signature.id         = "close-signature-btn-"+this.uuid;
    this.close_signature.appendChild(text_x);
    this.close_signature.appendChild(pad_close_icon); 

    this.clear_signature            = document.createElement('a');
    var text_clear                  = document.createTextNode("Clear");

    this.clear_signature.className  = "signature-btn clear-signature-btn";
    this.clear_signature.id         = "clear-signature-btn-"+this.uuid;
    this.clear_signature.appendChild(text_clear);

    this.add_signature              = document.createElement('a');
    var text_done                   = document.createTextNode("Done");
    var pad_done_icon               = document.createElement('span');
    pad_done_icon.setAttribute("data-icon", "A");

    this.add_signature.className    = "signature-btn add-signature-btn";
    this.add_signature.id           = "add-signature-btn-"+this.uuid;
    this.add_signature.appendChild(text_done);
    this.add_signature.appendChild(pad_done_icon);

    var clearer                     = document.createElement('div');
    clearer.className               = "signature-clearer";

    this.wrapper.appendChild(this.canvas);
    this.wrapper.appendChild(this.close_signature);
    this.wrapper.appendChild(this.clear_signature);
    this.wrapper.appendChild(this.add_signature);
    this.wrapper.appendChild(clearer);

    return document.body.appendChild(this.overlay);
  };

  SignaturePad.prototype._drawRotator = function() {
    this.rotator                    = document.createElement('div');
    // this.rotator.setAttribute("style", "display:none");
    this.rotator.className          = "signature-rotator";
    this.rotator.id                 = "signature-rotator-"+this.uuid;

    var rotator_msg                 = document.createElement('div');
    rotator_msg.className           = "signature-rotator-msg";
    var text_rotate                 = document.createTextNode("Rotate 90\u00B0");
    rotator_msg.appendChild(text_rotate);

    var rotator_icon                = document.createElement('div');
    rotator_icon.className          = "signature-rotator-icon";
    rotator_icon.setAttribute("data-icon", "L");

    this.rotator_close              = document.createElement('div');
    this.rotator_close.className    = "signature-rotator-close";
    this.rotator_close.id           = "signature-rotator-close-"+this.uuid;
    var text_x = document.createTextNode(" x ");
    this.rotator_close.appendChild(text_x);

    this.rotator.appendChild(rotator_msg);
    this.rotator.appendChild(rotator_icon);
    this.rotator.appendChild(this.rotator_close);

    return document.body.appendChild(this.rotator);
  };

  SignaturePad.prototype._drawCss = function() {
    this.css = "@font-face{font-family:'Pictos Pad';src:url(data:font/truetype;charset=utf-8;base64,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) format('truetype');src:url(data:font/woff;charset=utf-8;base64,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) format('woff');font-weight:normal;font-style:normal}"+
      ".signature-pad{position:relative;cursor:pointer;text-decoration:underline;background:rgba(253,253,0,0.1);width:200px;height:90px;border:2px dashed #cbd0d5;text-decoration:none}"+
      ".signature-pad [data-icon]:after{font-family:'Pictos Pad'!important;content:attr(data-icon);padding-left:5px}"+
      ".signature-pad .signature-pad-msg{position:absolute;color:#313440;font-family:sans-serif;font-size:14px;background:#eceef1;color:#313440;padding:0;filter:alpha(opacity=80);opacity:.80;top:0;right:0;text-align:center;padding:10px 35px 10px 10px}"+
      ".signature-pad .signature-pad-msg span{line-height:100%;position:absolute;top:4px;right:5px;font-size:30px;height:29px}"+
      ".signature-pad .signature-pad-img{position:absolute;top:0;left:0;width:100%;height:100%;border:none}"+
      ".signature-rotator{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:#dd4a38;z-index:1;text-align:center;font-family:sans-serif;z-index:99999999}"+
      ".signature-rotator [data-icon]:after{font-family:'Pictos Pad'!important;content:attr(data-icon);padding-left:5px}"+
      ".signature-rotator.signature-show{display:block}"+
      ".signature-rotator div{position:absolute;left:60%;top:44%;width:100%;margin-left:-50%;text-align:center;font-size:100px;line-height:100%}"+
      ".signature-rotator .signature-rotator-icon{top:37%;left:40%}"+
      ".signature-rotator .signature-rotator-msg{font-size:40px;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);filter:progid:dximagetransform.microsoft.basicimage(rotation=3)}"+
      ".signature-rotator .signature-rotator-close{font-size:50px;top:0;left:0;color:#9c3528;display:block;cursor:pointer;width:50px;margin-left:0;text-align:center}"+
      ".signature-overlay{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:#eceef1;z-index:88888888}"+
      ".signature-overlay.signature-show{display:block}"+
      ".signature-overlay .signature-clearer{clear:both}"+
      ".signature-overlay .signature-powered-by{float:right;filter:alpha(opacity=80);opacity:.80;text-decoration:none;display:block}"+
      ".signature-overlay .signature-powered-by text{text-decoration:none}"+
      ".signature-overlay .signature-wrapper{display:block;position:relative;width:100%;max-width:580px;margin:0 auto;margin-top:120px;background:none}"+
      ".signature-overlay .signature-wrapper.signature-iphone{margin-top:3px}"+
      ".signature-overlay .signature-wrapper [data-icon]:after{font-family:'Pictos Pad'!important;content:attr(data-icon);padding-left:5px}"+
      ".signature-overlay canvas{cursor:pointer;background:#fff;background:url(data:image/gif;base64,R0lGODlhRAIEAaIAAOHh4f///+bm5u/v7/j4+AAAAAAAAAAAACH5BAAHAP8ALAAAAABEAgQBAAP/SLHc/jDKSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAMKHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mix/6PHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169izcxAAoLuCCALCD9CuZkB3AAIimEdPfg337uMdrBfwvT0aAufTN1gPgEB9+/9nvNcfAwS8Fx+AafBHnwLhCTDAfwiecV5/BTboX4TlnTfAfBBiKOGE3nnIBn8hirgGfhqayAaK8KmoRoET6ufihyB2OCMY4aHHIgA3ksFhAAIe2KMXPwag4JBfsFjfjv7ZiOQULApppIYXPnlFhQBIucCETloJxXsyypeiAyCW+UCZZpKJ5oRnrnlem27yqGacEMbp3X92UthAnlVuaWefAfCJp51wulnomoeimWiaexI6p6GPrlnnn4PSWambgAraqKWbQtopopEqGiqjDOQpw3wTsDmqqp+K2iqpfsa5KIizcnkpqK/SuqqtubJa6p+7vhlsd7UK26uxv8o6rJynxxK7bKaONstsspje6iq1ki5brLPSbjttrJ6+0GSX43YYLbbXgosrurAGeq666bqrbLfa1kvvvezqii+87Zpqb76+8qsvwMgKHLC84RpcMMLrKswtwQ87/C3D8frr5cUYZ6zxxhx37PHHIIcs8sgkl2zyySinrPLKLLfs8sswxyzzzDTXbPPNOOes88489+zzz0AHLfTQRBdt9NFIJ6300kw37fRcCQAAOw%3D%3D) no-repeat;background-size:100%;zoom:1;border:2px solid #cbd0d5;border-top:none;border-left:none}"+
      ".signature-overlay canvas:active{cursor:crosshair}"+
      ".signature-overlay .signature-btn{font-family:sans-serif;position:absolute;padding:9px;cursor:pointer;font-size:14px;text-align:center;background:#eceef1;color:#313440;-webkit-appearance:none;border:none;filter:alpha(opacity=50);opacity:.50;line-height:100%;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px}"+
      ".signature-overlay .signature-btn:hover{text-decoration:none}"+
      ".signature-overlay .signature-btn span{position:absolute;top:10.5px;right:5px;font-size:20px;filter:alpha(opacity=80);opacity:.80}"+
      ".signature-overlay .signature-btn.close-signature-btn{top:5px;left:5px;padding:9px 14px 9px 14px;color:#eceef1}"+
      ".signature-overlay .signature-btn.close-signature-btn span{color:#313440;right:10px}"+
      ".signature-overlay .signature-btn.clear-signature-btn{top:5px;left:45px}"+
      ".signature-overlay .signature-btn.add-signature-btn{top:10px;right:10px;padding-right:34px;border:2px solid #cbd0d5;border-top:1px solid #cbd0d5;border-left:1px solid #cbd0d5;text-transform:uppercase;filter:alpha(opacity=80);opacity:.80}"+
      ".signature-overlay .signature-btn.add-signature-btn span{top:9px;font-size:30px}";

    var style   = document.createElement('style');
    style.type  = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = this.css;
    } else {
      style.appendChild(document.createTextNode(this.css));
    }
    return document.body.appendChild(style);
  };

}(SignaturePad));

(function(SignaturePad){
  var self;
  var CLICK             = "click";
  var TOUCH_SUPPORTED   = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? true : false;
  if (!!TOUCH_SUPPORTED) {
    CLICK               = "touchend";
  }

  SignaturePad.prototype.events = function() {
    self = this;

    Zepto(this.pad).on(CLICK, this.show);
    Zepto(this.add_signature).on(CLICK, this.saveSignature);
    Zepto(this.close_signature).on(CLICK, this.hide);
    Zepto(this.clear_signature).on(CLICK, this.clear);
    Zepto(this.wrapper).on(CLICK, function(e) { e.stopPropagation(); });
    Zepto(this.rotator_close).on(CLICK, this.hideRotatorAndPad);
    Zepto(window).resize(this.showOrHideRotator);
  };

  SignaturePad.prototype.saveSignature = function(e) {
    var data_url = self.canvas.toDataURL("png");
    Zepto(self.script).trigger("signature_pad:data_url", data_url);

    self.hide(e);
    self.pad_img.src = data_url;
  };

  SignaturePad.prototype.show = function(e){
    if (e) { e.preventDefault(); }

    self.overlay.className += " signature-show";

    self.showOrHideRotator();
  };

  SignaturePad.prototype.hide = function(e){
    if (e) { e.preventDefault(); }

    self.overlay.className = "signature-overlay";
  };

  SignaturePad.prototype.clear = function(e) {
    if (e) { e.preventDefault(); }

    var context = self.canvas.getContext("2d");
    context.clearRect(0, 0, self.canvas.width, self.canvas.height);
  };

  SignaturePad.prototype.showOrHideRotator = function(e) {
    if (e) { e.preventDefault(); }

    if (!self.StandardScreen() && self.visible()) {
      var mql = window.matchMedia("(orientation: portrait)");
      if(mql.matches) {
        self.showRotator();
      } else {
        self.hideRotator();
      }
    } else {
      self.hideRotator();
    }
  };

  SignaturePad.prototype.visible = function(e){
    if (e) { e.preventDefault(); }

    return self.overlay.className.indexOf("signature-show") > 0;
  };

  SignaturePad.prototype.showRotator = function(e){
    if (e) { e.preventDefault(); }

    if (self.visible()) {
      self.rotator.className += " signature-show";
    }
  };

  SignaturePad.prototype.hideRotator = function(e){
    if (e) { e.preventDefault(); }

    self.rotator.className = "signature-rotator";
  };

  SignaturePad.prototype.hideRotatorAndPad = function(e) {
    if (e) { e.preventDefault(); }

    self.hide();
    self.hideRotator();
  };
}(SignaturePad));

(function(SignaturePad){  
  SignaturePad.prototype.Uuid = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r, v;
      r = Math.random() * 16 | 0;
      v = (c === "x" ? r : r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  SignaturePad.prototype.CurrentlyExecutedScript = function() {
    var script;

    if (document) {
      var scripts = document.getElementsByTagName('script');
      script      = scripts[scripts.length - 1];
    }
    return script;
  };

  SignaturePad.prototype.InsertAfter = function(reference_node, new_node) {
    return reference_node.parentNode.insertBefore(new_node, reference_node.nextSibling);
  };
  
  SignaturePad.prototype.StandardScreen = function() {
    return document.body.clientWidth >= 580;
  };
}(SignaturePad));

var signature_pad = SignaturePad();