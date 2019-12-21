var usia = require("readline-sync");
var a = parseInt(usia.question("MASUKAN USIA = "));

if (a <= 45 && a >= 25){
    hasil = (0.1*(5/10)*(a-25));
    console.log((1-hasil)*100, "% MUDA");
    console.log(hasil*100, "% SEPARUH BAYA");
}else if (a <= 65 && a >= 45){
    hasil = (0.1*(5/10)*(a-25));
    console.log((1-hasil)*100, "% SEPARUH BAYA");
    console.log(hasil*100, "% TUA");
}