/*
    Di ketahui jarak dan tempuh beberapa mahasiswa Unniversitas Esa Unggul, yaitu :
    Zalza = Jarak : 14 km, Waktu tempuh : 45 Menit
    Chika = Jarak : 6 km, Waktu tempuh : 15 menit
    Noval = Jarak : 16 km, Waktu tempuh : 50 menit
    Dita = Jarak : 5 km, Waktu tempuh : 13 menit
    Delia = Jarak : 6 km, Waktu tempuh : 27 menit
    Iir = Jarak : 8 km, Waktu tempuh : 30 menit
    Aqila = Jarak : 3 km, Waktu tempuh : 7 menit
    Iva = Jarak : 14 km, Waktu tempuh : 45 menit
    Indah = Jarak : 16 km, Waktu tempuh : 50 menit
     Tentukan Jarak Terdekat Dan Waktu Tercepat ? ....
*/
var isi = "Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswi Adalah : ";
var b = [
            [14,45],
            [6,15],
            [16,50],
            [5,13],
            [6,27],
            [8,30],
            [3,7],
            [14,45],
            [16,50]

        ];
console.log("=====================================================================");
console.log(isi);
console.log("Zalza : ",b[0]);
console.log("Chika : ",b[1]);
console.log("Noval : ",b[2]);
console.log("Dita  : ",b[3]);
console.log("Delia : ",b[4]);
console.log("Iir   : ",b[5]);
console.log("Aqila : ",b[6]);
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
b[0][0] = "Zalza";       b[0][1] = "Zalza";
b[1][0] = "Chika";       b[1][1] = "Chika";
b[2][0] = "Noval";       b[2][1] = "Noval";
b[3][0] = "Dita";        b[3][1] = "Dita";
b[4][0] = "Delia";       b[4][1] = "Delia";
b[5][0] = "Iir";         b[5][1] = "Iir";
b[6][0] = "Aqila";       b[6][1] = "Aqila";
b[7][0] = "Iva";         b[7][1] = "Iva";
b[8][0] = "Indah";       b[8][1] = "Indah";
console.log("Jarak Tercepat Di Tempuh Oleh : ",nama,"Dengan Jarak Tempuh : "+min_jar);
console.log("Waktu Tempuh Tercepat Di Tempuh Oleh : ",nama,"Dengan Waktu Tempuh : "+min_jam);
