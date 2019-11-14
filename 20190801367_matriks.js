var baca = require ("readline-sync");

var a0 = parseInt(baca.question("Masukan Jarak A pertama = "));
var a1 = parseInt(baca.question("Masukan Waktu A pertama = "));
var a2 = parseInt(baca.question("Masukan Jarak A kedua = "));
var a3 = parseInt(baca.question("Masukan Waktu A kedua = "));
var a4 = parseInt(baca.question("Masukan Jarak A ketiga = "));
var a5 = parseInt(baca.question("Masukan Waktu A ketiga = "));

var b0 = parseInt(baca.question("Masukan Jarak B pertama = "));
var b1 = parseInt(baca.question("Masukan Waktu B pertama = "));
var b2 = parseInt(baca.question("Masukan Jarak B kedua = "));
var b3 = parseInt(baca.question("Masukan Waktu B kedua = "));
var b4 = parseInt(baca.question("Masukan Jarak B ketiga = "));
var b5 = parseInt(baca.question("Masukan Waktu B ketiga = "));

var jalurA = [[a0, a1], [a2, a3], [a4, a5]];
var jalurB = [[b0, b1], [b2, b3], [b4, b5]];

var jarakA = jalurA[0][0] + jalurA[1][0] + jalurA[2][0];
var jarakB = jalurB[0][0] + jalurB[1][0] + jalurB[2][0];

var tempuhA = jalurA[0][1] + jalurA[1][1] + jalurA[2][1];
var tempuhB = jalurB[0][1] + jalurB[1][1] + jalurB[2][1];

console.log ("                                       ");

if (jarakA > jarakB && tempuhA > tempuhB){
    console.log("Jarak Terpanjang      = " +jarakA+ "KM");
    console.log("Jarak Tempuh Tercepat = " +tempuhA+ " Menit");
    console.log("Jarak Terdekat        = " +jarakB+ "KM");
    console.log("Jarak Tempuh Terlama  = " +tempuhB+ " Menit");
}
else{
    console.log("Jarak Terpanjang      = " +jarakB+ "KM");
    console.log("Jarak Tempuh Tercepat = " +tempuhB+ " Menit");
    console.log("Jarak Terdekat        = " +jarakA+ "KM");
    console.log("Jarak Tempuh Terlama  = " +tempuhA+ " Menit");
}