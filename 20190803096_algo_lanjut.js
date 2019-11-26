/*
    Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswi Adalah : 
    Aqila       3,7
    Zalza       14,45
    Noval       16,50
    Delia       6,27
    Iir         8,30
    Dita        5,13
    Chika       6,15
    Iva         14,45
    Indah       16,50
    Tentukan Jarak Terdekat Dan Waktu Tercepat ? ....
*/
var isi = "Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswi Adalah : ";
var b = [
            [3,7],
            [14,45],
            [16,50],
            [6,27],
            [8,30],
            [5,13],
            [6,15],
            [14,45],
            [16,50]
        ];
console.log("=====================================================================");
console.log(isi);
console.log("Aqila : ",b[0]);
console.log("Zalza : ",b[1]);
console.log("Noval : ",b[2]);
console.log("Delia : ",b[3]);
console.log("Iir   : ",b[4]);
console.log("Dita  : ",b[5]);
console.log("Chika : ",b[6]);
console.log("Iva   : ",b[7]);
console.log("Indah : ",b[8]);
console.log("\nTentukan Jarak Terdekat Dan Waktu Tercepat ?");

var min_jar = b[0][0];
var min_jam = b[0][1];
var nama    =  b[0];
for(var i = 0; i<b.length; i++){
    for(var j = 0; j<=1; j++){
        if(b[i][j] < min_jar){
            min_jar = b[i][j];
            nama    = b[i];
        }
        else if(b[i][j] < min_jam){
            min_jam = b[i][j];
            nama    = b[i];
        }
    }
}
b[0][0] = "Aqila";      b[0][1] = "Aqila";
b[1][0] = "Zalza";      b[1][1] = "Zalza";
b[2][0] = "Noval";      b[2][1] = "Noval";
b[3][0] = "Delia";      b[3][1] = "Delia";
b[4][0] = "Iir";        b[4][1] = "Iir";
b[5][0] = "Dita";       b[5][1] = "Dita";
b[6][0] = "Chika";      b[6][1] = "Chika";
b[7][0] = "Iva";        b[7][1] = "Iva";
b[8][0] = "Indah";      b[8][1] = "Indah";
console.log("Jarak Tercepat Di Tempuh Oleh : ",nama,"Dengan Jarak Tempuh : "+min_jar);
console.log("Waktu Tempuh Tercepat Di Tempuh Oleh : ",nama,"Dengan Waktu Tempuh : "+min_jam);

    

