console.log ("Bilangan Desimal Ke Biner")

var inputkeyboard = require('readline-sync')

var x = parseInt(inputkeyboard.question("Input Desimal :" ))

var biner = x.toString(2)

console.log ("Hasil Biner dari "+x+" :")
console.log (biner)



