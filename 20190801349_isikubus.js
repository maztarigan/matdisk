var baca = require("readline-sync");

var p = parseInt(baca.question(" Isi Panjang Kubus : "));
var l = parseInt(baca.question(" Isi Lebar Kubus : "));
var t = parseInt(baca.question("Isi Tinggi Kubus : "));

var volume = p * l * t;

console.log(volume);
