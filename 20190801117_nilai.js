var inputkeyboard = require('readline-sync');

var Nilai = parseInt(inputkeyboard.question("Masukan Nilai:"));

if ((Nilai >= 81) && (Nilai <= 100)){
    console.log("NILAI A");
}else if ((Nilai >= 70) && (Nilai <= 80)){
    console.log("Nilai B");
}
else if ((Nilai >= 60) && (Nilai <= 69)){
    console.log("Nilai C");
}
else if ((Nilai >= 50) && (Nilai <= 59)){
    console.log("Nilai D");
}
else {
    console.log("Nilai E");
}