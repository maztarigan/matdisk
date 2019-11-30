console.log 
var data = [ ["16.10, 20.55"] , ["20.40 , 22.00"] , ["23.00 , 24.00"] , ["05.00 , 06.30"] , ["15.00 , 23.00"] , ["17.00 , 21.00"] , ["02.00 , 04.00"] , ["19.30 , 21.30"] , ["18.00 , 16.00"] , ["17.00 , 18.15"] , ["07.00 ,09.00"] , ["14.00 , 06.00"] , ["00.00 , 01.30"] , ["05.10 , 00.00"]];

var DIMAS = DIMAS
var RAIHAN = RAIHAN
var ILHAM = ILHAM
var FIKRI = FIKRI
var JHORDY = JHORDY
var KRESNA = KRESNA
var SUTNA = SUTNA
var TIARA = TIARA
var SINDY = SINDY
var LORENZO = LORENZO
var ANRIAN = ANRIAN
var AL = AL
var ANDRI = ANDRI
var ANDROW = ANDROW

var ADIMAS = data[0][0];
var BDIMAS = data[0][1];
var CDIMAS = data[0][1] - [0][0];
var SLDIMAS = CDIMAS.toFixed();
var INDIMAS = 0;

var ARAIHAN = data[0][0];
var BRAIHAN = data[0][1];
var CRAIHAN = data[0][1] - [0][0];
var SLRAIHAN = CRAIHAN.toFixed();
var INRAIHAN = 0;

var AILHAM = data[0][0];
var BILHAM = data[0][1];
var CILHAM = data[0][1] - [0][0];
var SLILHAM = CILHAM.toFixed();
var IILHAM = 0;

var AFIKRI = data[0][0];
var BFIKRI = data[0][1];
var CFIKRI = data[0][1] - [0][0];
var SLFIKRI = CFIKRI.toFixed();
var INFIKRI = 0;

var AJHORDY = data[0][0];
var BJHORDY = data[0][1];
var CJHORDY = data[0][1] - [0][0];
var SLJHORDY = CJHORDY.toFixed();
var INJHORDY = 0;

var AKRESNA = data[0][0];
var BKRESNA = data[0][1];
var CKRESNA = data[0][1] - [0][0];
var SLKRESNA = CKRESNA.toFixed();
var INKRESNA = 0;

var ASUTNA = data[0][0];
var BSUTNA = data[0][1];
var CSUTNA = data[0][1] - [0][0];
var SLSUTNA = CSUTNA.toFixed();
var INSUTNA = 0;

var ATIARA = data[0][0];
var BTIARA = data[0][1];
var CTIARA = data[0][1] - [0][0];
var SLTIARA = CTIARA.toFixed();
var INTIARA = 0;

var ASINDY = data[0][0];
var BSINDY = data[0][1];
var CSINDY = data[0][1] - [0][0];
var SLSINDY = CSINDY.toFixed();
var INSINDY = 0;

var ALORENZO = data[0][0];
var BLORENZO = data[0][1];
var CLORENZO = data[0][1] - [0][0];
var SLLORENZO = CLORENZO.toFixed();
var INLORENZO = 0;

var AANDRIAN = data[0][0];
var BANDRIAN = data[0][1];
var CANDRIAN = data[0][1] - [0][0];
var SLANDRIAN = CANDRIAN.toFixed();
var INANDRIAN = 0;

var AAL = data[0][0];
var BAL = data[0][1];
var CAL = data[0][1] - [0][0];
var SLAL = CAL.toFixed();
var INAL = 0;

var AANDRI = data[0][0];
var BANDRI = data[0][1];
var CANDRIS = data[0][1] - [0][0];
var SLANDRI = CANDRI.toFixed();
var INANDRI = 0;

var AANDROW = data[0][0];
var BANDROW = data[0][1];
var CANDROW = data[0][1] - [0][0];
var SLANDROW = CANDROW.toFixed();
var INANDROW = 0;

console.log();
console.log("Nama : "+DIMAS+"   Masuk Pukul : "+ADIMAS+" WIB     Keluar Pukul : "+BDIMAS+" WIB     Durasi : "+CDIMAS+"  Jam "+INDIMAS+" Menit");
console.log("Nama : "+RAIHAN+"   Masuk Pukul : "+ARAIHAN+" WIB     Keluar Pukul : "+BRAIHAN+" WIB     Durasi : "+CRAIHAN+"  Jam "+INRAIHAN+" Menit");
console.log("Nama : "+ILHAM+"   Masuk Pukul : "+AILHAM+" WIB     Keluar Pukul : "+BILHAM+" WIB     Durasi : "+CILHAM+"  Jam "+INILHAM+" Menit");
console.log("Nama : "+FIKRI+"   Masuk Pukul : "+AFIKRI+" WIB     Keluar Pukul : "+BFIKRI+" WIB     Durasi : "+CFIKRI+"  Jam "+INFIKRI+" Menit");
console.log("Nama : "+JHORDY+"   Masuk Pukul : "+AJHORDY+" WIB     Keluar Pukul : "+BJHORDY+" WIB     Durasi : "+CJHORDY+"  Jam "+INJHORDY+" Menit");
console.log("Nama : "+KRESNA+"   Masuk Pukul : "+AKRESNA+" WIB     Keluar Pukul : "+BKRESNA+" WIB     Durasi : "+CKRESNA+"  Jam "+INKRESNA+" Menit");
console.log("Nama : "+SUTNA+"   Masuk Pukul : "+ASUTNA+" WIB     Keluar Pukul : "+BSUTNA+" WIB     Durasi : "+CSUTNA+"  Jam "+INSUTNA+" Menit");
console.log("Nama : "+TIARA+"   Masuk Pukul : "+ATIARA+" WIB     Keluar Pukul : "+BTIARA+" WIB     Durasi : "+CTIARA+"  Jam "+INTIARA+" Menit");
console.log("Nama : "+SINDY+"   Masuk Pukul : "+ASINDY+" WIB     Keluar Pukul : "+BSINDY+" WIB     Durasi : "+CSINDY+"  Jam "+INSINDY+" Menit");
console.log("Nama : "+LORENZO+"   Masuk Pukul : "+ALORENZO+" WIB     Keluar Pukul : "+BLORENZO+" WIB     Durasi : "+CLORENZO+"  Jam "+INLORENZO+" Menit");
console.log("Nama : "+ANRIAN+"   Masuk Pukul : "+AANDRIAN+" WIB     Keluar Pukul : "+BANDRIAN+" WIB     Durasi : "+CANDRIAN+"  Jam "+INANDRIAN+" Menit");
console.log("Nama : "+AL+"   Masuk Pukul : "+AAL+" WIB     Keluar Pukul : "+BAL+" WIB     Durasi : "+CAL+"  Jam "+INAL+" Menit");
console.log("Nama : "+ANDRI+"   Masuk Pukul : "+ANDRI+" WIB     Keluar Pukul : "+BANDRI+" WIB     Durasi : "+CANDRI+"  Jam "+INANDRI+" Menit");
console.log("Nama : "+ANDROW+"   Masuk Pukul : "+AANDROW+" WIB     Keluar Pukul : "+BANDROW+" WIB     Durasi : "+CANDROW+"  Jam "+INANDROW+" Menit");
