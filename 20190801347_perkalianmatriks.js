console.log("Perkalian Matriks")

var matriks_A = [[3,2], [4,3], [5,8]]
var matriks_B = [[7,9,10], [3,6,4]]

console.log("====================")
console.log("    "+"|"+3, 2+"|")
console.log("A = "+"|"+4, 3+"|")
console.log("    "+"|"+5, 8+"|","\n")

console.log("B = "+"|"+7, 9, 10+"|")
console.log("    "+"|"+3, 6, 4+"|")
console.log("====================","\n")

//PERKALIAN MATRIKS
var Hasil_1 = matriks_A[0][0] * matriks_B[0][0] + matriks_A[0][1] * matriks_B[1][0]
var Hasil_2 = matriks_A[0][0] * matriks_B[0][1] + matriks_A[0][1] * matriks_B[1][1]
var Hasil_3 = matriks_A[0][0] * matriks_B[0][2] + matriks_A[0][1] * matriks_B[1][2]

var Hasil_4 = matriks_A[1][0] * matriks_B[0][0] + matriks_A[1][1] * matriks_B[1][0]
var Hasil_5 = matriks_A[1][0] * matriks_B[0][1] + matriks_A[1][1] * matriks_B[1][1]
var Hasil_6 = matriks_A[1][0] * matriks_B[0][2] + matriks_A[1][1] * matriks_B[1][2]

var Hasil_7 = matriks_A[2][0] * matriks_B[0][0] + matriks_A[2][1] * matriks_B[1][0]
var Hasil_8 = matriks_A[2][0] * matriks_B[0][1] + matriks_A[2][1] * matriks_B[1][1]
var Hasil_9 = matriks_A[2][0] * matriks_B[0][2] + matriks_A[2][1] * matriks_B[1][2]

console.log("►◄►◄►◄►◄►◄►◄►◄►◄►◄►◄","\n")
console.log("        "+"|" +Hasil_1, Hasil_2, Hasil_3+"|")
console.log("A * B = "+"|" +Hasil_4, Hasil_5, Hasil_6+"|")
console.log("        "+"|" +Hasil_7, Hasil_8, Hasil_9+"|","\n")
console.log("►◄►◄►◄►◄►◄►◄►◄►◄►◄►◄")






