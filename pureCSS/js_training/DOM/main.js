const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan dalam paragraf
pBaru.appendChild(textPBaru);
// simpan pBaru di akhir sectionA
const sectionA = document.getElementById('a');
// (1)menggunakan appendChild 
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
// menggunakan insertBefore
ul.insertBefore(liBaru, li2);


const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);



const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'orange';
liBaru.style.backgroundColor = 'orange';
h2Baru.style.backgroundColor = 'orange';

sectionA.style.border = '5px solid green';
sectionB.style.border = '5px solid aqua';
























































// // DOM Selection
// // document.getElementById()
// const judul = document.getElementById('judul');
// judul.style.color = 'violet';
// judu.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Laxus';


// const p = document.getElementsByTagName('p');

// for( let i = 0; i < p.length; i++ ) {
// 	p[i].style.backgroundColor = 'lightblue'; 
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// const p1 = document.getElementByClassName('p1');
// p1[0].innerHTML = 'Ini diubah dari javascript';a