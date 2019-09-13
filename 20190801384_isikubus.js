var masukan_keyboard = require('readline-sync');

var sisi = masukan_keyboard.question("masukansisi = ");

var volume = sisi * sisi * sisi;

console.log("volume : "+volume)