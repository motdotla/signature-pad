/*! signature-pad.js - 0.0.1 - 2013-05-25 - scottmotte */
(function(t){var e=function(t,n){return this instanceof e?(t.prototype=this,"function"==typeof n&&n(t),t):new e(t)};e.prototype=e.plus={},e.prototype.getState=function(){return this.__state},t.Marrow=e})(this),function(t){t.prototype.__events=function(){this._events={}},t.prototype.on=function(t,e){return"function"==typeof e&&"string"==typeof t&&(this._events||this.__events(),"object"!=typeof this._events[t]&&(this._events[t]=[]),"number"==typeof this._events[t].length&&this._events[t].push(e)),this},t.prototype.emit=function(t){if("object"==typeof this._events&&"string"==typeof t&&"object"==typeof this._events[t]&&this._events[t].length)for(var e=[].slice.call(arguments),n=0;this._events[t].length>n;n+=1)this._events[t][n].apply(this,e.slice(1))}}(Marrow),function(t){t.prototype.__extend=function(t,e,n){var o=this;this[t]=function(){"function"==typeof this[n]&&o[n].apply(this,arguments),"number"==typeof e&&(o.__state=e),o.emit(t)}},t.prototype.to=function(t,e,n){if("string"==typeof t&&"function"==typeof e){var o="__"+t;this[o]=e,this.__extend(t,n,o)}}}(Marrow);

/*! signature-mark.js - 0.0.1 - 2013-05-21 - scottmotte */
(function(exports){
  var SignatureMark = function(canvas) {
    if(!(this instanceof SignatureMark)){
      return new SignatureMark(canvas);
    }

    this.canvas = canvas;
    this.init();

    return this;
  };

  SignatureMark.prototype.init = function() {
    this.initVariables();
    this.initPainters();
    this.initEvents();
  };

  exports.SignatureMark = SignatureMark;

}(this));

(function(SignatureMark){
  SignatureMark.prototype.initEvents = function() {
    var self = this;
    self.canvas.addEventListener(self.mouse_down, function(e)     { self.onCanvasMouseDown(self, e); }, false);
    self.canvas.addEventListener(self.mouse_move, function(e)     { self.onCanvasMouseMove(self, e); }, false);
    self.canvas.addEventListener('contextmenu', function(e)       { self.preventRightClick(self, e); }, false);

    document.addEventListener(self.mouse_up, function(e)          { self.onCanvasMouseUp(self, e); }, false);
    self.canvas.addEventListener(self.mouse_up, function(e)       { self.onCanvasMouseUp(self, e); }, false);  
  };

  SignatureMark.prototype.preventRightClick = function(self, e) {
    e.preventDefault();
  };

  SignatureMark.prototype.onCanvasMouseDown = function(self, e) {
    e.preventDefault();
    self.setCanvasOffset(self);
    self.startDrawingStroke(self);
    self.setMouseXAndMouseY(self, e);
    self.setPainters(self);
  };

  SignatureMark.prototype.onCanvasMouseMove = function(self, e) {
    e.preventDefault();
    self.setMouseXAndMouseY(self, e);
  };

  SignatureMark.prototype.onCanvasMouseUp = function(self, e) {
    self.stopDrawingStroke(self);
  };

  SignatureMark.prototype.setMouseXAndMouseY = function(self, event) {
    if (!!self.touch_supported) {
      target                 = event.touches[0];
      self.mouseX            = target.pageX - self.canvasOffsetLeft;
      self.mouseY            = target.pageY - self.canvasOffsetTop;
    } else {
      self.mouseX            = event.pageX - self.canvasOffsetLeft;
      self.mouseY            = event.pageY - self.canvasOffsetTop;
    }
  };

  SignatureMark.prototype.setCanvasOffset = function(self) {
    canvasOffset              = self.Offset(self.canvas);
    self.canvasOffsetLeft     = canvasOffset.left;
    self.canvasOffsetTop      = canvasOffset.top;
  };
}(SignatureMark));

(function(SignatureMark){
  SignatureMark.prototype.Offset = function(element) {
    if (element === undefined) return null;
    var obj = element.getBoundingClientRect();
    return {
      left: obj.left + window.pageXOffset,
      top: obj.top + window.pageYOffset
    };
  };
}(SignatureMark));

(function(SignatureMark){  
  SignatureMark.prototype.initPainters = function() {
    this.painters = [];
    for(var i = 0; i < this.max_strokes; i++) {
      var ease = Math.random() * 0.05 + this.easing;
      this.painters.push({
        dx : 0,
        dy : 0,
        ax : 0,
        ay : 0,
        div : 0.1,
        ease : ease
      });
    }
  };

  SignatureMark.prototype.setPainters = function(self) {
    for(var i = 0; i < self.painters.length; i++) {
      pntr    = self.painters[i];
      pntr.dx = self.mouseX;
      pntr.dy = self.mouseY;
    }
  };
}(SignatureMark));

