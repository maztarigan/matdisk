var ukuran = require('readline-sync');

var Adil = "Adil";
var Tata = "Tata";
var Ilham = "Ilham";
var Saman = "Saman";
var Retyan = "Retyan";
var Ghozi = "Ghozi";
var Irfan = "Irfan";
var Dhila = "Dhila";
var Dimas = "Dimas";
var Gilang = "Gilang";
var Angga = "Angga";
var Hapiz = "Hapiz";
var Maulana = "Maulana"; 
var Elfa = "Elfa";
var Setianing = "Setianing";

var Biru = "Biru";
var Hitam = "Hitam";
var Putih = "Putih";
var Cokelat = "Cokelat";

var data = [
[Adil, 38, "Biru"],
[Tata, 40, "Hitam"],
[Ilham, 41, "Hitam"],
[Saman, 42, "Putih"],
[Retyan, 42, "Biru"],
[Ghozi, 43, "Biru"],
[Irfan, 42, "Biru"],
[Dhila, 36, "Hitam"],
[Dimas, 43, "Biru"],
[Gilang, 42, "Hitam"],
[Angga, 41, "Cokelat"],
[Hapiz, 40, "Hitam"],
[Maulana, 42, "Hitam"],
[Elfa, 39, "Putih"],
[Setianing, 39, "Hitam"]
];

data.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (b[1] > a[1]) return -1;
    return 0;
})

for (var i = 0; i < data.length; i++){
    console.log("nama(", data[i][0], "), warna(", data[i][2], "), ukuran(", data[i][1])
}