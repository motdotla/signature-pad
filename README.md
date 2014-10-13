# signature-pad.js

Add a signing pad to your website or app.

```html
<script src='/path/to/signature-pad.min.js'></script>
<script type="text/javascript"> 
  signature_pad.bind('signature_pad.data_url', function(result) {
    console.log('signature_pad.data_url', result);
  });
</script>
```

![](https://raw.github.com/signatureio/signature-pad/master/screenshot1.png)
![](https://raw.github.com/signatureio/signature-pad/master/screenshot2.png)

## Usage

Place a script tag containing the path to signature-pad.js wherever you want the signature pad to be displayed.

```html
<script src='/path/to/signature-pad.min.js'></script>
```

Optionally, bind to the signature_pad.data_url event to get a [png data_url](http://css-tricks.com/data-uris/) of the signature.

```html
<script type="text/javascript"> 
  signature_pad.bind('signature_pad.data_url', function(result) {
    console.log('signature_pad.data_url', result);
  });
</script>
```

## Dev Setup

Edit only files under `/src` directory. Then run the following to generate the `/build` directory.

```
npm install
grunt
```

Visit <http://localhost:3000> to test out your changes.
