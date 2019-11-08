console.log("bilangan desimal ke biner ")

var key = require('readline-sync')

var a = parseInt(key.question("masukan bilangan desimal :"))

var biner = a.toString(2)
console.log("hasil biner dari "+a+" :" +biner)