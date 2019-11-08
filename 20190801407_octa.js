console.log("bilangan desimal ke octa ")

var key = require('readline-sync')

var a = parseInt(key.question("masukan bilangan desimal :"))

var octa = a.toString(8)
console.log("hasil octa dari "+a+" :" +octa)