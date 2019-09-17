var keyboard = require ('readline-sync');
var s = parseInt (keyboard.question("masukan sisi:"));
var volume = s*s*s ;
console.log("Volume kubus ="+ volume);