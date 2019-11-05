var key = require('readline-sync');
var desimal = parseInt(key.question("masukan nilai Desimal :"));

console.log("hasil convert dari decimal ke biner");
var Biner = (desimal.toString(2));

console.log(Biner)