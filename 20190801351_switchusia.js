var input = require('readline-sync');

var usia = parseInt(input.question("Masukkan Usia : "));

switch (true){
    case usia=>3 : case usia<=4:
        console.log("Sekolah Tingkat PG");
        break;
    case usia=>5 : case usia<=6:
        console.log("Sekolah Tingkat TK");
        break;
    case usia=>7 : case usia<=12:
        console.log("Sekolah Tingkat SD");
        break;
    case usia=>13 : case usia<=15:
        console.log("Sekolah Tingkat SMP");
        break;
    case usia=>16 : case usia<=18:
        console.log("Sekolah Tingkat SMK");
        break;
}


