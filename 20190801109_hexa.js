console.log ("Bilangan Desimal Ke Hexa")

var inputkeyboard = require('readline-sync')

var x = parseInt(inputkeyboard.question("Input Desimal :" ))

var hexa = x.toString (16).toUpperCase()

console.log ("Hasil Hexa dari "+x+" :")
console.log (hexa)



