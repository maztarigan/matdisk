console.log("Welcome to my Distance Maps Calculator")
var inputkeyboard = require("readline-sync");

var JalurA1 = parseInt([inputkeyboard.question("Masukan Jalur A1 : " )]);
var JalurA2 = parseInt([inputkeyboard.question("Masukan Jalur A2 : " )]);
var JalurA3 = parseInt([inputkeyboard.question("Masukan Jalur A3 : " )]);
var JalurB1 = parseInt([inputkeyboard.question("Masukan Jalur B1 : " )]);
var JalurB2 = parseInt([inputkeyboard.question("Masukan Jalur B2 : " )]);
var JalurB3 = parseInt([inputkeyboard.question("Masukan Jalur B3 : " )]);


var jarakjalurA = JalurA1 + JalurA2 + JalurA3;
var jarakjalurB = JalurB1 + JalurB2 + JalurB3;

if (jarakjalurA>jarakjalurB){
    console.log("Jarak Terpanjang adalah jalur A : " +jarakjalurA + " Km");
    console.log("Jarak Terpendek adalah jalur B : " +jarakjalurB +  " Km");
} else {
    console.log("Jarak Terpanjang adalah jalur B : " +jarakjalurB + " Km");
    console.log("Jarak Terpendek adalah jalur A : " +jarakjalurA + " Km"); 
}

console.log("Thank you for using our Distance Maps Calculator :)");