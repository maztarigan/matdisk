var inputkeyboard = require('readline-sync')

var umur =parseInt(inputkeyboard.question("Masukan Umur Anda: "));

switch (umur){
    case 3: case 4:
            console.log("Tingkat Play Group (GP)");
        break;
    case 5: case 6:
            console.log("Tingkat Taman Kanak-kanak (TK)");
        break;
    case 7: case 8: case 9: case 10: case 11: case 12:
            console.log("Tingkat Sekolah Dasar (SD)");
        break;
    case 13: case 14: case 15:
            console.log("Tingkat Sekolah Menengah Pertama (SMP)");
        break;
    case 16: case 17: case 18:
            console.log("Tingkat Sekolah Menengah Atas (SMA)");
        break;
    case 19:
            console.log("Kuliah atau Kerja");
        break;
}
 