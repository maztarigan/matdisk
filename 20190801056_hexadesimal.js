var a = require('readline-sync')

var desimal=parseInt(a.question("Masukkan Bilangan Desimal : "))
var hexadesimal = (desimal.toString(16))

console.log("=================================")
console.log("Konversi Desimal ke Hexadesimal")
console.log(hexadesimal)
console.log("=================================")