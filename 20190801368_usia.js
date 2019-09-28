var val = require('readline-sync');

var x = parseInt(val.question("Masukan Usia     : "));

if ((x >= 3) && (x <= 4)) {
    console.log ("Tingkatan PG");
}else if ((x >= 4) && (x <= 6)) {
    console.log ("Tingkatan TK");
}else if ((x >= 7) && ( x <= 12)) {
    console.log("Tingkatan SD");
}else if ((x >= 13) && (x <= 15)) {
    console.log("Tingkatan SMP");
}else if ((x >= 16) && (x <= 18 )) {
    console.log("Tingkatan SMA");
}   