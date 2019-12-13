var data = [
    ["Adil", 38, "Biru"], ["Tata", 40, "Hitam"], ["Ilham", 41, "Hitam"], ["Saman", 42, "Putih"], ["Retyan", 42, "Biru"], ["Ghozy", 43, "Biru"], 
    ["Irfan", 42, "Biru"], ["Dhila", 36, "Hitam"], ["Dimas", 43, "Biru"], ["Gilang", 42, "Hitam"], ["Angga", 42, "Coklat"], ["Hapiz", 40, "Hitam"],
    ["Maulana", 42, "Hitam"], ["Elfa", 39, "Putih"], ["Setianing", 39, "Hitam"]
]

data.sort((a,b) => {
    if (a[1] > b[1]) return 1;
    if (b[1] > a[1]) return -1;
    return 0;
});

for (var i = 0; i < data.length; i++){
    console.log("Nama : "+data[i][0]+") Size :"+data[i][1]+", Warna : "+data[i][2]+"")
}