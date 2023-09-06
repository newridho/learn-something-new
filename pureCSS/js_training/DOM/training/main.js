// alert('Click the Button to Start the Game or Moving your mouse!!');

const tUbahWarna = document.getElementById('tUbahWarna');
// tUbahWarna.addEventListener('onclick', function() {
// document.body.style.backgroundColor = 'red';
// });
tUbahWarna.onclick = function() {
	// document.body.style.backgroundColor = 'aqua';
	// document.body.setAttribute('class', 'aqua');
	document.body.classList.toggle('aqua');
}


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


const sMerah = document.querySelector('input[name="sMerah"]');
const sHijau = document.querySelector('input[name="sHijau"]');
const sBiru = document.querySelector('input[name="sBiru"]');

sMerah.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function() {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


document.body.addEventListener('mousemove', function(event) {
	// posisi mouse
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);

	document.body.style.backgroundColor = 'rgb('+ xPos +', 100, '+ yPos +')';

}); 



 
















