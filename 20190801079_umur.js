console.log('Menghitung umur & kelas seseorang');
var masukkankeyboard = require('readline-sync');
var u = parseInt(masukkankeyboard.question('masukkan umur anak anda: ')) ;

if ((u=>3)&&(u<=4)) {
    console.log('Anak ini sedang dalam tingkat PG');
} else if ((u=>5)&&(u<=6)) {
    console.log('Anak ini sedang dalam tingkat TK');
} else if ((u=>7) && (u<=12)) {
    console.log('Anak ini sedang dalam tingkat SD');
} else if ((u>13) && (u<15)) {
    console.log('Anak ini sedang dalam tingkat SMP');
} else if ((u>16)&&(u<18)){
    console.log('Anak ini sedang dalam tingkat SMA');
} else {
    console.log('anak anda seharusnya sudah lulus semua tingkat sekolah');
}

console.log("");
console.log("NOTE : Jika anda memasukkan umur 1 atau 2. Maka sudah pasti anak anda belom bersekolah")