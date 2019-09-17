var inputkeyboard = require('readline-sync');

var nilai = parseInt(inputkeyboard.question("masukkan nilai: "));

if(nilai > 80){
    console.log("nilai tsb A")
}else if((nilai > 69)&&(nilai < 81)){
    console.log("nilai tsb B");
}else if((nilai > 59)&&(nilai <70)){
    console.log("nilai tsb C");
}else if((nilai > 49)&&(nilai < 60)){
    console.log("nilai tsb D");
}else
{
    console.log("nilai E")
}