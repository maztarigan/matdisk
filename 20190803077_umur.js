console.log("umur & tingkatan");
var key = require('readline-sync');
var umur = parseInt(key.question('umur :'));
if (umur <4){
    var hasil ="pg";
}
else if( umur <6){
    var hasil ="tk";
}
else if (umur <12){
    var hasil ="sd";
}
else if (umur <15){
    var hasil ="smp";
}
else if (umur <18){
    var hasil ="sma";
}
else{

}

console.log(hasil);