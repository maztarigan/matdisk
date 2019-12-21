console.log ("TUGAS FUZZY");
console.log (" 20 12 2019");
console.log ("Himpunan Fuzzy Muda, Setengah Baya dan Tua ");

var b=require('readline-sync');
var a=parseInt(b.question("Masukkan Usia ="));
if(a<=45){
    hasil=(0.1*(5/10)*(a-25));
    console.log((1-hasil)*100,'% Muda');
    console.log(hasil*100,'% Paruh Baya');
}else if(a<=65){
        hasil=(0.1*(5/10)*(a-45));
        console.log((1-hasil)*100,'% Paruh Baya');
        console.log(hasil*100,'% Tua');
}