var baca =require('readline-sync');
console.log("==================Data Sepatu==================");

var maulana = "Maulana";
var tata = "Tata";
var adil = "Adil";
var acung = "Acung";
var saman = "Saman";
var retyan = "Retyan";
var ghozy = "Ghozy";
var irfan = "Irfan";
var dhila = "Dhila";
var dimas = "Dimas";
var angga = "Dimas";
var hafiz = "Hafiz";
var elfa = "Elfa";
var setianing = "Setyaning";
var gilang = "Gilang";
var hitam = "Hitam";
var putih = "Putih";
var biru = "Biru";
var birudongker = "Biru Dongker";
var cokelat = "Cokelat";

var data = [[38,adil,biru],[40,tata,hitam],[41,acung,hitam],[42,saman,putih],[42,retyan,biru],[43,ghozy,biru],[42,irfan,biru],[36,dhila,hitam],[43,dimas,birudongker],[42,gilang,hitam],[41,angga,cokelat],[40,hafiz,hitam],[42,maulana,hitam],[39,elfa,putih],[39,setianing,hitam]];

data.sort((a,b) => {
    if (a[0]>b[0]) return 1;
    if (b[0]>a[0]) return -1;
    return 0;
     })
     
for (var i= 0 ;i <=14; i++){
     
    console.log("(Ukuran Sepatu) "+data[i][0]+", (Nama) "+data[i][1]+", (Warna) "+data[i][2]+"");
    
}

console.log("===============================================");
var ukuran = parseInt(baca.question("Cari Size Sepatu Mahasiswa = "));
console.log("===============================================");
var data = [[38,adil,biru],[40,tata,hitam],[41,acung,hitam],[42,saman,putih],[42,retyan,biru],[43,ghozy,biru],[42,irfan,biru],[36,dhila,hitam],[43,dimas,birudongker],[42,gilang,hitam],[41,angga,cokelat],[40,hafiz,hitam],[42,maulana,hitam],[39,elfa,putih],[39,setianing,hitam]];

for (var i= 0 ;i <=14; i++){
    if(ukuran==data[i][0])
    console.log("(Ukuran Sepatu) "+data[i][0]+", (Nama) "+data[i][1]+", (Warna) "+data[i][2]+"");
    
}
