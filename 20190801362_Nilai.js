var baca = require('readline-sync');

var Nilai = parseInt(baca.question("MasuKkan Angka : "));
if ( Nilai > 85) {
    console.log(" A ");
}else if (( 70 < Nilai ) && ( Nilai < 86 )) {
    console.log(" B ");
}else if (( 60 < Nilai ) && ( Nilai < 71 )) {
    console.log(" C ");
}else if (( 50 < Nilai ) && ( Nilai < 61 )) {
    console.log(" D ");
}else if ( Nilai < 51) {
    console.log(" E ");
}
