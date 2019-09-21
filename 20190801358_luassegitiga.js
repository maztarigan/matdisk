var input_angka = require('readline-sync');
var alas = input_angka.question("Masukkan a : ");
var tinggi = input_angka.question("Masukkan t : ");
var luas = alas * tinggi / 2;
console.log("luas segitiga :"+luas);
