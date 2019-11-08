console.log("========== Welcome ==========")
console.log ("Menghitung Bilangan Desimal Ke Biner")

var key = require('readline-sync')

var x = parseInt(key.question("Input Desimal :" ))

var biner = x.toString(2)

console.log (" Hasil Biner dari "+x+" adalah :"+" " +biner)