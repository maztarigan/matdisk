var input = require("readline-sync")

var desimal = parseInt(input.question("masukkan banyak desimal : "))

var hexaA = (desimal.toString(16));

console.log("hasil desimal ke hexa : "+hexaA)