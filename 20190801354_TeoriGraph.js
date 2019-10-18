console.log("TEORI GRAPH");
console.log("18 OKTOBER 2019");

var INPUT = require("readline-sync");

var JALUR_A1 =  parseInt([INPUT.question("INPUT JALUR A1 :  ")]);
var JALUR_A2 =  parseInt([INPUT.question("INPUT JALUR A2 :  ")]);
var JALUR_A3 =  parseInt([INPUT.question("INPUT JALUR A1 :  ")]);
var JALUR_B1 =  parseInt([INPUT.question("INPUT JALUR B1 :  ")]);
var JALUR_B2 =  parseInt([INPUT.question("INPUT JALUR B2 :  ")]);
var JALUR_B3 =  parseInt([INPUT.question("INPUT JALUR B3 :  ")]);

var JARAK_A = JALUR_A1  + JALUR_A2  + JALUR_A3 ;
var JARAK_B = JALUR_B1  + JALUR_B2  + JALUR_B3 ;

if (JARAK_A>JARAK_B){
    console.log("Jarak Terpanjang adalah Jalur A : " + JARAK_A  + "" + " Kilometer");
    console.log("Jarak Terpendek adalah Jalur B : " + JARAK_B  + "" + " Kilometer");
} else {
    console.log("Jarak Terpanjang adalah Jalur B : " + JARAK_B  + "" + " Kilometer");
    console.log("Jarak Terpendek adalah Jalur A : " + JARAK_A  + "" + " Kilometer");
}

console.log("╔══╦═╦═╦══╦═╦═╦╦╦╗");
console.log("║║║║║║║╠╗╔╣║║║║║║║");
console.log("║║║║╦║║║║║║╦║╔╬╬╬╣");
console.log("╚╩╩╩╩╩╩╝╚╝╚╩╩╝╚╩╩╝");