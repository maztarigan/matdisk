var input = require ("readline-sync")
console.log ("Selamat Datang")
console.log ("Silahkan Masukan Jarak Anda")
var jalur_A1 = parseInt ([input.question("jarak A Titik 1:")]);
var jalur_A2 = parseInt ([input.question("jarak A Titik 2:")]);
var jalur_A3 = parseInt ([input.question("jarak A Titik 3:")]);
var jalur_B1 = parseInt ([input.question("jarak B Titik 1:")]);
var jalur_B2 = parseInt ([input.question("jarak B Titik 2:")]);
var jalur_B3 = parseInt ([input.question("jarak B Titik 3:")]);

var jarak_jalur_a= jalur_A1+jalur_A2+jalur_A3;
var jarak_jalur_b= jalur_B1+jalur_B2+jalur_B3;

if(jarak_jalur_a>jarak_jalur_b){
    console.log("jarak terpanjang A :"+jarak_jalur_a+"km");
    console.log("jarak terdekat B :"+jarak_jalur_b+"km");
}else{
    console.log("jarak terpanjang B :"+jarak_jalur_b+"km");
    console.log("jarak terdekat A:"+jarak_jalur_a+"km");
}if(jarak_jalur_a=jarak_jalur_b){
    console.log("jarak kedua nya sama");
}