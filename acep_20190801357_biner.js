var keyboard = require('readline-sync');
console.log("");

var desimal = parseInt(keyboard.question("MASUKAN DESIMAL"));
var biner = (desimal.toString(2));
var octa = (desimal.toString(8));
var hexa = (desimal.toString(16)).toUpperCase();
console.log("");

console.log("konversi ke biner = "+biner+"");
console.log("konversi ke octa = "+octa+"");
console.log("konversi ke hexa = "+hexa+"");