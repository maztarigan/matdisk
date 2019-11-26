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
var isi = "Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswa Adalah : ";
var b = [
            [4,10],
            [5,13],
            [17,30],
            [12,20],
            [2,3],
            [22,40],
            [12,25],
            [7,15],
            [3,18]
        ];
console.log("====================================================");
console.log(isi);
console.log("Kolish : ",b[0]);
console.log("Ndaru : ",b[1]);
console.log("Farid : ",b[2]);
console.log("Diki : ",b[3]);
console.log("Danu : ",b[4]);
console.log("Candra : ",b[5]);
console.log("Raffa : ",b[6]);
console.log("Sendi : ",b[7]);
console.log("Sudirman : ",b[8]);
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
b[0][0] = "kholis";     b[0][1] = "kholis";
b[1][0] = "Ndaru";      b[1][1] = "Ndaru";
b[2][0] = "Farid";      b[2][1] = "Farid";
b[3][0] = "Diki";       b[3][1] = "Diki";
b[4][0] = "Danu";       b[4][1] = "Danu";
b[5][0] = "Candra";     b[5][1] = "Candra";
b[6][0] = "Raffa";      b[6][1] = "Raffa";
b[7][0] = "Sendi";      b[7][1] = "Sendi";
b[8][0] = "Sudirman";   b[8][1] = "Sudirman";
console.log("Jarak Tercepat Di Tempuh Oleh : ",nama,"Dengan Jarak Tempuh : "+min_jar);
console.log("Waktu Tempuh Tercepat Di Tempuh Oleh : ",nama,"Dengan Waktu Tempuh : "+min_jam);