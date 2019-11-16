console.log("SELAMAT DATANG");
console.log("Nama   : Anrian Sihotang")
console.log("NiM    : 20190801359")
var key = require("readline-sync");
var X = parseInt(key.question("Masukkan nilai x : ")); 
var Y = parseInt(key.question("Masukkan nilai y : ")); 
var pola1 = ""; 
var pola2 = ""; 
var pola3 = ""; 
var pola4 = ""; 
var Diamond = ""; 
 
//Pola 1  
console.log("==========") 
console.log("Model 1 :") 
for(var A = 1; A < X; A++){     
    for(var L =1; L < Y; L++){         
        if(A + L >= X){ 
            pola1 = pola1.concat("*"); 
        }else{ 
            pola1 = pola1.concat(" ") 
        } 
    } 
    pola1 = pola1.concat("\n") 
} console.log(pola1) 
 
//pola2 
console.log("==========") 
console.log("Model 2 :") 
for(var A = 1; A < X; A++){     
    for(var L = 1; L < Y; L++){         
        if(A <= L){ 
            pola2 = pola2.concat("*")         
        }else{ 
            pola2 = pola2.concat(" ") 
        } 
    } 
    pola2 = pola2.concat("\n") 
} 
console.log(pola2) 
 
//pola3 
console.log("==========") 
console.log("Model 3 :") 
for(var A= 1; A< X; A++){     
    for(var L =1 ; L < Y; L++){        
         if(A >= L){ 
            pola3 = pola3.concat("*") 
        } 
    } 
    pola3 = pola3.concat("\n") 
} console.log(pola3) 
 
//Pola 4 
console.log("==========") 
console.log("Model 4 :") 
for(var A = 1; A < X; A++){     
    for(var L =1; L< Y; L++){         
        if(L >= A){ 
            pola4= pola4.concat("*") 
        } 
    } 
    pola4 = pola4.concat("\n") 
} console.log(pola4)  
//Pola Diamonds 
console.log("==========") 
console.log("Diamond :") 
for(var A = 1; A < X; A++){     
    for(var L = 1; L < Y; L++){ 
        if(A <= X / 2 && L >= (X / 2) -(A - 1) && L <= (X/2) + (A-1)){ 
            Diamond = Diamond.concat("*"); 
        }else if(A >= X / 2 && L > ((X / 2) - A) * (-1) && L < (X - ((X / 2) - A) *(-1))){ 
            Diamond = Diamond.concat("*"); 
        }else{ 
            Diamond = Diamond.concat(" ") 
        } 
    } 
    Diamond = Diamond.concat("\n") 
} console.log(Diamond) 
console.log("==========") 
console.log("TERIMA KASIH")