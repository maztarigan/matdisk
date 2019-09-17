var inputkeyboard = require("readline-sync");

var nilai = parseInt(inputkeyboard.question("Masukan Nilai :"));

if ((nilai > 80) && (nilai <= 100)){
    console.log ("Nilai A");
}
else if ((nilai > 69) && (nilai < 81)){
    console.log ("Nilai B");
}
else if ((nilai > 59) && (nilai < 70)){
    console.log ("Nilai C");
}
else if ((nilai > 49) && (nilai < 60)){
    console.log ("Nilai D");
}
else {
    console.log ("Nilai E");
}