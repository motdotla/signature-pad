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

  SignaturePad.prototype.Encode64 = function(input) {
    var char, chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, invalidChar, output, _i, _len, _ref,
    CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    output = '';
    i = 0;
    input = unescape(encodeURIComponent(input));
    while (i < input.length) {
      chr1 = input.charCodeAt(i++) || 0;
      chr2 = input.charCodeAt(i++) || 0;
      chr3 = input.charCodeAt(i++) || 0;
      invalidChar = Math.max(chr1, chr2, chr3);
      if (invalidChar > 0xFF) {
        throw (invalidChar + " is an invalid BASE64 character");
      }
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      _ref = [enc1, enc2, enc3, enc4];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        char = _ref[_i];
        output += CHARACTERS.charAt(char);
      }
    }
    return output;
  };

  SignaturePad.prototype.Post = function(url, data, callback) {
    var key = this.Encode64(data.key);
    delete data.key;

    Zepto.ajax({
      type:         'POST',
      url:          url,
      data:         JSON.stringify(data),
      headers:      {"Authorization": "Basic "+key},
      contentType:  'application/json',
      success: function(resp){
        callback(resp);
      },
      error: function(xhr, type){
        console.error('Ajax error!');
      }
    });
  };
}(SignaturePad));