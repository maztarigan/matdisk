console.log("Menghitung jarak Tercepat");

var input = require("readline-sync")

var node1_a = input.questionInt("Masukan Jarak A1 :")
var node2_a = input.questionInt("Masukan Jarak A2 :")
var node3_a = input.questionInt("Masukan Jarak A3 :")

var node1_b = input.questionInt("Masukan Jarak B1 :")
var node2_b = input.questionInt("Masukan Jarak B2 :")
var node3_b = input.questionInt("Masukan Jarak B3 :")

var jalur_a = []
var jalur_b = []

jalur_a.push(node1_a)
jalur_a.push(node2_a)
jalur_a.push(node3_a)

jalur_b.push(node1_b)
jalur_b.push(node2_b)
jalur_b.push(node3_b)

var a = jalur_a[0]+jalur_a[1]+jalur_a[2]
var b = jalur_b[0]+jalur_b[1]+jalur_b[2]

if(a > b){
    console.log("jalur b lebih cepat di bandingkan jalur a");
    console.log("jalur a lebih lambat di bandingkan jalur b");
}else{
    console.log("jalur a lebih cepat di bandingkan jalur b");
    console.log("jalur b lebih lambat di bandingkan jalur a");
}