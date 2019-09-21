console.log("welcome to jugle")
var a = require('readline-sync');
var nilai = parseInt(a.question("Masukkan Nilai : "));
if(nilai>=85)
{
    console.log("NILAI A");
}else if((nilai>=70)&&(nilai<=86)){
    console.log("Nilai Anda B");
}else if ((nilai>=60)&&(nilai<=71)){
    console.log("Nilai Anda C");
}else if ((nilai>=50)&&(nilai<=61)){
    console.log("Nilai Anda D");
}else if ((nilai<=51)){
    console.log("Nilai Anda E");
}