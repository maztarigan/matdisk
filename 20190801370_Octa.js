console.log("========== Welcome ==========")
console.log ("Menghitung Bilangan Desimal Ke Octa")

var key = require('readline-sync')

var x = parseInt(key.question("Input Desimal :" ))

var octa = x.toString(8)

console.log (" Hasil Biner dari "+x+" adalah :"+" "+octa)