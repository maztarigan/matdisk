var key = require("readline-sync") ;
var umur = parseInt(key.question("masukkan umur ")) ;
switch (umur) {
    case 3:case 4:
        console.log("Anda Tingkat PG");
    break;
    case 5:case 6:
        console.log("Anda Tingkat TK");
    break;
    case 7: case 8:case 9: case 10: case 11: case 12:
        console.log("Anda Tingkat SD");
    break;
    case 13: case 14: case 15:
        console.log("Anda Tingkat SMP");
    break;
    case 16: case 17: case 18:
        console.log("Anda Tingkat SMA")
    break;
}