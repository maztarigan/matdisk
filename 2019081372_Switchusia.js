var input = require ("readline-sync");
console.log ("SELAMAT DATANG")
var umur = parseInt(input.question("Silahkan Masukan Usia Anda : "));
switch(true){
    case umur=>3: case umur<=4 :
        console.log(" Anda Berada Di Tingkat PG Sederajat");
        break;
    case umur=>5: case umur<=6 :
        console.log("Anda Berada Di Tingkat TK Sederajat");
        break;
    case umur=>7: case umur<=12 :
        console.log("Anda Berada Di Tingkat SD Sederajat");
        break;
    case umur=>13: case umur<=15 :
        console.log("Anda Berada Di Tingkat SMP Sederajat");
        break;
    case umur=>16: case umur<=18 :
        console.log("Anda Berada Di Tingkat SMA Sederajat");
        break;
}