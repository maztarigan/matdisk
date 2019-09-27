var key = require ('readline-sync')
var umur = parseInt (key.question("masukkan umur anda : "));
switch(true){
case umur=>3: case umur <=4:
    console.log("anda tingkat PG");
    break;
case umur=>5: case umur <=6:
    console.log("anda tingkat TK");
    break;
case umur=>7: case umur <=12:
    console.log("anda tingkat SD");
    break;
case umur=>13: case umur <=15:
    console.log("anda tingkat SMP");
    break;
case umur=>16: case umur <=18:
     console.log("anda tingkat SMA");
     break;
}

