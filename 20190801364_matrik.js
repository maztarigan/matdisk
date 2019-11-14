 var key = require('readline-sync');
 var jarakA0 = parseInt(key.question("Masukan jarak A titik 1 = "));
 var waktuA0 = parseInt(key.question("Masukan waktu A titik 1 = "));
 var jarakA1 = parseInt(key.question("Masukan jarak A titik 2 = "));
 var waktuA1 = parseInt(key.question("Masukan waktu A titik 2 = "));
 var jarakA2 = parseInt(key.question("Masukan jarak A titik 3 = "));
 var waktuA2 = parseInt(key.question("Masukan waktu A titik 3 = "));

 var jarakB0 = parseInt(key.question("Masukan jarak B titik 1 = "));
 var waktuB0 = parseInt(key.question("Masukan waktu B titik 1 = "));
 var jarakB1 = parseInt(key.question("Masukan jarak B titik 2 = "));
 var waktuB1 = parseInt(key.question("Masukan waktu B titik 2 = "));
 var jarakB2 = parseInt(key.question("Masukan jarak B titik 3 = "));
 var waktuB2 = parseInt(key.question("Masukan waktu B titik 3 = \n"));

 var jalur_A = [[jarakA0,waktuA0],[jarakA1,waktuA1],[jarakA2,waktuA2]];
 var jalur_B = [[jarakB0,waktuB0],[jarakB1,waktuB1],[jarakB2,waktuB2]];

 var jarak_jalur_A = jalur_A[0][0] + jalur_A[1][0] + jalur_A[2][0];
 var jarak_jalur_B = jalur_B[0][0] + jalur_B[1][0] + jalur_B[2][0];

 var waktu_jalur_A = jalur_A[0][1] + jalur_A[1][1] + jalur_A[2][1];
 var waktu_jalur_B = jalur_B[0][1] + jalur_B[1][1] + jalur_B[2][1];

 if (jarak_jalur_A > jarak_jalur_B) {
     console.log("Jalur dengan jarak terpanjang adalah jalur A yaitu : " ,jarak_jalur_A, "KM");
     console.log("Jalur dengan jarak terdekat adalah jalur B yaitu : " ,jarak_jalur_B, "KM");
 } else {
     console.log("Jalur dengan jarak terdekat adalah jalur B yaitu : " ,jarak_jalur_B, "KM");
     console.log("Jalur dengan jarak terpanjang adalah jalur A yaitu : " ,jarak_jalur_A, "KM");
 }

 if (waktu_jalur_A > waktu_jalur_B) {
     console.log("Waktu tercepat adalah jalur A yaitu : " ,waktu_jalur_A, "Menit");
     console.log("Waktu terlama adalah jalur B yaitu : " ,waktu_jalur_B, "Menit");
 } else {
    console.log("Waktu terlama adalah jalur B yaitu : " ,waktu_jalur_B, "Menit");
    console.log("Waktu tercepat adalah jalur A yaitu : " ,waktu_jalur_A, "Menit");
 }