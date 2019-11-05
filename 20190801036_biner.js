var inputkeyboard = require('readline-sync');

var desimal = parseInt(inputkeyboard.question("masukan desimal : "));
var biner = (desimal.toString(2));

console.log(biner);