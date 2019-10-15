var inkey = require('readline-sync');
console.log("Jalur A")
var jalur_A = [];
jalur_A.push(parseInt(inkey.question("masukan jarak A awal =")));
jalur_A.push(parseInt(inkey.question("masukan jarak A kedua =")));
jalur_A.push(parseInt(inkey.question("masukan jarak A ketiga =")));

console.log("Jalur B")
var jalur_B = [];
jalur_B.push(parseInt(inkey.question("masukan jarak B awal =")));
jalur_B.push(parseInt(inkey.question("masukan jarak B kedua =")));
jalur_B.push(parseInt(inkey.question("masukan jarak B ketiga =")));

    var jarak_jalur_A = jalur_A[0]+jalur_A[1]+jalur_A[2];
    var jarak_jalur_B = jalur_B[0]+jalur_B[1]+jalur_B[2];
    
if (jarak_jalur_A > jarak_jalur_B) {
    console.log("jarak jalur terpanjang adalah A :" +jarak_jalur_A);
    console.log("jarak jalur terpendek adalah B :" +jarak_jalur_B);
}

else {
    console.log("jarak jalur terpanjang adalah B :" +jarak_jalur_B);
    console.log("jarak jalur terpendek adalah A :" +jarak_jalur_A);
}