var key = require("readline-sync");

var desimal = parseInt(key.question('masukan nilai desimal:'));
var octa = (desimal.toString(8));
console.log("==========================================================");
console.log(octa);