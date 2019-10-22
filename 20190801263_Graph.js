var key = require('readline-sync');

var jalur_a = [];
jalur_a.push(key.question('jarak A Titik 1 : '));
jalur_a.push(key.question('jarak A Titik 2 : '));
var jalur_b = [];
jalur_b.push(key.question('jarak B Titik 1 : '));
jalur_b.push(key.question('jarak B Titik 2 : '));
var jarak_jalur_a = jalur_a[0]+[1];
var jarak_jalur_b = jalur_b[0]+[1];

if(jarak_jalur_a>jarak_jalur_b){
    console.log("==============================");
    console.log("jarak terpanjang :"+jarak_jalur_a);
    console.log("jarak terdekat :"+jarak_jalur_b);
    console.log("==============================");
}else{
    console.log("==============================");
    console.log("jarak terdekat :"+jarak_jalur_b);
    console.log("jarak terpanjang :"+jarak_jalur_a);
    console.log("==============================");
}