console.log ("====================")
console.log ("~ Bilangan Desimal ke Octa ~")

var key = require('readline-sync')

var x = parseInt(key.question("Input Desimal : "))

var octa = x.toString(8)

console.log ("Hasil Octa dari " + x + " adalah " + octa)
console.log("====================")