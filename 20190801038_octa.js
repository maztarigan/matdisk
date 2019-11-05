var key = require('readline-sync');
var desimal = parseInt(key.question("masukan nilai Desimal :"));

console.log("hasil convert dari decimal ke OCTA");
var OCTA = (desimal.toString(8));

console.log(OCTA)