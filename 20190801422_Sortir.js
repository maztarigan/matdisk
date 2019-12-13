console.log("SELAMAT DATANG")
console.log("ALFIAN AJI WAHYUDI")
console.log("20190801422")
console.log("Matematika Diskrit")
console.log("-------------------------------------------------")
var Data= require('dateformat');
var today = Data("isoDate");
var now = new Date();
console.log("Tanggal saat ini : "+ today);
console.log("");
console.log("Umur Mahasiswa ESA UNGGUL");
console.log("");
console.log("==================================")

var Data =
        [["Nama":"Alfian", parseInt(now.getYear() - new Date('1997-12-19').getYear())]
         ["Nama":"Andri", parseInt(now.getYear() - new Date('2000-02-29').getYear())],
         ["Nama":"Androw", parseInt(now.getYear() - new Date('1997-10-28').getYear())],
         ["Nama":"Anrian", parseInt(now.getYear() - new Date('1999-10-29').getYear())],
         ["Nama":"Dimas", parseInt(now.getYear() - new Date('2000-06-21').getYear())],
         ["Nama":"Febri", parseInt(now.getYear() - new Date('2001-02-14').getYear())],
         ["Nama":"Fikry", parseInt(now.getYear() - new Date('1997-05-17').getYear())],
         ["Nama":"Ilham", parseInt(now.getYear() - new Date('2000-01-03').getYear())],   
         ["Nama":"Jhordy", parseInt(now.getYear() - new Date('2001-11-15').getYear())],    
         ["Nama":"Kresna", parseInt(now.getYear() - new Date('2000-11-29').getYear())],
         ["Nama":"Lorenzo", parseInt(now.getYear() - new Date('1996-06-26').getYear())],
         ["Nama":"Raihan", parseInt(now.getYear() - new Date('2000-05-01').getYear())],
         ["Nama":"Sindy", parseInt(now.getYear() - new Date('2001-06-30').getYear())],
         ["Nama":"Sutna", parseInt(now.getYear() - new Date('1998-12-24').getYear())],
         ["Nama":"Tiara", parseInt(now.getYear() - new Date('2001-03-06').getYear())]];

        Data.sort((a,b) => {
            if (a[1] > b[1]) return 1;
            if (b[1] > a[1]) return -1;
            return 0;
        })
for (i - 0; i < Data.length; i++){
    console.log(Data[1][0] + "saat ini berusia :" + Data[i][1] + "Tahun");
}
console.log("==================================")
