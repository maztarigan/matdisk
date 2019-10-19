var key = require ('readline-sync');
var usia = parseInt(key.question("Masukkan Usia : "));

switch(true){
    case usia => 3: case usia <= 4:
        console.log("PG");
        break;
    case usia => 5: case usia <= 6:
        console.log("TK");
        break;
    case usia => 7: case usia <= 12:
        console.log("SD");
        break;
    case usia => 13: case usia <= 15:
        console.log("SMP");
        break;
    case usia => 16: case usia <= 18:
        console.log("SMA");
        break;
}