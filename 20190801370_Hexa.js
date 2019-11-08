console.log("========== Welcome ==========")
console.log ("Menghitung Bilangan Desimal Ke Hexa")

var key = require('readline-sync')

var x = parseInt(key.question("Input Desimal :" ))

var hexa = x.toString (16).toUpperCase()

console.log (" Hasil Hexa dari "+x+" adalah :"+" "+hexa)