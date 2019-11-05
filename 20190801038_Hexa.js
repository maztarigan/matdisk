var key = require('readline-sync');
var desimal = parseInt(key.question("masukan nilai Desimal :"));

console.log("hasil convert dari decimal ke Hexa");
var Hexa = (desimal.toString(16));

console.log(Hexa)