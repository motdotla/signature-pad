# SignaturePad - signature-pad.js

## Developer Setup

    npm install
    grunt

The editable files live in /src and are compiled to /build.

## Usage

Place a script tag containing the path to signature-pad.js wherever you want the signature pad to be displayed.

    <script src='/path/to/signature-pad.min.js'></script>

Optionally, bind to the signature_pad:data_url event to get a png data_url of the signature.

    <script type="text/javascript">
      Zepto('script').on('signature_pad:data_url', function(e, data_url){
        console.log(data_url);
      });
    </script> 
