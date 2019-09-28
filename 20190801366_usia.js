var baca = require ('readline-sync');

var usia = parseInt ((baca.question)("Masukan Usia : "));

if ((usia > 2 ) && ( usia < 5)){
    console.log("PG");
} else if ((usia > 4 ) && (usia <7)){
    console.log("TK");
} else if ((usia > 6) && (usia < 13)){
    console.log("SD");
} else if ((usia > 12) && (usia < 16)){
    console.log("SMP");
} else if ((usia > 15) && (usia < 19)){
    console.log("SMA");
}