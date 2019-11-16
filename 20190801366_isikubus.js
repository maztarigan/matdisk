var keyboard=require('readline-sync');

var s = parseInt(keyboard.question("Masukkan Nilai Sisi ="));

var isi = s * s * s

console.log("Isi Kubus yang sisinya "+ s + " adalah " + isi);