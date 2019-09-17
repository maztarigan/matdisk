var keyboard= require('readline-sync');

var alas = parseInt(keyboard.question("masukkan nilai alas: "));
var tinggi = parseInt(keyboard.question("masukkan nilai tinggi"));
var luas =0.5*alas*tinggi

console.log(luas)