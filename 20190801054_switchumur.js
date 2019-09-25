var input = require ("readline-sync");
var umur = parseInt(input.question("Masukkan Umur Anda:"));
switch(true){
    case umur<=2:
        console.log ("Anda Masih Bayi")
        break;
    case umur=>3: case umur<=4 :
        console.log("Anda Tingkat PG");
        break;
    case umur=>5: case umur<=6 :
        console.log("Anda Tingkat TK");
        break;
    case umur=>7: case umur<=12 :
        console.log("Anda Tingkat SD");
        break;
     case umur=>13: case umur<=15 :
        console.log("Anda Tingkat SMP");
        break;
    case umur=>16: case umur<=18 :
        console.log("Anda Tingkat SMA Sederajat");
        break;
    case umur<=30:
        console.log("Jenjang Perkuliahan atau Kerja");
        break;
}