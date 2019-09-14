var baca = require('readline-sync');

var p = 13;
var l = parseInt(baca.question("masukan lebar : "));
var t = parseInt(baca.question("masukan tinggi : "));

var volume = p * l * t;

console.log(volume);


