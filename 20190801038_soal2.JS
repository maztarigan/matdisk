var inputkeyboard = require("readline-sync");
var n = parseInt(inputkeyboard.question("masukkan angka n : "));

let str = "";

    for(let i = 1; i < n; i++ ){
        for(let j = 1; j < n; j++){
        if(i + j >= n && i <= j){
            str = str.concat("*");
    }else{
            str = str.concat(" ")
}
}
            str = str.concat("\n")
}
            console.log(str)