var bkeyboard = require('readline-sync');
var x = parseInt(bkeyboard.question("Masukan Nilai : "));

if (x>85){
    console.log("GET Nilai A");
}
if ((x>70) && (x<86)) {
    console.log("GET Nilai B");
}else {
}
if ((x>60) && (x<71)) {
    console.log("GET Nilai C");
}else {
}
if ((x>50) && (x<61)) {
    console.log("GET NIlai D");
}else {
}
if (x<51) {
    console.log("GET Nilai E");
}else {
}