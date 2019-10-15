var key = require('readline-sync');

var jalur_a = [];
jalur_a.push (parseInt(key.question('jarak A titik 1 : ')));
jalur_a.push (parseInt(key.question('jarak A titik 2 : ')));

var jalur_b = [];
jalur_b.push (parseInt(key.question('jarak B titik 1 : ')));
jalur_b.push (parseInt(key.question('jarak B titik 2 : ')));

var jarak_jalur_a = jalur_a[0]+jalur_a[1];
var jarak_jalur_b = jalur_b[0]+jalur_b[1]

if(jarak_jalur_a>jarak_jalur_b){
    console.log("========================");
    console.log("jarak terpanjang :" + jarak_jalur_a);
    console.log("jarak terdekat :" + jarak_jalur_b);
    console.log("========================");
}else{
    console.log("========================");
    console.log("jarak terpanjang :" + jarak_jalur_b);
    console.log("jarak terdekat :" + jarak_jalur_a);
    console.log("========================");
}