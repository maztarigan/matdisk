var key = require('readline-sync');
var a = parseInt(key.question("Masukkan Nilai : "));

if (a>85) {
    console.log("Nilai A");
}
if ((a>70) && (a<86)) {
    console.log("Nilai B");
}else {
}
if ((a>60) && (a<71)) {
    console.log("NIlai C");
}else {
}
if ((a>50) && (a<61)) {
    console.log("NIlai D");
}else {
}
if (a<51) {
    console.log("Nilai E");
}else {
}