var inputkeyboard = require('readline-sync');
console.log("Data a");
var jalur_a = [];
jalur_a.push(parseInt(inputkeyboard.question("masukkan jarak a titik 1 : ")));
jalur_a.push(parseInt(inputkeyboard.question("masukkan jarak a titik 2 : ")));
jalur_a.push(parseInt(inputkeyboard.question("masukkan jarak a titik 3 : ")));
console.log("-------------------")

var jalur_b = [];
console.log("Data b");
jalur_b.push(parseInt(inputkeyboard.question("masukkan jarak b titik 1 : ")));
jalur_b.push(parseInt(inputkeyboard.question("masukkan jarak b titik 2 : ")));
jalur_b.push(parseInt(inputkeyboard.question("masukkan jarak b titik 3 : ")));


var jarak_jalur_a =[jalur_a[0]+jalur_a[1]+jalur_a[2]];
var jarak_jalur_b =[jalur_b[0]+jalur_b[1]+jalur_b[2]];

if(jarak_jalur_a>jarak_jalur_b){
    console.log("jarak terpanjang : jalur a " + jarak_jalur_a+ " KM");
    console.log("jarak terpendek : jalur b " + jarak_jalur_b + " KM");
}else {
    console.log("jarak terpanjang : jalur b " + jarak_jalur_b + " KM");
    console.log("jarak terpendek : jalur a " + jarak_jalur_a + " KM");
}