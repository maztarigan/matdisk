console.log("umur dan tingkatan");
var key = require('readline-sync')
var umur = parseInt(key.question('umur :'));
if (umur < 5){
    var hasil = "PG";
}
else if (umur < 7){
    var hasil = "TK";
}
else if (umur < 13){
    var hasil = "SD";
}
else if (umur < 16){
    var hasil = "SMP";
}
else if (umur < 19){
    var hasil = "SMA";
}
else{
    var hasil = "-";
}



console.log(hasil);