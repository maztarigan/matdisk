var infrom = require('readline-sync')
var a = parseInt(infrom.question("Masukkan Alas : "));
var t = parseInt(infrom.question("Masukkan Tinggi : "));
console.log("Luas segitiga : "+a*t/2);