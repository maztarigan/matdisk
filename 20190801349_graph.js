var Jarak = require("readline-sync")

var A1 = parseInt(Jarak.question("Masukan Jarak A1 : "));
var A2 = parseInt(Jarak.question("Masukan Jarak A2 : "));
var A3 = parseInt(Jarak.question("Masukan Jarak A3 : "));
var B1 = parseInt(Jarak.question("Masukan Jarak B1 : "));
var B2 = parseInt(Jarak.question("Masukan Jarak B2 : "));
var B3 = parseInt(Jarak.question("Masukan Jarak B3 : "));

var Jarak_A = []
var Jarak_B = []

Jarak_A.push(A1)
Jarak_A.push(A2)
Jarak_A.push(A3)
Jarak_B.push(B1)
Jarak_B.push(B2)
Jarak_B.push(B3)

var Jarak_Jalur_A = Jarak_A[0]+Jarak_A[1]+Jarak_A[2];
var Jarak_Jalur_B = Jarak_B[0]+Jarak_B[1]+Jarak_B[2];

if(Jarak_Jalur_A > Jarak_Jalur_B){
    console.log("Jarak Terpanjang = A");
    console.log("Jarak Terpendek = B");
}else{
    console.log("Jarak Terpanjang B");
    console.log("Jarak Terpendek A");
}  