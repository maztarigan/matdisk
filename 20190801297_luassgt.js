var key = require('readline-sync')

var alas = parseInt(key. question('masukan nilai alas : '));
var tinggi = parseInt(key. question('masukan nilai tinggi : '));
var luas = 0.5 * alas * tinggi;

console.log(luas);