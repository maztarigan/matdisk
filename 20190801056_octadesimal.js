var a = require('readline-sync')

var desimal=parseInt(a.question("Masukkan Bilangan Desimal : "))
var octadesimal = (desimal.toString(8))

console.log("=================================")
console.log("Konversi Desimal ke Octadesimal")
console.log(octadesimal)
console.log("=================================")