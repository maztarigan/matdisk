console.log("Program Menghitung Isi Kubus");

var inputkeyboard = require("readline-sync");

var s = parseInt(inputkeyboard.question("masukkan sisi : "));

var v = s*s*s;

console.log("Volume Kubus = "+ v);