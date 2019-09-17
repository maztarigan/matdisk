var inputkeyboard = require ('readline-sync');
var nilai = parseInt(inputkeyboard.question('Masukkan Nilai: '));

if (nilai>=80) {
    console.log('Nilai A') 
} else if ((nilai >= 70) && (nilai<=80)) {
    console.log('Nilai B')
} else {
    console.log('ngetes');
}