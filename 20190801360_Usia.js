console.log ("Hello ^_^");
console.log ("Menghitung Usia dengan Tingkat Pendidikan");
var Anak = require('readline-sync');

var usia = parseInt (Anak.question("Masukkan usia : "));

if ((usia >=3) && (usia<=4)) {
    console.log ("Tingkat Playgrup (PG)");
}else if((usia>=5) && (usia <=6)) {
    console.log ("Tingkat Taman Kanak-Kanak (TK)");
}else if((usia>=7) && (usia <=12)) {
    console.log ("Tingkat Sekolah Dasar (SD)");
}else if((usia>=13) && (usia<=15)) {
    console.log ("Tingkat Sekolah Manengah Pertama (SMP)");
}else if((usia>=16) && (usia<=18)) {
    console.log ("Tingkat Sekolah Menengah Akhir (SMA)");
}