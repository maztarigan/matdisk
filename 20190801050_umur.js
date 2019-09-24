var input = require("readline-sync") ;

var umur = parseInt(input.question("masukkan umur anda ")) ;

if ((umur >= 3) && (umur <= 4)) {
    console.log("Tingkat PG") ;
}else if ((umur >= 5) && (umur <= 6)) {
    console.log("Tingkat TK") ;
}else if ((umur >= 7) && (umur <= 12)) {
    console.log("Tingkat SD") ;
}else if ((umur >= 13) && (umur <= 15)) {
    console.log("Tingkat SMP") ;
}else if ((umur >= 16) && (umur<= 18)) {
    console.log("Tingkat SMA") ;
}else if (umur > 18) ; {
    console.log("Anda Lulus SMA")
}