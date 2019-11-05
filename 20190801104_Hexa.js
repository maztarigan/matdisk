var a=require('readline-sync')

var desimal=parseInt(a.question("masukkan Bilangan Desimal :"))
var hexa = (desimal.toString(16))
console.log(hexa);