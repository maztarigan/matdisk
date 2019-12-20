console.log("Fuzzy");
var key = require('readline-sync');

var umur = parseInt(key.question("Masukan umur : "));

if (umur <= 45 && umur >= 25) {
    var Persentase = 0.1 * 0.5 * (umur-25)
    console.log((1-Persentase)*100+"%"+" Muda \n"+Persentase*100+"% Separuh baya")
}
else if (umur <= 65 && umur >= 45 ) {
    var Persentase = 0.1 * 0.5 *(umur-45)
    console.log((1-Persentase)*100+"%"+ " Separuh Baya \n"+Persentase*100+"% Tua")
} 