(function(SignatureMark){
  SignatureMark.prototype.drawStroke = function(self) {
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

  SignatureMark.prototype.startDrawingStroke = function(self) {
    var interval = setInterval(function() { self.drawStroke(self); }, self.refresh_rate);
    self.strokeIntervals.push(interval);
  };

  SignatureMark.prototype.stopDrawingStroke = function(self) {
    for(var i = 0; i < self.strokeIntervals.length; i++) {
      clearInterval(self.strokeIntervals[i]);
    }
  };
}(SignatureMark));

(function(SignatureMark){
  SignatureMark.prototype.initVariables = function() {
    this.touch_supported      = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? true : false;
    this.context              = this.canvas.getContext('2d');
    this.color                = [0, 0, 0];
    this.brush_pressure       = 0.5;
    this.context.strokeStyle  = "rgba(" + this.color[0] + ", " + this.color[1] + ", " + this.color[2] + ", " + this.brush_pressure + ")";
    this.context.lineWidth    = 2.5; // brush size
    this.painters             = [];
    this.mouseX               = 0;
    this.mouseY               = 0;
    this.strokeIntervals      = [];
    this.refresh_rate         = 5;
    this.max_strokes          = 12;
    this.easing               = 0.7;
    this.mouse_down           = "mousedown";
    this.mouse_move           = "mousemove";
    this.mouse_up             = "mouseup";

    if (!!this.touch_supported) {
      this.mouse_down         = "touchstart";
      this.mouse_move         = "touchmove";
      this.mouse_up           = "touchend";
    } else {
      this.refresh_rate       = 10;
      this.max_strokes        = 100;
    }
  };

}(SignatureMark));

(function(exports, Base){
  var SignaturePad = function() {
    if(!(this instanceof SignaturePad)){
      return new SignaturePad();
    }

    this.uuid      = this.Uuid();
    this.script    = this.CurrentlyExecutedScript();
    this.init();

    return this;
  };

  SignaturePad = Base(SignaturePad);

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

}(this, Marrow));

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

    this.pad.addEventListener(CLICK, this.show, false);
    this.add_signature.addEventListener(CLICK, this.saveSignature, false);
    this.close_signature.addEventListener(CLICK, this.hide, false);
    this.clear_signature.addEventListener(CLICK, this.clear, false);
    this.wrapper.addEventListener(CLICK, function(e) { e.stopPropagation(); }, false);
    this.rotator_close.addEventListener(CLICK, this.hideRotatorAndPad, false);
    this.rotator_close.addEventListener(CLICK, this.hideRotatorAndPad, false);
    window.onresize = function(e) { self.showOrHideRotator(e); };
  };

  SignaturePad.prototype.saveSignature = function(e) {
    var data_url = self.canvas.toDataURL("png");
    self.FireEvent("signature_pad:data_url", self.script, data_url);
    self.hide(e);
    self.pad_img.src = data_url;
    self.emit("signed", data_url, self.script); // emit image to signed event
  };

  SignaturePad.prototype.show = function(e){
    if (e) { e.preventDefault(); }

    self.overlay.className += " signature-show";

    self.showOrHideRotator();
    self.emit("show"); // emit hide event
  };

  SignaturePad.prototype.hide = function(e){
    if (e) { e.preventDefault(); }

    self.overlay.className = "signature-overlay";
    self.emit("hide"); // emit hide event
  };

  SignaturePad.prototype.clear = function(e) {
    if (e) { e.preventDefault(); }

    var context = self.canvas.getContext("2d");
    context.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.emit("clear"); // emit clear event
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
      this.emit("script", script);
    }
    return script;
  };

  SignaturePad.prototype.InsertAfter = function(reference_node, new_node) {
    return reference_node.parentNode.insertBefore(new_node, reference_node.nextSibling);
  };
  
  SignaturePad.prototype.StandardScreen = function() {
    return document.body.clientWidth >= 580;
  };

  SignaturePad.prototype.FireEvent = function(name, target, data) {
    //Create a generic event
    var bubbles     = true;
    var cancelable  = true;
    var event       = document.createEvent("Events");
    //Initialize it to be the event we want
    event.initEvent(name, bubbles, cancelable);
    event.data = data;
    //FIRE!
    target.dispatchEvent(event);
  };


}(SignaturePad));

if(SignaturePads){
	_signature_pad_count += 1;
}else{
	var _signature_pad_count = 0;
	var SignaturePads = {};
}

SignaturePads[_signature_pad_count] = SignaturePad();