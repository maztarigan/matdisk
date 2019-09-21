var baca = require('readline-sync');
var s = parseInt(baca.question("Masukkan sisi : "));
var volume = s * s * s;
console.log(volume);