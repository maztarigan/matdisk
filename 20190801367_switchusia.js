var baca = require('readline-sync');

var usia = parseInt(baca.question("Usia Siswa : "));

switch (true){
    case usia=>3: case usia<=4:
        console.log("Siswa Play Ground (PG)");
        break;
    case usia=>5: case usia<=6:
        console.log("Siswa Taman Kanak-kanak (TK)");
        break;
    case usia=>7: case usia<=12:
        console.log("Siswa Sekolah Dasar (SD)");
        break;
    case usia=>13: case usia<=15:
        console.log("Siswa Sekolah Menengah Pertama (SMP)");
        break;
    case usia=>16: case usia<=18:
        console.log("Siswa Sekolah Menengah Atas (SMA)");
        break;
}