var baca = require('readline-sync');

var a = parseInt(baca.question("Usia Siswa : "));

if ((a >= 16) && (a <= 18)){
    console.log("Sekolah Menengah Atas");
} else if ((a >= 13) && (a <= 15)){
    console.log("Sekolah Menengah Pertama");
} else if ((a >= 7) && (a <= 12)){
    console.log("Sekolah Dasar");
} else if ((a >= 5) && (a <= 6)){
    console.log("Taman Kanak-kanak");
} else if ( a <= 4){
    console.log("Play Ground");
}