let kertas = document.getElementById('kertas');
let gunting = document.getElementById('gunting');
let batu = document.getElementById('batu');
let reset = document.getElementById('reset');

// simpan nilai suit untuk komputer
const enemy = ["gunting","kertas","batu"];

// variabel untuk menampung semua elemen button
let tombols = document.querySelectorAll('button');
let nilaiPemain = document.getElementById("nilaiPemain");
let nilaiKomputer = document.getElementById("nilaiKomputer");
let tempat = document.getElementById('tempat');

let wins = 1;
let loses = 1;

//memanggil setiap  button satu per satu
tombols.forEach(function(tombol){

//event untuk setiap tombol
tombol.addEventListener("click",function (){


let enemyVal = enemy[Math.floor(Math.random()*enemy.length)]

	// versi IF nya, Note : variabel winsnya di ganti jadi 0
	// if (enemyVal === tombol.value) {
	// 	tempat.innerHTML="Seri Bos";
	// } else if (kertas.value == "kertas"){
	// 	if (enemyVal =="batu") {
	// 		nilaiPemain.innerHTML = wins++;
	// 		tempat.innerHTML="Menang Bos";
	// 	} else {
	// 		nilaiKomputer.innerHTML = loses++;
	// 		tempat.innerHTML="Kalah cuk";
	// 	}
	// } else if (batu.value == "batu") {
	// 	if (enemyVal == "gunting") {
	// 		nilaiPemain.innerHTML = wins++;
	// 		tempat.innerHTML="Menang Bos";
	// 	} else {
	// 		nilaiKomputer.innerHTML = loses++;
	// 		tempat.innerHTML="Kalah cuk";
	// 	}
	// } else if (gunting.value == "gunting") {
	// 	if (enemyVal == "kertas") {
	// 		nilaiPemain.innerHTML = wins++;
	// 		tempat.innerHTML="Menang Bos";
	// 	} else {
	// 		nilaiKomputer.innerHTML = loses++;
	// 		tempat.innerHTML="Kalah cuk";
	// 	}
	// }

switch(tombol) {
 case kertas :
 hasil = enemyVal === kertas.value ? "Seri" : enemyVal === batu.value ? "Menang" : "Kalah";
 score = hasil === "Menang" ? nilaiPemain.innerHTML = wins++ : hasil === "Seri" ? score : nilaiKomputer.innerHTML = loses++;
 tempat.innerHTML = hasil + " musuh mengeluarkan " + enemyVal;
 break;
 case batu :
 hasil = enemyVal === batu.value ? "Seri" : enemyVal === gunting.value ? "Menang" : "Kalah";
 score = hasil === "Menang" ? nilaiPemain.innerHTML = wins++ : hasil === "Seri" ? score : nilaiKomputer.innerHTML = loses++;
 tempat.innerHTML = hasil + " musuh mengeluarkan " + enemyVal;
 break;
 case gunting :
 hasil = enemyVal === gunting.value ? "Seri" : enemyVal === kertas.value ? "Menang" : "Kalah";
 score = hasil === "Menang" ? nilaiPemain.innerHTML = wins++ : hasil === "Seri" ? score : nilaiKomputer.innerHTML = loses++;
 tempat.innerHTML = hasil + " musuh mengeluarkan " + enemyVal;
 break;
}

});

});

reset.addEventListener("click",function(){
	loses = 0;
	wins = 0;
	document.getElementById("nilaiPemain").innerHTML=wins;
	document.getElementById("nilaiKomputer").innerHTML=loses;
});