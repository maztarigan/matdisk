var inkey = require('readline-sync')
var umur = parseInt(inkey.question("Masukan Umur :"));

switch (true){
    case umur=>3:
    case umur<=4: 
        console.log("Anda Tingkat PlayGroup");
        break;

    case umur=>5:
    case umur<=6:
        console.log("Anda Tingkat Taman Kanak-Kanak");
        break;

    case umur=>7:
    case umur<=12:
        console.log("Anda Tingkat Sekolah Dasar");
        break;

    case umur=>13:
    case umur<=15: 
        console.log("Anda Tingkat Sekolah Menengah Pertama");
        break;

    case umur=>16:
    case umur<=18:
        console.log("Anda Tingkat Sekolah Menengah Akhir");
        break;
}