var inputkeyboard= require('readline-sync');

var desimal = parseInt(inputkeyboard.question("masukan desimal : "));
var octa = (desimal.toString(8));

console.log (octa);