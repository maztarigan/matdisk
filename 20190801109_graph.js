console.log ("GRAPH");

var inputkeyboard = require('readline-sync');

console.log ("DATA 1");
var Jalur_A = [] ;
Jalur_A.push(parseInt(inputkeyboard.question("Jarak A Titik 1 = ")));
Jalur_A.push(parseInt(inputkeyboard.question("Jarak A Titik 2 = ")));
Jalur_A.push(parseInt(inputkeyboard.question("Jarak A Titik 3 = ")));

var Jarak_Jalur_A = Jalur_A [0] + Jalur_A [1] + Jalur_A [2];

console.log ("DATA 2");
var Jalur_B = [] ; 
Jalur_B.push(parseInt(inputkeyboard.question("Jarak A Titik 1 = ")));
Jalur_B.push(parseInt(inputkeyboard.question("Jarak A Titik 2 = ")));
Jalur_B.push(parseInt(inputkeyboard.question("Jarak A Titik 3 = ")));

var Jarak_Jalur_B = Jalur_B [0] + Jalur_B [1] + Jalur_B [2];

if (Jarak_Jalur_A > Jarak_Jalur_B){
    console.log(">>>>>>>>>>>>>>><<<<<<<<<<<<<<<")
    console.log("Jarak Terpanjang =" +Jarak_Jalur_A)
    console.log("Jarak Terpendek =" +Jarak_Jalur_B)
    console.log(">>>>>>>>>>>>>>><<<<<<<<<<<<<<<")
}
else{
    console.log(">>>>>>>>>>>>>>><<<<<<<<<<<<<<<")
    console.log("Jarak Terpanjang =" +Jarak_Jalur_B)
    console.log("Jarak Terpendek =" +Jarak_Jalur_A)
    console.log(">>>>>>>>>>>>>>><<<<<<<<<<<<<<<")
}

console.log ("TERIMA KASIH");