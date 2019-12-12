console.log("--Sorting data Array--\n")

var mhs = [
    ["Adil", 38, "biru"], ["Tata", 40, "hitam"], ["Saman", 42, "putih"], ["Retyan", 42, "biru"], ["Ghozi", 43, "biru"],
    ["Irfan", 42, "biru"], ["Dhila", 36, "hitam"], ["Dimas", 43, "biru"], ["Gilang", 42, "hitam"], ["Angga", 41, "cokelat"],
    ["Hapiz", 40, "hitam"], ["Maulana", 42, "hitam"], ["Elfa", 39, "putih"], ["Setianing", 39, "hitam"], ["Ilham", 41, "hitam"]
];

mhs.sort((a,b) => {
    if(a[1] > b[1]) return 1;
    if(b[1] > a[1]) return -1;
    return 0 
}); 

for (i = 0 ; i <= 14 ; i++) {
    console.log("Nama : "+mhs[i][0]+", Ukuran : ("+mhs[i][1]+") Warna : ("+mhs[i][2]+")")
}

console.log("\n-------------------------------------------------------------------")

    