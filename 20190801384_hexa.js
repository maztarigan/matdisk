console.log("wellcome")
console.log("Name : Febri Qurniawati")
console.log("NIM  : 20190801384")
var key = require('readline-sync')

var desimal = parseInt(key.question("Masukan Desimal : "));
var hexa = (desimal.toString(16));

console.log("hexa = "+ hexa);
console.log("Thank you")