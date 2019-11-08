console.log("Welcome");
var inputkeyboard = require("readline-sync");

var decimal = parseInt(inputkeyboard.question("Masukan nilai decimal : "));
var okta = (decimal.toString(8));

console.log("Nilai okta adalah : " + okta);
console.log("Thank you :)");