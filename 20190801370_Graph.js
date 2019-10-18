var inputkey = require('readline-sync');

var JalurA1 = parseInt([inputkey.question("Masukan Jarak Jalur A 1 : ")]);
var JalurA2 = parseInt([inputkey.question("Masukan Jarak Jalur A 2 : ")]);
var JalurA3 = parseInt([inputkey.question("Masukan Jarak Jalur A 3 : ")]);
var JalurB1 = parseInt([inputkey.question("Masukan Jarak Jalur B 1 : ")]);
var JalurB2 = parseInt([inputkey.question("Masukan Jarak Jalur B 2 : ")]);
var JalurB3 = parseInt([inputkey.question("Masukan Jarak Jalur B 3 : ")]);

var Jarak_JalurA = JalurA1 + JalurA2 + JalurA3;
var Jarak_JalurB = JalurB1 + JalurB2 + JalurB3;

console.log("JARAK JALUR A : "+Jarak_JalurA+ " KM");
console.log("JARAK JALUR B : "+Jarak_JalurB+ " KM");

if (Jarak_JalurA>Jarak_JalurB){
    console.log("Jarak Jalur Terpanjang Adalah : A" );
    console.log("Jarak Jalur Terpendek Adalah  : B" );
}else {
    console.log("Jarak Jalur Terpanjang Adalah : B" );
    console.log("Jarak Jalur Terpendek Adalah  : A" );
}