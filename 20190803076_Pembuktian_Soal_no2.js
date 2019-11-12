var key = require("readline-sync");
var x = ""
var n = parseInt(key.question('Input Nilai : '));

console.log("================ SOAL 2 ================")
console.log("\n\n")
for(var i=1; i<=n; i++){
    for(var j = 1; j<=n; j++){
        if(i + j <= n && i>= j){
            x += "*"
        }else{
            x += " "
        }
    }
    x += "\n"
}
console.log(x)
console.log("========================================")