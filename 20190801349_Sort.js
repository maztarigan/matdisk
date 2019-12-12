console.log("Data Sepatu Mahasiswa")
console.log("============")

var dataSepatu = [
    [36,"Dhila","Biru"],[38,"Adil","Biru"],[40,"Tata","Hitam"],[41,"Ilham","Hitam"],[42,"Saman","Putih"],[42,"Retyan","Biru"],[43,"Ghazi","Biru"],[42,"Irfan","Biru"],
    [43,"Dimas","Birudongker"],[42,"Gilang","Hitam"],[41,"Angga","Cokelat"],[40,"Hapiz","Hitam"],[42,"Maulana","Hitam"],[39,"Elfa","Putih"],[39,"Setianing","Hitam"]
]
dataSepatu.sort((a,b) => {
    if(a[0] > b[0]) return 1;
    if(b[0] > a[0]) return -1;
    return 0;
})

for (var i=0; i <dataSepatu.length; i++){
    console.log("Nama", dataSepatu[i][1], "Warna", dataSepatu[i][2],
    "Ukuran", dataSepatu[i][0])
}
