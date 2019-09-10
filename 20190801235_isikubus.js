var bacakeyboard = require ('readline-sync');

var s = parseInt(bacakeyboard.question("masukan sisi ;"));
var v = s*s*s;
console.log("volume kubus = "+v);