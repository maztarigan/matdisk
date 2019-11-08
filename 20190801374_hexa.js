console.log("Welcome");
var inputkeyboard = require("readline-sync");

var decimal = parseInt(inputkeyboard.question("Masukan nilai decimal : "));
var hexa = (decimal.toString(16));

console.log("Nilai hexa adalah : " + hexa);
console.log("Thank you :)");