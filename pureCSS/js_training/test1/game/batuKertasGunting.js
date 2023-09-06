var tanya = true;
while ( tanya ) {
	// menangkap pilihan player
	var p = prompt('pilih : batu, kertas, gunting');


	// menangkap pilihan computer
	// membangkitkan bilangan random
	var comp = Math.random();

	if( comp < 0.34 ) {
		comp = 'batu';
	} else if( comp >= 0.34 && comp < 0.67 ) {
		comp = 'gunting';
	} else {
		comp = 'kertas'; 
	}

	var hasil = '';
	// menentukan rules
	if( p === comp ) {
		hasil = 'SERI!';
	} else if( p == 'batu' ) {
		// if( comp == 'gunting' ) {
		// 	hasil = 'MENANG!';
		// } else {
		// 	hasil = 'KALAH!';
		// }
		hasil = ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH';
	} else if( p == 'gunting' ) {
		hasil = ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
	} else if( p == 'kertas' ) {
		hasil = ( comp == 'gunting' ) ? 'KALAH!' : 'MENANG!';
	} else {
		hasil = 'Memasukkan pilihan yang salah!';
	}


	// tampilkan hasilnya
	alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

	tanya = confirm('lagi');
}

alert('terima kasih sudah bermain');