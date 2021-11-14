self.onmessage = function(e) {
	encode(e);
};

function encode(e) {
	const data = encode(e);
	const array = Uint8Array.from(data, (b) => b.charCodeAt(0));
	const blob = new Blob([ array ], { type: 'image/jpg' });
	self.postMessage(blob);
}
