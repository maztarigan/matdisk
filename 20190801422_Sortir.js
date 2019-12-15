console.log("SELAMAT DATANG")
console.log("ALFIAN AJI WAHYUDI")
console.log("20190801422")
console.log("Matematika Diskrit")
console.log("-------------------------------------------------")
var Data= require('dateformat');
var today = Data("isoDate");
var now = new Date();
console.log("Umur Mahasiswa ESA UNGGUL");
console.log("");
console.log("Tanggal saat ini : "+ today);
console.log("");
console.log("==================================")

var Data =
        [["Alfian", parseInt(now.getYear() - new Date('1997-12-19').getYear())],
         ["Andri", parseInt(now.getYear() - new Date('2000-02-29').getYear())],
         ["Androw", parseInt(now.getYear() - new Date('1997-10-28').getYear())],
         ["Anrian", parseInt(now.getYear() - new Date('1999-10-29').getYear())],
         ["Dimas", parseInt(now.getYear() - new Date('2000-06-21').getYear())],
         ["Febri", parseInt(now.getYear() - new Date('2001-02-14').getYear())],
         ["Fikry", parseInt(now.getYear() - new Date('1997-05-17').getYear())],
         ["Ilham", parseInt(now.getYear() - new Date('2000-01-03').getYear())],   
         ["Jhordy", parseInt(now.getYear() - new Date('2001-11-15').getYear())],    
         ["Kresna", parseInt(now.getYear() - new Date('2000-11-29').getYear())],
         ["Lorenzo", parseInt(now.getYear() - new Date('1996-06-26').getYear())],
         ["Raihan", parseInt(now.getYear() - new Date('2000-05-01').getYear())],
         ["Sindy", parseInt(now.getYear() - new Date('2001-06-30').getYear())],
         ["Sutna", parseInt(now.getYear() - new Date('1998-12-24').getYear())],
         ["Tiara", parseInt(now.getYear() - new Date('2001-03-06').getYear())]];

        Data.sort((k,b) => {
            if (k[1] > b[1]) return -1;
            if (b[1] > k[1]) return 1;
            return 0;
        })

    for (i=0; i < Data.length; i++) {
    console.log("" + Data[i][0] + " saat ini berusia : " + Data[i][1] + "Tahun");
}
console.log("==================================")
