console.log("Welcome");
var inputkeyboard = require('readline-sync');

var usia = parseInt(inputkeyboard.question("Masukan usia : "));

if (usia <= 45 && usia >= 25) {
    var Persentase = 0.1 * 0.5 * (usia-25)
    console.log((1-Persentase)*100+"%"+" Muda \n"+Persentase*100+"% Separuh baya")
}
else if (usia <= 65 && usia >= 45 ) {
    var Persentase = 0.1 * 0.5 *(usia-45)
    console.log((1-Persentase)*100+"%"+ " Separuh Baya \n"+Persentase*100+"% Tua")
}
console.log("Thank you");