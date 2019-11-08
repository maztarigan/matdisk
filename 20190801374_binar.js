console.log("Welcome");
var inputkeyboard = require("readline-sync");

var decimal = parseInt(inputkeyboard.question("Masukan nilai decimal : "));
var binar = (decimal.toString(2));

console.log("Nilai binar adalah : " + binar);
console.log("Thank you :)");