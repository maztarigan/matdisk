var segitiga = require('readline-sync');

var alas = parseInt(segitiga.question('masukan nilai alas :'));
var tinggi = parseInt(segitiga.question('masukan nilai tinggi :'));

var luas = 0.5*alas*tinggi;

console.log(luas);