var key = require('readline-sync');


var sisi = parseInt(key.question('Masukan Nilai Sisi : '));
var volume = sisi * sisi * sisi;

console.log(volume);