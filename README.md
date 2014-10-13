# signature-pad.js

Add a signing pad to your website or app. Try the [demo](http://codepen.io/motdotla/full/bKIuB/).

```html
<script src='/path/to/signature-pad.min.js'></script>
```

<img src="https://raw.githubusercontent.com/motdotla/signature-pad/master/signature-pad.gif" alt="signature-pad" />

## Usage

Place a script tag containing the path to signature-pad.js wherever you want the signature pad to be displayed.

```html
<script src='/path/to/signature-pad.min.js'></script>
```

### Events

#### signature_pad.data_url

Bind to the signature_pad.data_url event to get a [png data_url](http://css-tricks.com/data-uris/) of the signature.

```html
<script type="text/javascript"> 
  signature_pad.bind('signature_pad.data_url', function(result) {
    console.log('signature_pad.data_url', result);
  });
</script>
```

## Development Setup

Edit only files under `/src` directory. Then run the following to generate the `/build` directory.

```
npm install
grunt
```

Visit <http://localhost:3000> to test out your changes.
