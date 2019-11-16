var input = require('readline-sync');

var Desimal = parseInt(input.question("Masukan Nilai Desimal = "))

var binner = (Desimal.toString(2));
var octa = (Desimal.toString(8));
var Hexa = (Desimal.toString(16));
console.log(binner);
console.log(octa);
console.log(Hexa);