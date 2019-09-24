var inputkeyboard = require("readline-sync") ;

var umur = parseInt(inputkeyboard.question("masukkan umur ")) ;

if ((umur >= 3) && (umur <= 4)) {
    console.log("Anda Tingkat PG") ;
}else if ((umur >= 5) && (umur <= 6)) {
    console.log("Anda Tingkat TK") ;
}else if ((umur >= 7) && (umur <= 12)) {
    console.log("Anda Tingkat SD") ;
}else if ((umur >= 13) && (umur <= 15)) {
    console.log("Anda Tingkat SMP") ;
}else if ((umur >= 16) && (umur<= 18)){
    console.log("Anda Tingkat SMA") ;
}else if (umur > 18) ; {
    console.log("Anda Sudah Lulus SMA")
}