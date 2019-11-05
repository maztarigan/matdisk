console.log("Desimal Ke Octa")

var input = require('readline-sync')

var a = parseInt(input.question("Masukan Bilangan Desimal : "))

var octa = a.toString(8) 
console.log("Octa : "+octa)