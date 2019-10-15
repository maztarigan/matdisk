var key = require('readline-sync');

var jalur_a =[];
jalur_a.push(key.question('Jarak A TiTik 1 : '));
jalur_a.push(key.question('Jarak A TiTik 2 : '));
var jalur_b = [];
jalur_b.push(key.question('jarak B TiTik 1 : '));
jalur_b.push(key.question('jarak B TiTik 2 : '));
var jarak_jalur_a = jalur_a[0]+[1];
var jarak_jalur_b = jalur_b[0]+[1];

if(jarak_jalur_a>jarak_jalur_b){
    console.log("==============================");
    console.log("Jarak Terpanjang :"+jarak_jalur_a);
    console.log("Jarak Terdekat :"+jarak_jalur_b);
    console.log("==============================");
}else{
    console.log("===============================");
    console.log("Jarak Terdekat :"+jarak_jalur_b);
    console.log("Jarak Terpanjang :"+jarak_jalur_a);
    console.log("===============================");
}     