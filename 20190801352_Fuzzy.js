console.log("Mencari seberapa persen tingkat usia seseorang ")
console.log("=================================================")

var muda = [[25,1],[26,0.95],[27,0.9],[28,0.85],[29,0.8],[30,0.75],[31,0.7],[32,0.65],[33,0.6],[34,0.55],[35,0.5],[36,0.45],[37,0.4],[38,0.35],[39,0.3],[40,0.25],[41,0.2],[42,0.15],[43,0.1],[44,0.05]]
var separuhbaya = [[26,0.05],[27,0.1],[28,0.15],[29,0.2],[30,0.25],[31,0.3],[32,0.35],[33,0.4],[34,0.45],[35,0.5],[36,0.55],[37,0.6],[38,0.65],[39,0.7],[40,0.75],[41,0.8],[42,0.85],[43,0.9],[44,0.95],[45,1],[46,0.95],[47,0.9],[48,0.85],[49,0.8],[50,0.75],[51,0.7],[52,0.65],[53,0.6],[54,0.55],[55,0.5],[56,0.45],[57,0.4],[58,0.35],[59,0.3],[60,0.25],[61,0.2],[62,0.15],[63,0.1],[64,0.05]]
var tua = [[46,0.05],[47,0.1],[48,0.15],[49,0.2],[50,0.25],[51,0.3],[52,0.35],[53,0.4],[54,0.45],[55,0.5],[56,0.55],[57,0.6],[58,0.65],[59,0.7],[60,0.75],[61,0.8],[62,0.85],[63,0.9],[64,0.95],[65,1]]

var inputkeyboard = require('readline-sync')

var umur = parseInt(inputkeyboard.question("masukkan umur dari seseorang : "))

for(var i=0;i<muda.length;i++) {
    if(umur == muda[i][0]) {
        console.log("Orang tersebut termasuk muda "+muda[i][1]*100+"%")
    }
}

for(var i=0;i<separuhbaya.length;i++) {
    if(umur == separuhbaya[i][0]) {
        console.log("Orang tersebut termasuk separuh baya "+separuhbaya[i][1]*100+"%")
    }
}

for(var i=0;i<tua.length;i++) {
    if(umur == tua[i][0]) {
        console.log("Orang tersebut termasuk tua "+tua[i][1]*100+"%")
    }
}