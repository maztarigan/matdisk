console.log("<<SELAMAT DATANG>>");
console.log ("Desimal to Hexa");

var putkeyboard = require('readline-sync');

var x = parseInt(putkeyboard.question("Masukan Desimal :" ));

var hexa = x.toString (16).toUpperCase();

console.log ("Hasil Hexa dari Desimal "+x+" :");
console.log (hexa);
console.log(">>TERIMA KASIH<<");