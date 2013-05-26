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