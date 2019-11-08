var a = require('readline-sync');
var masukanangka = parseInt(a.question("Masukan nilai desimal : "));
var hexa = (masukanangka.toString(16));
console.log("bilangan hexanya adalah ["+hexa+"]");