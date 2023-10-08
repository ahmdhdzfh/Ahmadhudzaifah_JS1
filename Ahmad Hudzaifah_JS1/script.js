// contoh if, else, nested if ujian Matematika
var a = 35; //nilai hasil ujian matematika

var b = 60; //rata rata nilai lulus ujian matematika


// if else 
if (a >= b) {
    console.log("Kamu Lulus ujian Matematika!");
    } else {
    console.log("Kamu tidak lulus ujian Matematika");

    // nested if
    if (a >= 40) {
        console.log("Tetapi Kamu masih bisa mengikuti ujian ulang");
    } else {
        console.log("dan Kamu tidak bisa mengikuti ujian ulang");
    }
}

// Contoh Switch case 
var prodi = 2; 

switch (prodi) {
  case 1:
    console.log("Sistem Informasi");
    break;
  case 2:
    console.log("Teknik Informatika");
    break;
  case 3:
    console.log("Digital Business");
    break;
}

//for statement
for (var c = 1; c <= 10; c++) {
  console.log("Hai Kak Mentor " + c + "x");
}

//while
let batasangka = 5;
let angka = 1;
while (angka <= batasangka) {
  console.log(angka + "x while");
  angka++;
}

//while do

let z = 6;
do {
  console.log(z + "x while do");
  z++;
}
while (z <= 10);



//function

function call(nama = 'Andi'){
  console.log(`Hello ${nama}!`);
}

call("Rosma");
call()

