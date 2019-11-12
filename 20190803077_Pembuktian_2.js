var key = require('readline-sync');

var y = parseInt(key.question('Input Angka : '));


            let str = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < y; j++){
                    if(i + j <= y && i >= j){
                        str = str.concat("*");
                    }else{
                        str = str.concat(" ")
                    }
                }
                str = str.concat("\n")
            }
            console.log(str) 