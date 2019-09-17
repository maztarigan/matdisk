var keyboard=require('readline-sync');
var sisi = parseInt(keyboard.question("Masukan Sisi : "));
var volume = sisi*sisi*sisi;

console.log("Masukan Sisi : "+volume);