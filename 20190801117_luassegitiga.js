var masukankeyboard = require ('readline-sync');
var a = parseInt (masukankeyboard.question("masukan alas:"));
var t = parseInt (masukankeyboard.question("masukan tinggi:"));
var luas = 1/2*a*t;
console.log ("luas segitiga ="+luas);