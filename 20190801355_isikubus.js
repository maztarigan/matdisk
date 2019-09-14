console.log("Menghitung Isi Kubus")

var input = require("readline-sync")

var sisi = input.questionInt("Masukan Panjang Sisi : ")

var volume = sisi*sisi*sisi;

console.log(volume)