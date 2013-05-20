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
    Zepto(document.body).trigger("signature_pad:data_url", data_url);

    self.hide(e);
    self.pad_img.src = data_url;

    self.postSignature(data_url);
  };

  SignaturePad.prototype.postSignature = function(data_url) {
    var payload = {data_url: data_url, key: self.key};
    self.Post(self.endpoint+'/api/v0/signatures.json', payload, function(resp){
      if (!!resp.success) {
        self.hidden_field.value = resp.signature.url;
        Zepto(document.body).trigger("signature_pad:save", resp.signature);
      } else {
        console.error(resp.error.message);
      }
    });
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