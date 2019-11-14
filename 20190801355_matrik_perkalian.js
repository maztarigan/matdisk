console.log("Perkalian Matrik 3x2 dengan 2x3");
console.log("--------------------------------");
console.log("A = |3 2|    B = |7 9 10|");
console.log("    |4 3|        |3 6 4 |");
console.log("    |5 8|");
console.log("--------------------------------");

var a = [[3,2],
         [4,3],
         [5,8]]

var b = [[7,9,10],
         [3,6,4]]

// bk = baris kolom
var b1k1 = (a[0][0]*b[0][0]) + (a[0][1]*b[1][0])
var b1k2 = (a[0][0]*b[0][1]) + (a[0][1]*b[1][1])
var b1k3 = (a[0][0]*b[0][2]) + (a[0][1]*b[1][2])

var b2k1 = (a[1][0]*b[0][0]) + (a[1][1]*b[1][0])
var b2k2 = (a[1][0]*b[0][1]) + (a[1][1]*b[1][1])
var b2k3 = (a[1][0]*b[0][2]) + (a[1][1]*b[1][2])

var b3k1 = (a[2][0]*b[0][0]) + (a[2][1]*b[1][0])
var b3k2 = (a[2][0]*b[0][1]) + (a[2][1]*b[1][1])
var b3k3 = (a[2][0]*b[0][2]) + (a[2][1]*b[1][2])

console.log("A*B = " +b1k1+ " " +b1k2+ " " +b1k3);
console.log("      " +b2k1+ " " +b2k2+ " " +b2k3);
console.log("      " +b3k1+ " " +b3k2+ " " +b3k3);