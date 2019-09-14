var baca = require('readline-sync');

var s = parseInt(baca.question("Masukan Nilai Sisi : "));
var isi = s * s * s;

console.log(isi);