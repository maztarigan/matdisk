console.log("-------------------")
console.log("SELAMAT DATANG")
console.log("ALFIAN AJI WAHYUDI")
console.log("20190801422")
console.log("Matematika Diskrit")
console.log("-------------------")
var Inkey= require('readline-sync');
var usia_mhs = parseInt(Inkey.question("Masukan usia : "));
if (usia_mhs <= 45 && usia_mhs >= 25) {
    var diff = 0.1 * 0.5 * (usia_mhs-25)
    console.log((1-diff)+"%"+" Muda \n"+diff+"% Setengah Baya")
}else if (usia_mhs <= 65 && usia_mhs >= 45 ) {
    var diff = 0.1 * 0.5 *(usia_mhs-45)
    console.log((1-diff)+"%"+ " Setengah Baya \n"+diff+"% Tua")
}