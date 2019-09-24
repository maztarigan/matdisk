var inputkeyboard = require('readline-sync')

var umur =parseInt(inputkeyboard.question("Masukan Umur Anda: "));

switch (umur){
    case 3: case 4:
            console.log("Anda Di tingkat PG");
        break;
    case 5: case 6:
            console.log("Anda Di tingkat TK");
        break;
    case 7: case 8: case 9: case 10: case 11: case 12:
            console.log("Anda Di tingkat SD");
        break;
    case 13: case 14: case 15:
            console.log("Anda Di tingkat SMP)");
        break;
    case 16: case 17: case 18:
            console.log("Anda Di tingkat SMA)");
        break;
    default:
            console.log("Anda Di tingkat Kuliah atau Kerja");
        break;
}