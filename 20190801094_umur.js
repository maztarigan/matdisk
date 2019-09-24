console.log("Pendidikan Berdasarkan Umur");

var inputkeyboard = require('readline-sync');
var umur = parseInt(inputkeyboard.question("Masukkan Umur :"));

if ((umur > 2) && (umur < 5)) {
    console.log("Pendidikan PlayGroup");
}else if 
    ((umur > 4) && (umur < 7)) {
    console.log("Pendidikan Taman Kanak-kanak");
}else if
    ((umur > 6) && (umur < 13)) {
    console.log("Pendidikan Sekolah Dasar");
}else if
    ((umur > 12) && (umur < 16)) {
    console.log("Pendidikan SMP");
}else if
    ((umur > 15) && (umur < 19)) {
    console.log("Pendidikan SMA");
}else{
    console.log("Salah Input");
}