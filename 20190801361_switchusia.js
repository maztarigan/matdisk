var Anak = require('readline-sync');

var umur = parseInt (Anak.question("Masukkan umur : "));

switch (true){
    case usia =>3 : case umur<=4: 
    console.log ("Tingkat (PG)");
    break;
    case usia =>5 : case umur<=6:
    console.log ("Tingkat (TK)");
    break;
    case usia =>7 : case umur<=12:
    console.log ("Tingkat (SD)");
    break;
    case usia =>13 : case umur<=15:
    console.log ("Tingkat (SMP)");
    break;
    case usia =>16 : case umur<=18:
    console.log ("Tingkat (SMA)");
    break;
}