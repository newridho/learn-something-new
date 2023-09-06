var s ='';
for( var i = 0; i <= 10; i++ ) {
	for( var j = 0; j <= i; j++ ) {
		s += '*';
	}
	s+= '\n';
}

var ab='';
for( var a = 10; a > 0; a-- ) {
	for( var b = 0; b < a; b++ ) {
		ab += '*';
	}
	ab+= '\n';
}

console.log(s);
console.log(ab);