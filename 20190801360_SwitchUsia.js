var Anak = require('readline-sync');

var usia = parseInt (Anak.question("Masukkan usia : "));

switch (true){
    case usia<=4: 
    console.log ("Tingkat Playgrup (PG)");
    break;
    case usia<=6:
    console.log ("Tingkat Taman Kanak-Kanak (TK)");
    break;
    case usia<=12:
    console.log ("Tingkat Sekolah Dasar (SD)");
    break;
    case usia<=15:
    console.log ("Tingkat Sekolah Manengah Pertama (SMP)");
    break;
    case usia<=18:
    console.log ("Tingkat Sekolah Menengah Akhir (SMA)");
}