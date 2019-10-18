console.log("isi Ttik A dan B dengan lengkap");
var key = require('readline-sync')
var jalura0 = parseInt(key.question("masukkan titik A[0] : "));
var jalura1 = parseInt(key.question("masukkan titik A[1] : "));
var jalura2 = parseInt(key.question("masukkan titik A[2] : "));
var jalurb0 = parseInt(key.question("masukkan titik B[0] : "));
var jalurb1 = parseInt(key.question("masukkan titik B[1] : "));
var jalurb2 = parseInt(key.question("masukkan titik B[2] : "));
    var jarakjalura = jalura0+jalura1+jalura2;
    var jarakjalurb = jalurb0+jalurb1+jalurb2;
if(jarakjalura>jarakjalurb) {
    console.log("Jarak terpanjang adalah jalur A "+jarakjalura+" Kilometer");
    console.log("dan")
    console.log("Jarak terpendek adalah jalur B "+jarakjalurb+" Kilometer");
    
} else{
}
if (jarakjalura<jarakjalurb){
    console.log("jarak terpanjang adalah jalur B "+jarakjalurb+" Kilometer");
    console.log("dan");
    console.log("jarak terpendek adalah jalur A "+jarakjalura+" Kilometer");
    
} 

console.log("Terimakasih");