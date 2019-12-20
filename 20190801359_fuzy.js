console.log("Selamat Datang ")
var inputkeyboard = require('readline-sync');
var usia = parseInt(inputkeyboard.question("Masukan usia : "));

if (usia <= 45 && usia >= 25) {
    var perbandingan = 0.1 * 0.5 * (usia-25)
    console.log((1-perbandingan)*100+"%"+" Muda \n"+perbandingan*100+"% Separuh baya")
}else if (usia <= 65 && usia >= 45 ) {
    var perbandingan = 0.1 * 0.5 *(usia-45)
    console.log((1-perbandingan)*100+"%"+" Separuh Baya \n"+perbandingan*100+"% Tua")
}
console.log("Terima Kasih")