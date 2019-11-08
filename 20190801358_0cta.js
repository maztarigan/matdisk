var a = require('readline-sync');
var masukanangka = parseInt(a.question("Masukan nilai desimal : "));
var octa = (masukanangka.toString(8));
console.log("bilangan octanya adalah ["+octa+"]");