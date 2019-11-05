console.log("Desimal Ke Binner")

var input = require('readline-sync')

var a = parseInt(input.question("Masukan Bilangan Desimal : "))

var binner = a.toString(2)
console.log("Binner : "+binner)