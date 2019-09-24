console.log('Menghitung umur & kelas seseorang');
var masukkankeyboard = require('readline-sync');
var u = parseInt(masukkankeyboard.question('masukkan umur anda: ')) ;

switch (true) {
        case u=>3:
        case u<=4:
            console.log("Anda sedang bersekolah PG");
            break;
        case u=>5: 
        case u<=6:
            console.log("Anda sedang bersekolah TK");
            break;
        case u=>7: 
        case u<=12:
            console.log("Anda bersekolah SD");
            break;
        case u=>13: 
        case u<=15:
            console.log("Anda bersekolah SMP");
            break;
        case u=>16: 
        case u<=18:
            console.log("Anda bersekolah SMA");
            break;
        default:
            console.log("Anda sudah lulus bersekolah!");
            break;
    }
    
console.log("");
console.log("NOTE : Jika anda memasukkan umur 1 atau 2. Maka sudah pasti anak anda belom bersekolah")