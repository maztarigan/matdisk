console.log("Nama saya Raihan Ghifari")

var input = require("readline-sync")
var desimal = parseInt(input.question("masukkan banyak desimal : "))
var octa = parseInt(input.question("masukan banyak octa : "))
var hexa = parseInt(input.question("masukkan banyak hexa : "))

var binerA = (desimal.toString(2));
var binerB = (octa.toString(8));
var binerC = (hexa.toString(16));

console.log("hasil desimal : "+binerA)
console.log("hasil octa : "+binerB)
console.log("hasil hexa : "+binerC)