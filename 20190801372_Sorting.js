console.log("Sorting data Array pada Mahasiswa \n")
console.log("MAULANA ARIS IRAWAN => 20190801372")

var Mahasiswa = [
    ["Adil",38,"Biru"],["Tata",40,"Hitam"],["Ilham",41,"Hitam"],["Saman",42,"Hitam"],["Retyan",42,"Biru"],
    ["Ghozy",43,"Biru"],["Irfan",42,"Biru"],["Dhila",36,"Hitam"],["Dimas",43,"Biru"],["Gilang",42,"Hitam"],
    ["Angga",41,"Cokelat"],["Hapiz",40,"Hitam"],["Maulana",42,"Hitam"],["Elfa",39,"Putih"],["Setianing",39,"Putih"]
];
Mahasiswa.sort((a,b) => {
    if(a[1] > b [1]) return 1;
    if(b[1] > a [1]) return-1;
    return 0
});

for (i = 0 ; i <= 14 ; i++) {
    console.log ("===================================");
    console.log ("Nama : " +Mahasiswa[i][0])
    console.log ("======================");
    console.log ("Ukuran : " +Mahasiswa[i][1])
    console.log ("Warna : " +Mahasiswa[i][2])
    console.log ("===================================");

}
