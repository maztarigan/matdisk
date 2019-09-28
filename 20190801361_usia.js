console.log ("Menghitung Usia");
var Anak = require('readline-sync');

var usia = parseInt (Anak.question("Masukkan usia : "));

if ((usia >=3) && (usia<=4)) {
    console.log ("Tingkat PG");
}else if((usia>=5) && (usia <=6)) {
    console.log ("Tingkat TK");
}else if((usia>=7) && (usia <=12)) {
    console.log ("Tingkat SD");
}else if((usia>=13) && (usia<=15)) {
    console.log ("Tingkat SMP");
}else if((usia>=16) && (usia<=18)) {
    console.log ("Tingkat SMA");
}