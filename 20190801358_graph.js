var baca =require('readline-sync')

var jalur_a1 = parseInt([baca.question('jarak A Titik 1 : ')]);
var jalur_a2 = parseInt([baca.question('jarak A Titik 2 : ')]);
var jalur_a3 = parseInt([baca.question('jarak A Titik 3 : ')]);
var jalur_b1 = parseInt([baca.question('jarak B Titik 1 : ')]);
var jalur_b2 = parseInt([baca.question('jarak B Titik 2 : ')]);
var jalur_b3 = parseInt([baca.question('jarak B Titik 3 : ')]);

var jarak_jalur_a = jalur_a1 + jalur_a2 + jalur_a3;
var jarak_jalur_b = jalur_b1 + jalur_b2 + jalur_b3;

if(jarak_jalur_a>jarak_jalur_b){
    console.log("jarak terpanjang A :"+jarak_jalur_a+ " Km");
    console.log("jarak terdekat B :"+jarak_jalur_b+ " Km");
}else{
    console.log("jarak terpanjang B :"+jarak_jalur_b+ " Km");
    console.log("jarak terdekat A :"+jarak_jalur_a+ " Km")
}
