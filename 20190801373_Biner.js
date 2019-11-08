console.log("<<SELAMAT DATANG>>");
console.log ("Desimal to Biner");

var putkeyboard = require('readline-sync');

var x = parseInt(putkeyboard.question("Masukan Desimal :" ));

var biner = x.toString(2)

console.log ("Hasil Biner dari Desimal "+x+" :");
console.log (biner);
console.log(">>TERIMA KASIH<<");