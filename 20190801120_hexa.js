console.log("===========================")
console.log("| Nama   : Firlan Prayoga |")
console.log("| NIM    : 20190801120    |")
console.log("| Matkul : Matdisk        |")
console.log("===========================")
var input = require('readline-sync');
var bil = parseInt(input.question("Masukkan Desimal = "));
var hexa = bil.toString(16).toUpperCase();

console.log("Bilangan Hexa dari bilangan desimal "+bil+" = "+hexa)