var input = require('readline-sync');
var umur = parseInt(input.question("Masukan usia : "));

if (umur <= 45 && umur >= 25) {
    var perbedaan = 0.1 * 0.5 * (umur-25)
    console.log((1-perbedaan)*100+"%"+" Muda \n"+perbedaan*100+"% Separuh baya")
}else if (umur <= 65 && umur >= 45 ) {
    var perbedaan = 0.1 * 0.5 *(umur-45)
    console.log((1-perbedaan)*100+"%"+" Separuh Baya \n"+perbedaan*100+"% Tua")
}