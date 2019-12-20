var key = require('readline-sync');

var jalur_a=[];
jalur_a.push(key.question("jarak A titik 1 : "));
jalur_a.push(key.question("jarak A titik 1 : "));
var jalur_b= [];
jalur_b.push(key.question("jarak B titik 1 : "));
jalur_b.push(key.question("jarak B titik 1 : "));
var jarak_jalur_a = jalur_a[0]+[1];
var jarak_jalur_b = jalur_b[0]+[1];


if(jarak_jalur_a>jarak_jalur_b){
    console.log("================================");
    console.log("jarak terpendek :" +jarak_jalur_b);
    console.log("jarak terdekat :" +jarak_jalur_b);
}else{
    console.log("=================================");
    console.log("jarak terpanjang :" +jarak_jalur_b);
    console.log("jarak terpendek :" +jarak_jalur_a);
}