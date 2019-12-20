console.log("Menghitung Usia");
var hari_ini = new Date();
console.log(hari_ini);
console.log();
var siswa =
    [["Alfian",parseInt(hari_ini.getYear() - new Date('1997-12-19').getYear())],
    ["Androw",parseInt(hari_ini.getYear() - new Date('1997-02-29').getYear())],
    ["Andri",parseInt(hari_ini.getYear() - new Date('2000-10-28').getYear())],
    ["Anrian",parseInt(hari_ini.getYear() - new Date('1999-10-29').getYear())],
    ["Dimas",parseInt(hari_ini.getYear() - new Date('2000-06-21').getYear())],
    ["Tiara",parseInt(hari_ini.getYear() - new Date('2001-03-06').getYear())],
    ["Nia",parseInt(hari_ini.getYear() - new Date('2001-02-14').getYear())],
    ["Kresna",parseInt(hari_ini.getYear() - new Date('2000-11-29').getYear())],
    ["Lorenzo",parseInt(hari_ini.getYear() - new Date('1996-06-26').getYear())],
    ["Sutna",parseInt(hari_ini.getYear() - new Date('1998-12-24').getYear())],
    ["Fikry",parseInt(hari_ini.getYear() - new Date('1997-05-17').getYear())],
    ["Jhordy",parseInt(hari_ini.getYear() - new Date('2001-11-15').getYear())],
    ["Raihan",parseInt(hari_ini.getYear() - new Date('2000-05-01').getYear())],
    ["Ilham",parseInt(hari_ini.getYear() - new Date('2001-01-03').getYear())],
    ["Sindy",parseInt(hari_ini.getYear() - new Date('2001-06-30').getYear())]];
    
    siswa.sort((k,b) => {
        if (k[1] > b[1]) return -1;
        if (b[1] > k[1]) return 1;
        return 0;
    })
    for (i=0; i < siswa.length; i++) {
        console.log("" + siswa[i][0] + " saat ini berusia : " + siswa[i][1] + "Tahun");                                    
}
