console.log("Tujuan Lippo Karawaci dari Ecoplaza Cikupa");
console.log("Isi Masing - masing 3 Titik A dan B dengan lengkap");
var key = require('readline-sync');
var jalura0 = parseInt(key.question("Masukkan Titik A0 : "));
var jalura1 = parseInt(key.question("Masukkan Titik A1 : "));
var jalura2 = parseInt(key.question("Masukkan Titik A2 : "));
var jalurb0 = parseInt(key.question("Masukkan Titik B0 : "));
var jalurb1 = parseInt(key.question("Masukkan Titik B1 : "));
var jalurb2 = parseInt(key.question("Masukkan Titik B2 : "));
 var jarakjalura = jalura0+jalura1+jalura2;
 var jarakjalurb = jalurb0+jalurb1+jalurb2;

 console.log("============================================");
 if (jarakjalura>jarakjalurb) {
     console.log("Jarak Terpanjang adalah jalur A yaitu "+jarakjalura+"KM");
     console.log("dan");
     console.log("Jarak Terpendek adalah jalur B yaitu "+jarakjalurb+"KM");
 } else {
 }
 if (jarakjalura<jarakjalurb) {
    console.log("Jarak Terpanjang adalah jalur B yaitu "+jarakjalurb+"KM");
    console.log("dan");
    console.log("Jarak Terpendek adalah jalur A yaitu "+jarakjalura+"KM");
 } else {
 }
 console.log("============================================");
console.log("Terimakasih :) @Kresna20190801375");