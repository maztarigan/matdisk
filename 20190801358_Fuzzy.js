var bacakeyboard= require('readline-sync');
var Umur = parseInt(bacakeyboard.question("Masukan Umur : "));
if (Umur <= 45 && Umur >= 25) {
    var diff = 0.1 * 0.5 * (Umur-25)
    console.log((1-diff)*100+"%"+" Muda \n"+diff*100+"% Setengah Baya")
}else if (Umur <= 65 && Umur >= 45 ) {
    var diff = 0.1 * 0.5 *(Umur-45)
    console.log((1-diff)*100+"%"+ " Setengah Baya \n"+diff*100+"% Tua")
}