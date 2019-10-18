console.log("Maps Eco Plaza ke Supermall Karawaci");
console.log("Isi jalur A dan jalur B")

var baca = require('readline-sync');

var JalurA0 = parseInt([baca.question("masukan jarak jalur A0 ")]);
var JalurA1 = parseInt([baca.question("masukan jarak jalur A1 :")]);
var JalurA2 = parseInt([baca.question("masukan jarak jalur A2 :")]);
var JalurB0 = parseInt([baca.question("masukan jarak jalur B0 :")]);
var JalurB1 = parseInt([baca.question("masukan jarak jalur B1 :")]);
var JalurB2 = parseInt([baca.question("masukan jarak jalur B2 :")]);

var jarakA = JalurA0 + JalurA1 + JalurA2;
var jarakB = JalurB0 + JalurB1 + JalurB2;

console.log("jarak jalur A : "+jarakA);
console.log("jarak jalur B : "+jarakB);

if (jarakA>jarakB){
    console.log("JARAK JALUR TERPANJANG A");
    console.log("JARAK JALUR TERPENDEK B");
}else {
    console.log("JARAK JALUR TERPANJANG B");
    console.log("JARAK JALUR TERPENDEK A");
}