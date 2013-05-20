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