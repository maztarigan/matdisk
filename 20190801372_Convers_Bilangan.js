console.log ("Konvers Bilangan")

var bacakeyboard = require('readline-sync')

var x = parseInt(bacakeyboard.question("Silahkan Masukan Nilai Desimal :" ))

var biner = x.toString(2)
var octa = x.toString(8)
var Hexa = x.toString(16).toUpperCase()

console.log ("Hasil Biner dari "+x+" = "+biner+" ");
console.log("Hasil Octa dari "+x+" =  "+octa+" ");
console.log("Hasil Hexa dari "+x+" = "+Hexa+" ");
console.log("|---------------------------------------------|");
console.log("|TERIMAKASIH 20190801372 - MAULANA ARIS IRAWAN|");
console.log("|---------------------------------------------|");