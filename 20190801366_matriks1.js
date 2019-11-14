var jalur_a = [[5,30],[10,5],[2,10]];
var jalur_b = [[5,30],[6,45],[3,10]];

console.log("data A : "+jalur_a);
console.log("data B : "+jalur_b);

var jarak_jalur_a = jalur_a[0][0] + jalur_a[1][0] + jalur_a[2][0];
var jarak_jalur_b = jalur_b[0][0] + jalur_b[1][0] + jalur_b[2][0];

var jarak_waktu_a = jalur_a[0][1] + jalur_a[1][1] + jalur_a[2][1];
var jarak_waktu_b = jalur_b[0][1] + jalur_b[1][1] + jalur_b[2][1];

            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");
            console.log("waktu tempuh");
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^^");

if(jarak_waktu_a>jarak_waktu_b){
    console.log("========================");
    console.log("waktu terlama : " + jarak_waktu_a+" menit");
    console.log("waktu tercepat : " + jarak_waktu_b+" menit");
    console.log("========================");
}else{
    console.log("========================");
    console.log("waktu terlama : " + jarak_waktu_b+" menit");
    console.log("waktu tercepat : " + jarak_waktu_a+" menit");
    console.log("========================");
}