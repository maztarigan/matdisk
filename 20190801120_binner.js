console.log("===========================")
console.log("| Nama   : Firlan Prayoga |")
console.log("| NIM    : 20190801120    |")
console.log("| Matkul : Matdisk        |")
console.log("===========================")
var input = require('readline-sync');
var bil = parseInt(input.question("Masukkan Desimal = "));
var binner = bil.toString(2);

console.log("Bilangan Binner dari bilangan desimal "+bil+" = "+binner)