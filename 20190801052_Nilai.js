var x = require('readline-sync');

var a = parseInt(x.question("Masukkan Nilai:"));

if(a>80){
    console.log("NILAI A")
}else if((a>=70)&&(a<=80)){
    console.log("NILAI B")
}else if ((a>=60)&&(a<70)){
    console.log("NILAI C")
}else if ((a>=50)&&(a<60)){
    console.log("NILAI D")
}else{
    console.log("NILAI E")
}