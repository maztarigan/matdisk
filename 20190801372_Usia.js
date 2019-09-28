console.log ("selamat datang");
var Nilai = require('readline-sync');
var a = parseInt (Nilai.question("Silahkan Masukan Umur Anda :"));

if ((a >= 16) &&(a <= 18 )) {
    console.log ("SMA Sederajat");
}else if ((a >= 13) && (a <= 15)){
    console.log ("SMP Sederajat");
}else if ((a >= 7 ) && (a<= 12)) {
    console.log ("SD Sederajat");
}else if ((a >= 5 ) && ( a<= 6)){
    console.log ("TK Sederajat");
}else if (a<=4){
    console.log ("PG Sederajat");
}