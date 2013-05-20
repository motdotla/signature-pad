(function(SignaturePad){  
  var htmlEvents = {
    //<body> and <frameset> Events
    onload:1,
    onunload:1,
    //Form Events
    onblur:1,
    onchange:1,
    onfocus:1,
    onreset:1,
    onselect:1,
    onsubmit:1,
    //Image Events
    onabort:1,
    //Keyboard Events
    onkeydown:1,
    onkeypress:1,
    onkeyup:1,
    //Mouse Events
    onclick:1,
    ondblclick:1,
    onmousedown:1,
    onmousemove:1,
    onmouseout:1,
    onmouseover:1,
    onmouseup:1
  };

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

  SignaturePad.prototype.Trigger = function(element, name, data) {
    if (data === null) {
      data = {};
    }

    if (window.Zepto) {
      return Zepto(element).trigger(name, data);
    }
  };

  SignaturePad.prototype.TriggerEvent = function(el, eventName) {
    var event;
    if(document.createEvent){
      event = document.createEvent('HTMLEvents');
      event.initEvent(eventName,true,true);
    }else if(document.createEventObject){// IE < 9
      event = document.createEventObject();
      event.eventType = eventName;
    }
    event.eventName = eventName;
    if(el.dispatchEvent){
      el.dispatchEvent(event);
    }else if(el.fireEvent && htmlEvents['on'+eventName]){// IE < 9
      el.fireEvent('on'+event.eventType,event);// can trigger only real event (e.g. 'click')
    }else if(el[eventName]){
      el[eventName]();
    }else if(el['on'+eventName]){
      el['on'+eventName]();
    }   
  };

  // SignaturePad.prototype.AddEvent = function(el, type, handler) {
  //   if(el.addEventListener){
  //     el.addEventListener(type,handler,false);
  //   }else if(el.attachEvent && htmlEvents['on'+type]){// IE < 9
  //     el.attachEvent('on'+type,handler);
  //   }else{
  //     el['on'+type]=handler;
  //   }
  // };

  // SignaturePad.prototype.RemoveEvent = function(el, type, handler) {
  //   if(el.removeventListener){
  //     el.removeEventListener(type,handler,false);
  //   }else if(el.detachEvent && htmlEvents['on'+type]){// IE < 9
  //     el.detachEvent('on'+type,handler);
  //   }else{
  //     el['on'+type]=null;
  //   }
  // };

}(SignaturePad));