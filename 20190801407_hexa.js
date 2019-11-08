console.log("bilangan desimal ke hexa ")

var key = require('readline-sync')

var a = parseInt(key.question("masukan bilangan desimal :"))

var hexa = a.toString(16).toUpperCase()
console.log("hasil hexa dari "+a+" :" +hexa)