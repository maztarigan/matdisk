console.log('WELCOME')
var input = require("readline-sync");

//Jalur A
var Node_A_1 = parseInt([input.question("Masukan Node 1 : " )]);
var Node_A_2 = parseInt([input.question("Masukan Node 2 : " )]);
var Node_A_3 = parseInt([input.question("Masukan Node 3 : " )]);
//Jalur B
var Node_B_1 = parseInt([input.question("Masukan Node 1 : " )]);
var Node_B_2 = parseInt([input.question("Masukan Node 2 : " )]);
var Node_B_3 = parseInt([input.question("Masukan Node 3 : " )]);

//Rumus
var titiknode_A = Node_A_1 + Node_A_2 + Node_A_3;
var titiknode_B = Node_B_1 + Node_B_2 + Node_B_3;

//Hasil
console.log('Hasilnya Adalah :')
if (titiknode_A>titiknode_B){
    console.log("Titik Terpanjang A : " +titiknode_A + " Km");
    console.log("Titik Terpendek B : " +titiknode_B +  " Km");
} else {
    console.log("Titik Terpanjang B : " +titiknode_B + " Km");
    console.log("Titik Terpendek A : " +titiknode_A + " Km"); 
}
console.log('TERIMA KASIH')