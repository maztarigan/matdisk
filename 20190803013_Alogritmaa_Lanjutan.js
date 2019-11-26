/*
    Di ketahui jarak dan tempuh beberapa mahasiswa Unniversitas Esa Unggul, yaitu :
    Chika = Jarak : 6 km, Waktu tempuh : 15 menit
    Zalza = Jarak : 14 km, Waktu tempuh : 45 Menit
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
var a = [
            [6,15],
            [14,45],
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
console.log("Chika : ",a[0]);
console.log("Zalza : ",a[1]);
console.log("Noval : ",a[2]);
console.log("Dita  : ",a[3]);
console.log("Delia : ",a[4]);
console.log("Iir   : ",a[5]);
console.log("Aqila : ",a[6]);
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
a[0][0] = "Chika";       a[0][1] = "Chika";
a[1][0] = "Zalza";       a[1][1] = "Zalza";
a[2][0] = "Noval";       a[2][1] = "Noval";
a[3][0] = "Dita";        a[3][1] = "Dita";
a[4][0] = "Delia";       a[4][1] = "Delia";
a[5][0] = "Iir";         a[5][1] = "Iir";
a[6][0] = "Aqila";       a[6][1] = "Aqila";
a[7][0] = "Iva";         a[7][1] = "Iva";
a[8][0] = "Indah";       a[8][1] = "Indah";
console.log("Jarak Tercepat Di Tempuh Oleh : ",nama,"Dengan Jarak Tempuh : "+min_jar);
console.log("Waktu Tempuh Tercepat Di Tempuh Oleh : ",nama,"Dengan Waktu Tempuh : "+min_jam);