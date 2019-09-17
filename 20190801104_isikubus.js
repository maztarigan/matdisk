var masukkankeyboard = require('readline-sync');

var s = parseInt(masukkankeyboard.question("masukkan sisi : "));
var volume = s*s*s
console.log("volume kubus dengan sisi " +s+ " adalah "+volume);