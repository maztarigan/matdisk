var key= require('readline-sync');

var jalur_A = [];
jalur_A.push(key.question('jarak A titik 1 :'));
jalur_A.push(key.question('jarak A titik 2 :'));

var jalur_B = [];
jalur_B.push(key.question('jarak B titik 1 :'));
jalur_B.push(key.question('jalur B titik 2 :'));

var jarak_jalur_A = jalur_A[0]+jalur_A[1];
var jarak_jalur_B = jalur_B[0]+jalur_B[1];

if(jarak_jalur_A>jarak_jalur_B){
    console.log("==============================");
    console.log("Jarak Terpanjang :"+jarak_jalur_A);
    console.log("Jarak Terdekat :"+jarak_jalur_B);
    console.log("==============================");
}else{
    console.log("==============================");
    console.log("Jarak Terpanjang :"+jarak_jalur_B);
    console.log("Jarak Terdekat :"+jarak_jalur_A);
    console.log("==============================");
}