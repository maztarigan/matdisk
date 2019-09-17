var a = require('readline-sync');

var nilai = parseInt(a.question("Masukkan Nilai : "));

if(nilai>=81)
{
    console.log("NILAI A");
}else if((nilai>=70)&&(nilai<=80)){
    console.log("Nilai Anda B");
}else if ((nilai>=60)&&(nilai<=70)){
    console.log("Nilai Anda C");
}else if ((nilai>=50)&&(nilai<=60)){
    console.log("Nilai Anda D");
}else{
    console.log("Nilai Anda E");
}