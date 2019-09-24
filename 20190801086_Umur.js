var inkey = require('readline-sync');
var Umur = parseInt(inkey.question("Masukan Umur :"));

if ((Umur >= 3) && (Umur <= 4)){
    console.log("Anda Tingkat PlayGROUP");
}

else if ((Umur >= 5) && (Umur <= 6)){
    console.log("Anda Tingkat Taman Kanan-Kanak");
}

else if ((Umur >= 7) && (Umur <= 12)){
    console.log("Anda Tingkat Sekolah Dasar");
}

else if ((Umur >= 13) && (Umur <= 15)){
    console.log("Anda Tingkat Sekolah Menengah Pertama");
}

else if ((Umur >= 16) && (Umur <= 18)){
    console.log("Anda Tinkat Sekolah Menengah Akhir");
}