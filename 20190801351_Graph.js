var baca = require('readline-sync');

var jalur_a = [];
jalur_a.push(baca.question('Jalur a Titik 1 : '));
jalur_a.push(baca.question('Jalur a Titik 2 : '));
jalur_a.push(baca.question('Jalur a Titik 3 : '));

var jalur_b = [];
jalur_b.push(baca.question('Jalur b Titik 1 : '));
jalur_b.push(baca.question('Jalur b Titik 2 : '));
jalur_b.push(baca.question('Jalur b Titik 3 : '));

var jarak_jalur_a = jalur_a[0]+jalur_a[1]+jalur_a[2];
var jarak_jalur_b = jalur_b[0]+jalur_b[1]+jalur_b[2];

if(jarak_jalur_a > jarak_jalur_b){
    console.log("------------------------------");
    console.log("jarak terpanjang :"+jarak_jalur_a);
    console.log("jarak terpendek :"+jarak_jalur_b);
    console.log("------------------------------");
}else{
    console.log("------------------------------");
    console.log("jarak terpendek :"+jarak_jalur_b);
    console.log("jarak terpanjang :"+jarak_jalur_a);
    console.log("------------------------------");
} 
