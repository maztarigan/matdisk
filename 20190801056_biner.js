var a = require('readline-sync')

var desimal=parseInt(a.question("Masukkan Bilangan Desimal : "))
var biner = (desimal.toString(2))

console.log("==========================")
console.log("Konversi Desimal ke Biner")
console.log(biner)
console.log("==========================")