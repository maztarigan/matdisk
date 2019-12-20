console.log ("==============================================")
console.log ("Mencari seberapa persen tingkat usia seseorang")
console.log (" ")

var input = require ('readline-sync')
var usia = parseInt (input.question ("Masukkan umur seseorang : "))

var muda = [[25,1],[26,0.95],[27,0.9],[28,0.85],[29,0.8],[30,0.75],
            [31,0.7],[32,0.65],[33,0.6],[34,0.55],[35,0.5],
            [36,0.45],[37,0.4],[38,0.35],[39,0.3],[40,0.25],
            [41,0.2],[42,0.15],[43,0.1],[44,0.5],[45,0]]

var setengahbaya =  [[45,1],[44,0.95],[43,0.9],[42,0.85],[41,0.8],[40,0.75],
                    [39,0.7],[38,0.65],[37,0.6],[36,0.55],[35,0.5],
                    [34,0.45],[33,0.4],[32,0.35],[31,0.3],[30,0.25],
                    [29,0.2],[28,0.15],[27,0.1],[26,0.05],[25,0],
                    [46,0.95],[47,0.9],[48,0.85],[49,0.8],[50,0.75],
                    [51,0.7],[52,0.65],[53,0.6],[54,0.55],[55,0.5],
                    [56,0.45],[57,0.4],[58,0.35],[59,0.3],[60,0.25],
                    [61,0.2],[62,0.15],[63,0.1],[64,0.5],[65,0]]

var tua =   [[65,1],[64,0.95],[63,0.9],[62,0.85],[61,0.8],[60,0.75],
            [59,0.7],[58,0.65],[57,0.6],[56,0.55],[55,0.5],
            [54,0.45],[53,0.4],[52,0.35],[51,0.3],[50,0.25],
            [49,0.2],[48,0.15],[47,0.1],[46,0.5],[45,0]]

for (var i=0; i<muda.length; i++)
{
    if (muda [i][0] == usia)
    {
        console.log ("Orang tersebut termasuk Muda = " + muda [i][1]*100+"%")
    }
}

for (var i=0; i<setengahbaya.length; i++)
{
    if (setengahbaya [i][0] == usia)
    {
        console.log ("Orang tersebut termasuk Setengah baya = " + setengahbaya [i][1]*100+"%")
    }
}

for (var i=0; i<tua.length; i++)
{
    if (tua [i][0] == usia)
    {
        console.log ("Orang tersebut termasuk Tua = " + tua [i][1]*100+"%")
    }
}

console.log(" ")
console.log("Muhamad Al Fikry_20190801417")
console.log("============================")