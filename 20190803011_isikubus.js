var bacakeyboard = require('readline-sync');

var s = parseInt(bacakeyboard.question("masukkan nilai sisi: "));
var isi = s * s * s;

console.log(isi);