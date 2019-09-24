var inputkeyboard = require("readline-sync") ;

var umur = parseInt(inputkeyboard.question("masukan umur anda")) ;

if ((umur >=3) && (umur <=4)) {
    console.log("Anda di Play Gruoup") ;
}else if ((umur >=5) && (umur <= 6)) {
    console.log("Anda di Taman Kanak-kanak") ;
}else if ((umur >=7) && (umur <=12)) {
    console.log("Anda di Sekolah Dasar") ;
}else if ((umur >=13)&& (umur <= 15))  {
    console.log("Anda di Sekolah Menengah Pertama") ;
}else if ((umur >=16)&& (umur<=18 )) {
    console.log("Anda di Sekolah Menengah Atas") ;
}else if ((umur > 18))  {

    console.log("Anda telah Lulus SMA") ;
}