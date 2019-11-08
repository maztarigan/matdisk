console.log("<<SELAMAT DATANG>>");
console.log("Desimal to Octa");

var putkeyboard = require("readline-sync");

var x = parseInt(putkeyboard.question("Masukan Desimal:"));

var octa = (x.toString(8));

console.log("Hasil Octa dari Desimal "+x+ ":");
console.log(octa);
console.log(">>TERIMA KASIH<<");