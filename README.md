# signature-pad.js

Add a signing pad to your website or app.

```html
<script src='/path/to/signature-pad.min.js'></script>
<script type="text/javascript"> 
  signature_pad.script.addEventListener('signature_pad:data_url', function(e) {
    console.log(e.data);
  }, false);
</script>
```

## Usage

Place a script tag containing the path to signature-pad.js wherever you want the signature pad to be displayed.

```html
<script src='/path/to/signature-pad.min.js'></script>
```

Optionally, bind to the signature_pad:data_url event to get a [png data_url](http://css-tricks.com/data-uris/) of the signature.

```html
<script type="text/javascript"> 
  signature_pad.script.addEventListener('signature_pad:data_url', function(e) {
    console.log(e.data);
  }, false);
</script>
```

## Dev Setup

```
$ npm install -g grunt-cli
$ npm install
$ grunt
```
