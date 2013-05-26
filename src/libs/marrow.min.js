/*
 * Marrow.js - 0.0.8 
 * Description : Marrow is constructor that extends your constructors to help emit events and create a conventions to help manage components 
 * Project Url : https://github.com/jacoblwe20/marrow 
 * Author : Jacob Lowe <http://jacoblowe.me> 
 * License : MIT 
 */

(function(t){var e=function(t,n){return this instanceof e?(t.prototype=this,"function"==typeof n&&n(t),t):new e(t)};e.prototype=e.plus={},e.prototype.getState=function(){return this.__state},t.Marrow=e})(this),function(t){t.prototype.__events=function(){this._events={}},t.prototype.on=function(t,e){return"function"==typeof e&&"string"==typeof t&&(this._events||this.__events(),"object"!=typeof this._events[t]&&(this._events[t]=[]),"number"==typeof this._events[t].length&&this._events[t].push(e)),this},t.prototype.emit=function(t){if("object"==typeof this._events&&"string"==typeof t&&"object"==typeof this._events[t]&&this._events[t].length)for(var e=[].slice.call(arguments),n=0;this._events[t].length>n;n+=1)this._events[t][n].apply(this,e.slice(1))}}(Marrow),function(t){t.prototype.__extend=function(t,e,n){var o=this;this[t]=function(){"function"==typeof this[n]&&o[n].apply(this,arguments),"number"==typeof e&&(o.__state=e),o.emit(t)}},t.prototype.to=function(t,e,n){if("string"==typeof t&&"function"==typeof e){var o="__"+t;this[o]=e,this.__extend(t,n,o)}}}(Marrow);