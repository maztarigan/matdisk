/*
    Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswa Adalah : 
    Kolish      4,10
    Ndaru       5,13
    Farid       17,30
    Diki        12,20
    Danu        2,3],
    Candra      22,40
    Raffa       12,25
    Sendi       7,15
    Sudirman    3,18
    Tentukan Jarak Terdekat Dan Waktu Tercepat ? ....
*/
var isi = "Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing\nMahasiswa Adalah : ";
var b = [
            [4,10,"Kolish"],
            [5,13,"Ndaru"],
            [17,30,"Farid"],
            [12,20,"Diki"],
            [2,3,"Danu"],
            [22,40,"Candra"],
            [12,25,"Raffa"],
            [7,15,"Sendi"],
            [3,18,"Sudirman"]
        ];
console.log("=====================================================================");
console.log(isi);
console.log(b[0][2]," : ",b[0][0]," KM",",",b[0][1]," Menit");
console.log(b[1][2]," : ",b[1][0]," KM",",",b[1][1]," Menit");
console.log(b[2][2]," : ",b[2][0]," KM",",",b[2][1]," Menit");
console.log(b[3][2]," : ",b[3][0]," KM",",",b[3][1]," Menit");
console.log(b[4][2]," : ",b[4][0]," KM",",",b[4][1]," Menit");
console.log(b[5][2]," : ",b[5][0]," KM",",",b[5][1]," Menit");
console.log(b[6][2]," : ",b[6][0]," KM",",",b[6][1]," Menit");
console.log(b[7][2]," : ",b[7][0]," KM",",",b[7][1]," Menit");
console.log(b[8][2]," : ",b[8][0]," KM",",",b[8][1]," Menit");
console.log("=====================================================================");
console.log("Tentukan Jarak Terdekat Dan Waktu Tercepat ?");
console.log("=====================================================================");
var min_jar = b[0][0];
var min_jam = b[0][1];
var nama_jar  = b[0][2];
var nama_jam  = b[0][2];
for(var i = 0; i<b.length; i++){
    if(b[i][0] < min_jar){
        min_jar   = b[i][0];
        nama_jar  = b[i][2];
    }
    if(b[i][1] < min_jam){
        min_jam = b[i][1];
        nama_jam  = b[i][2];
    }
}
console.log("Jarak Tercepat Di Tempuh Oleh : (",nama_jar,"),Dengan Jarak Tempuh : "+min_jar+" KM");
console.log("Waktu Tempuh Tercepat Di Tempuh Oleh : (",nama_jam,"),Dengan Waktu Tempuh : "+min_jam+" Menit");
