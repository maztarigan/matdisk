
var isi = "Diketahui Jarak Dan Waktu tempuh Dari Rumah Ke Kampus Masing - Masing Mahasiswa Adalah : ";
var b = [
    [18,29],
    [7,15],
    [16,35],
    [6,10],
    [10,25],
    [2,5],
    [8,32],
    [18,35],
    [18,25],
    [6,17],
    [30,90],
    [16,45],
    [1,15],
    [8,21],
    [15,22],
    [12,25],
    [1,3],
    [14,45],
    [10,22],
    [4,11],
    [17,45],
    [3,15],
    [5,20],
    [15,33],
    [1,5],
    [16,31],
];
console.log("=====================================================================");
console.log(isi);
console.log("Fani : ",b[0]);
console.log("Firlan : ",b[1]);
console.log("Tomi : ",b[2]);
console.log("Magfur : ",b[3]);
console.log("Jeje : ",b[4]);
console.log("Kevin : ",b[5]);
console.log("Andri : ",b[6]);
console.log("Syayid : ",b[7]);
console.log("Latif : ",b[8]);
console.log("Toriq : ",b[9]);
console.log("Andre : ",b[10]);
console.log("Unggul : ",b[11]);
console.log("Micko : ",b[12]);
console.log("Mansur : ",b[13]);
console.log("Juan : ",b[14]);
console.log("Fadly : ",b[15]);
console.log("Rob : ",b[16]);
console.log("Indra : ",b[17]);
console.log("Dallas : ",b[18]);
console.log("Diar : ",b[19]);
console.log("Chandra : ",b[20]);
console.log("Dana : ",b[21]);
console.log("Vika : ",b[22]);
console.log("Dimas : ",b[23]);
console.log("Danang : ",b[24]);
console.log("Sahrur : ",b[25]);
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

b[0][0] = "Fani";     b[0][1] = "Fani";
b[1][0] = "Firlan";      b[1][1] = "Firlan";
b[2][0] = "Tomi";      b[2][1] = "Tomi";
b[3][0] = "Magfur";       b[3][1] = "Magfur";
b[4][0] = "Jeje";       b[4][1] = "Jeje";
b[5][0] = "Kevin";     b[5][1] = "Kevin";
b[6][0] = "Andri";      b[6][1] = "Andri";
b[7][0] = "Syayid";      b[7][1] = "Syayid";
b[8][0] = "Latif";   b[8][1] = "Latif";
b[9][0] = "Toriq";   b[9][1] = "Toriq";
b[10][0] = "Andre";   b[10][1] = "Andre";
b[11][0] = "Unggul";   b[11][1] = "Unggul";
b[12][0] = "Micko";   b[12][1] = "Micko";
b[13][0] = "Mansur";   b[13][1] = "Mansur";
b[14][0] = "Juan";   b[14][1] = "Juan";
b[15][0] = "Fadly";   b[15][1] = "Fadly";
b[16][0] = "Rob";   b[16][1] = "Rob";
b[17][0] = "Indra";   b[17][1] = "Indra";
b[18][0] = "Dallas";   b[18][1] = "Dallas";
b[19][0] = "Diar";   b[19][1] = "Diar";
b[20][0] = "Chandra";   b[20][1] = "Chandra";
b[21][0] = "Dana";   b[21][1] = "Dana";
b[22][0] = "Vika";   b[22][1] = "Vika";
b[23][0] = "Dimas";   b[23][1] = "Dimas";
b[24][0] = "Danang";   b[24][1] = "Danang";
b[25][0] = "Sahrur";   b[25][1] = "Sahrur";

console.log("Jarak Tercepat Di Tempuh Oleh : ",nama,"Dengan Jarak Tempuh : "+min_jar);
console.log("Waktu Tempuh Tercepat Di Tempuh Oleh : ",nama,"Dengan Waktu Tempuh : "+min_jam);
console.log("=====================================================================");
