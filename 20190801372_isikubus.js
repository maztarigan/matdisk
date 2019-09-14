var bacakeyboard =require('readline-sync');

var s = parseInt(bacakeyboard.question("Masukan Nilai Sisi : "));
var isi = s * s * s;

console.log(isi);