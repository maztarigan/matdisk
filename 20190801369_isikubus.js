var baca = require("readline-sync");

var sisi = baca.questionInt("Masukan Panjang Sisi : ");

var volume = sisi*sisi*sisi;

console.log(volume);