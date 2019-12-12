var input = require ('readline-sync')
var sam = parseInt(input.question("Masukan Ukuran Sepatu "));

var adil = "adil";
var tat = "tat";
var ilham = "ilham";
var saman = "saman";
var retyan = "retyan";
var ghozi = "Ghozi";
var irfan = "irfan";
var dhila = "dhila";
var dimas = "dimas";
var gilang = "gilang";
var angga = "angga";
var hafiz = "hafiz";
var maulana = "maulana";
var elfa = "elfa";
var setianing = "setianing";


var nuw =  require('readline-sync')
var nuw = [
    ["adil", 38, "Biru"], ["tata", 40, "hitam"], ["ilham", 41, "hitam"], ["saman", 42, "Hitam"],["retyan", 42, "biru"],
["ghozi", 43, "Biru" ], ["Irfan", 42, "biru" ],["dhila", 36, "hitam"], ["dimas", 43, "biru dongker"], ["gilang", 42, "hitam" ], 
["angga", 41, "coklat"],["hafiz", 40, "hitam"], ["maulana", 42, "hiatam"], ["elfa", 39,"putih"], ["setianing", 39, "hitam"]];


nuw.sort((a,b) => {
    if(a[1] > b[1]) return 1;
    if(b[1] > a[1]) return -1;
    return 0 
}); 

for (i = 0 ; i <= 14 ; i++) {
    console.log("Nama : "+nuw[i][0]+", Ukuran : ("+nuw[i][1]+") Warna : ("+nuw[i][2]+")")
}