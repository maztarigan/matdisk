var inputkeyboard = require('readline-sync');

var desimal = parseInt(inputkeyboard.question("masukan desimal : "));
var hexa = (desimal.toString(16));

console.log (hexa);