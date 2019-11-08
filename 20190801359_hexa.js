console.log("Selamat Datang")
console.log("Nama : Anrian Sihotang")
console.log("NIM  : 20190801359")
var key = require('readline-sync')

var desimal = parseInt(key.question("Masukan Desimal : "));
var hexa = (desimal.toString(16));

console.log("hexa = "+ hexa);
console.log("Terima Kasih")