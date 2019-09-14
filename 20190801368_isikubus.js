var nilai =require('readline-sync');

var s = parseInt(nilai.question("Masukan Nilai Sisi : "));
var isi = s * s * s;

console.log(isi);