/*
    Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswi Adalah : 
    Aqila       3,7
    Noval       16,50
    Zalza       14,45
    Dita        5,13
    Delia       6,27
    Iir         8,30
    Indah       16,50
    Iva         14,45
    Chika       6,15
    
    Tentukan Jarak Terdekat Dan Waktu Tercepat ? ....
*/
var isi = "Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswi Adalah : ";
var b = [
            [3,7],
            [16,50],
            [14,45],
            [5,13],
            [6,27],
            [8,30],
            [16,50],
            [14,45],
            [6,15]

        ];
console.log("=====================================================================");
console.log(isi);
console.log("aqil : ",b[0]);
console.log("noval  : ",b[1]);
console.log("zalza : ",b[2]);
console.log("dita : ",b[3]);
console.log("delia : ",b[4]);
console.log("iir : ",b[5]);
console.log("indah : ",b[6]);
console.log("iva : ",b[7]);
console.log("chika   : ",b[8]);
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
b[0][0] = "aqil";      b[0][1] = "aqil";
b[1][0] = "noval";        b[1][1] = "noval";
b[2][0] = "zalza";      b[2][1] = "zalza";
b[3][0] = "dita";       b[3][1] = "dita";
b[4][0] = "delia";      b[4][1] = "delia";
b[5][0] = "iir";      b[5][1] = "iir";
b[6][0] = "indah";      b[6][1] = "indah";
b[7][0] = "iva";      b[7][1] = "iva";
b[8][0] = "chika";        b[8][1] = "chika";
console.log("Jarak Tercepat Di Tempuh Oleh : ",nama,"Dengan Jarak Tempuh : "+min_jar);
console.log("Waktu Tempuh Tercepat Di Tempuh Oleh : ",nama,"Dengan Waktu Tempuh : "+min_jam);