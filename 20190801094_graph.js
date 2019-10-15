Array

var inputkey_a = require('readline-sync'); 
var inputkey_b = require('readline-sync');

var jalur_a = []
jalur_a.push(parseInt(inputkey_a.question("Elemen pertama jalur A : ")));
jalur_a.push(parseInt(inputkey_a.question("Elemen kedua jalur A : ")));
jalur_a.push(parseInt(inputkey_a.question("Elemen ketiga jalur A : ")));

var jalur_b = []
jalur_b.push(parseInt(inputkey_a.question("Elemen pertama jalur B : ")));
jalur_b.push(parseInt(inputkey_a.question("Elemen kedua jalur B : ")));
jalur_b.push(parseInt(inputkey_a.question("Elemen ketiga jalur B : ")));

var jarak_jalur_a = jalur_a[0] + jalur_a[1] + jalur_a[2]
var jarak_jalur_b = jalur_b[0] + jalur_b[1] + jalur_b[2]

console.log("Jarak jalur A : " + jarak_jalur_a);
console.log("Jarak jalur B : " + jarak_jalur_b);

if (jarak_jalur_a > jarak_jalur_b) {

    console.log("Jalur terpanjang adalah Jalur A")
    console.log("Jalur terpendek adalah Jalur B")

}else {

    console.log("Jalur terpanjang adalah jalur B")
    console.log("Jalur terpendek adalah Jalur A")

}