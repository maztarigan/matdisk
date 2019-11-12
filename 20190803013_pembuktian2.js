var key = require("readline-sync");
var s = ""
var n = parseInt(key.question('Input Nilai : '));

for(var i=1; i<n; i++){
    for(var j = 1; j<n; j++){
        if(i + j <= n && i>= j){
            s += "* "
        }else{
            s += " "
        }
    }
    s += "\n"
}
console.log(s)