/*
    Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswi Adalah : 
    Aqila       3,7
    Noval       16,50
    Chika       6,15
    Dita        5,13
    Zalza       15,40
    Iir         8,30
    Delia       6,27
    Iva         14,37
    Indah       16,40
    Tentukan Jarak Terdekat Dan Waktu Tercepat ? ....
*/
var isi = "Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswi Adalah : ";
var a = [
            [3,7],
            [16,50],
            [6,15],
            [5,13],
            [15,40],
            [8,30],
            [6,27],
            [14,37],
            [16,40]
        ];
console.log("=====================================================================");
console.log(isi);
console.log("Aqila : ",a[0]);
console.log("Noval : ",a[1]);
console.log("Chika : ",a[2]);
console.log("Dita  : ",a[3]);
console.log("Zalza : ",a[4]);
console.log("Iir   : ",a[5]);
console.log("Delia : ",a[6]);
console.log("Iva   : ",a[7]);
console.log("Indah : ",a[8]);
console.log("\nTentukan Jarak Terdekat Dan Waktu Tercepat ?");

var min_jar = a[0][0];
var min_jam = a[0][1];
var nama    =  a[0];
for(var i = 0; i<a.length; i++){
    for(var j = 0; j<=1; j++){
        if(a[i][j] < min_jar){
            min_jar = a[i][j];
            nama    = a[i];
        }
        else if(a[i][j] < min_jam){
            min_jam = a[i][j];
            nama    = a[i];
        }
    }
}
a[0][0] = "Aqila";     a[0][1] = "Aqila";
a[1][0] = "Noval";     a[1][1] = "Noval";
a[2][0] = "Chika";     a[2][1] = "Chika";
a[3][0] = "Dita";      a[3][1] = "Dita";
a[4][0] = "Zalza";     a[4][1] = "Zalza";
a[5][0] = "Iir";       a[5][1] = "Iir";
a[6][0] = "Delia";     a[6][1] = "Delia";
a[7][0] = "Iva";       a[7][1] = "Iva";
a[8][0] = "Indah";     a[8][1] = "Indah";
console.log("Jarak Tercepat Di Tempuh Oleh : ",nama,"Dengan Jarak Tempuh : "+min_jar);
console.log("Waktu Tempuh Tercepat Di Tempuh Oleh : ",nama,"Dengan Waktu Tempuh : "+min_jam);