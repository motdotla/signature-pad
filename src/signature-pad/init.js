if(SignaturePads){
	_signature_pad_count += 1;
}else{
	var _signature_pad_count = 0;
	var SignaturePads = {};
}

SignaturePads[_signature_pad_count] = signature_pad = SignaturePad();