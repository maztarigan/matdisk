var inputkey = require('readline-sync');

console.log("Graf Jarak Dengan Masing Masing 4 Titik");
console.log("Data A");
var Jalur_A = [];
    Jalur_A.push(parseInt(inputkey.question('Jarak A Titik 1 : ')));
    Jalur_A.push(parseInt(inputkey.question('Jarak A Titik 2 : ')));
    Jalur_A.push(parseInt(inputkey.question('Jarak A Titik 3 : ')));
    Jalur_A.push(parseInt(inputkey.question('Jarak A Titik 4 : ')));

console.log("Data B");
var Jalur_B = [];
    Jalur_B.push(parseInt(inputkey.question('Jarak B Titik 1 : ')));
    Jalur_B.push(parseInt(inputkey.question('Jarak B Titik 2 : ')));
    Jalur_B.push(parseInt(inputkey.question('Jarak B Titik 3 : ')));
    Jalur_B.push(parseInt(inputkey.question('Jarak B Titik 4 : ')));

        var Jarak_Jalur_A = Jalur_A[0]+Jalur_A[1]+Jalur_A[2]+Jalur_A[3];
        var Jarak_Jalur_B = Jalur_B[0]+Jalur_B[1]+Jalur_B[2]+Jalur_B[3];

if(Jarak_Jalur_A>Jarak_Jalur_B){
    console.log("==============================");
    console.log("Jarak Terpanjang : "+Jarak_Jalur_A+"KM");
    console.log("Jarak Terdekat : "+Jarak_Jalur_B+"KM");
    console.log("==============================");
}else{
    console.log("==============================");
    console.log("Jarak Terpanjang : "+Jarak_Jalur_B+"KM");
    console.log("Jarak Terdekat : "+Jarak_Jalur_A+"KM");
    console.log("==============================");
}