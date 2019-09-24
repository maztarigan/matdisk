var inputkeyboard = require("readline-sync") ;

var umur = parseInt(inputkeyboard.question("masukan umur anda")) ;

switch (umur){
    case 3 : case 4 :
        console.log("Play Group") ;
        break ;
    case 5 : case 6 :
        console.log("Taman Kanak-Kanak") ;
        break ;
    case 7 : case 8 : case 9 : case 10 : case 11 : case 12 :
        console.log("Sekolah Dasar")
        break ;
    case 13 : case 14 : case 15 :
        console.log("Sekolah Menengah Pertama")
        break ;
    case 16 :case 17 : case 18 :
        console.log("Sekolah Menengah Atas")
        break ;

}