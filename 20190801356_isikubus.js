var inputkeyboard = require('readline-sync');

var s = parseInt(inputkeyboard.question("Masukan Sisi :"));

var Luas = s*s*s;

console.log("Luas Lingkaran : "+Luas);
