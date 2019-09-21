var bacakeyboard = require('readline-sync');

var alas = parseInt(bacakeyboard.question("masukan nilai alas : "));
var tinggi = parseInt(bacakeyboard.question("masukan nilai tinggi : "));

var luas = 0.5*alas*tinggi;

console.log(luas);