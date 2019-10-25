console.log (" 25 oktober 2019 ");
console.log (" GRAPH DUA DIMENSI ");



var JALUR_A = [[5,30],[10,10],[2,15]];
var JALUR_B = [[5,30],[4,25],[3,20]];

var JarakJalurA =parseInt(JALUR_A[0,0] + JALUR_A[0,1] + JALUR_A[2,0]);
var JarakTempuhA =parseInt(JALUR_A[0,1] + JALUR_A[1,1] + JALUR_A[2,1]);
var JarakJalurB =parseInt(JALUR_B[0,0] + JALUR_B[0,1] + JALUR_B[2,0]);
var JarakTempuhB =parseInt(JALUR_B[0,1] + JALUR_B[1,1]+ JALUR_B[2,1]);

if (JarakJalurA > JarakJalurB){
    console.log (" Jarak Terpendek :  A");
    console.log (" Jarak Terjauh :  B");
} else {
    console.log ("Jarak Terpendek : B");
    console.log ("Jarak terpanjang : A");
} 
if (JarakTempuhA > JarakTempuhB){
    console.log ("Jarak Waktu Tercepat : B");
    console.log ("Jarak Waktu Terlama : A");
}else{
    console.log ("Jarak Waktu Tercepat : A");
    console.log ("Jarak Waktu Terlama : B");
}
