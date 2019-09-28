var baca = require('readline-sync');

var usia = parseInt(baca.question(" MasuKkan Usia : "));
if (( usia >= 16 ) && ( usia <= 18 )) {
    console.log(" SMA ");
}else if (( usia >= 13 ) && ( usia <= 15 )) {
    console.log(" SMP ");
}else if (( usia >= 7 ) && ( usia <= 12 )) {
    console.log(" SD ");
}else if (( usia >= 5 ) && ( usia <= 6 )) {
    console.log(" TK ");
}else if ( usia <= 4 ) {
    console.log(" PG ");
}

