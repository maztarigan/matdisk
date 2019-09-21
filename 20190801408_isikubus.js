var baca = require('readline-sync');

var a = parseInt(baca.question("Masukan sisi A : "));
var b = parseInt(baca.question("Masukan sisi b : "));
var c = parseInt(baca.question("Masukan sisi c : "));

var isi = a*b*c;
console.log(isi);