
var mhs = [
    ['',0],
    ['Farid Handoyo',17,30],
    ['Sephia Ananda Putri',8,17],
    ['M Sudirman',3,18],
    ['Zalzabila',14,45],
    ['Sendihot Sihole',7,15],
    ['Diki Anugrah',12,20],
    ['Indah Cahyani',16,50],
    ['Dita Oktaviani',5,13],
    ['Anatasya',6,15],
    ['Heny',30,60],
    ['Iir',8,30],
    ['Dita Chandra',22,40],
    ['Iva Sanggra',14,45],
    ['Ndaru',5,13],
    ['Delia',6,27],
    ['M.Nur Kholis',4,10],
    ['Novaliani',16,50],
    ['Raffa',12,25],
    ['Danu Faisal',2,3],
    ['Aqila',3,7]
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