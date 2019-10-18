console.log("WELCOME")
var inputkey = require('readline-sync');

var JalurA1 = parseInt([inputkey.question("Masukan Jarak Jalur A 1 : ")]);
var JalurA2 = parseInt([inputkey.question("Masukan Jarak Jalur A 2 : ")]);
var JalurA3 = parseInt([inputkey.question("Masukan Jarak Jalur A 3 : ")]);
var JalurB1 = parseInt([inputkey.question("Masukan Jarak Jalur B 1 : ")]);
var JalurB2 = parseInt([inputkey.question("Masukan Jarak Jalur B 2 : ")]);
var JalurB3 = parseInt([inputkey.question("Masukan Jarak Jalur B 3 : ")]);

var JarakA = JalurA1 + JalurA2 + JalurA3;
var JarakB = JalurB1 + JalurB2 + JalurB3;

console.log("JARAK JALUR A : "+JarakA+ " KM");
console.log("JARAK JALUR B : "+JarakB+ " KM");

if (JarakA>JarakB){
    console.log("JARAK JALUR TERPANJANG : A" );
    console.log("JARAK JALUR TERPENDEK  : B" );
}else {
    console.log("JARAK JALUR TERPANJANG : B" );
    console.log("JARAK JALUR TERPENDEK  : A" );
}

console.log("THANK YOU")

