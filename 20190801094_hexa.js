console.log("Desimal Ke Hexa")

var input = require('readline-sync')

var a = parseInt(input.question("Masukan Bilangan Desimal : "))

var hexa = a.toString(16).toUpperCase()
console.log("Hexa : "+hexa)