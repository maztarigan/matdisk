var inputkeyboard = require("readline-sync") ;

var nilai = parseInt(inputkeyboard.question("masukan nilai")) ;

if ((nilai >= 81) && (nilai <=100)) {
    console.log("NILAI A") ;
}else if ((nilai >= 70) && (nilai <= 80)) {
    console.log("NILAI B") ;
}else if ((nilai >= 60) && (nilai <=69)) {
    console.log("NILAI C") ;
}else if ((nilai >=50 )&& (nilai <=59)) {
    console.log("NILAI D") ;
}  else 
{  
    console.log("NIALI E") ;
}


