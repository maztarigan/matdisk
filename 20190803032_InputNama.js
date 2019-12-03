var mhs = [
    ['',0],
    ['farid handoyo',17,30],
    ['sephia ananda putri',8,17],
    ['m sudirman',3,18],
    ['zalzabila',14,45],
    ['sendihot',7,15],
    ['diki anugrah',12,20],
    ['indah cahyani',16,50],
    ['dita oktaviani',5,13],
    ['anatasya',6,15],
    ['heny',30,60],
    ['iir',8,30],
    ['dita chandra',22,40],
    ['iva sanggra',14,45],
    ['ndaru',5,13],
    ['delia',6,27],
    ['m.nur kholis',4,10],
    ['novaliani',16,50],
    ['raffa',12,25],
    ['danu faisal',2,3],
    ['aqila',3,7]
]
var key = require('readline-sync')
var nama = key.question('Input Nama : ')

var ketemu = false;
var jrk = mhs[0,1];
var wkt = mhs[0,2];
var no = "";
for(var i=0; i<mhs.length; i++){
    if(mhs[i][0] == nama){
        ketemu = true;
        nama = mhs[i][0]
        jrk  = mhs[i][1]
        wkt  = mhs[i][2]
        no = i;
    }
}
if(ketemu = true){
    console.log(nama," Di Data ",no," Jarak : ",jrk," waktu : ",wkt)
}else{
    console.log("nama Tidak Di Temukan")
}




