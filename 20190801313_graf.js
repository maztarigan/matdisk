var key =require('readline-sync');

var jalur_a = [];
jalur_a.push(key.question('jarak A titik 1 :'));
jalur_a.push(key.question('jarak A titik 2 :'));
var jalur_b = [];
jalur_b.push(key.question('jarak B titik 1 :'));
jalur_b.push(key.question('jarak B titik 2 :'));



var jalur_a = [10,20,5];
var jalur_b = [10,10,10];
var jarak_jalur_a = jalur_a[0] + jalur_a[1] + jalur_a[2];
var jarak_jalur_b = jalur_b[0] + jalur_b[1] + jalur_b[2];

if(jarak_jalur_a>jarak_jalur_b){
    console.log ("jarak terpanjang :" + jarak_jalur_a);
    console.log ("jalur terpendek :" + jarak_jalur_b);
}else{
    console.log ("jarak terpanjang :" + jarak_jalur_b);
    console.log ("jarak terpendek :" + jarak_jalur_a);
}