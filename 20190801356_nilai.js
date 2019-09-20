console.log("WELCOME");
var inputkey = require('readline-sync');

var nilai = parseInt(inputkey.question("MASUKAN NILAI : "));

if (nilai >=85)
{
    console.log("GRADE : A");
}else if((nilai>=70) && (nilai<=86)){
    console.log("GRADE : B");
}else if((nilai>=60) && (nilai<=71)){
    console.log("GRADE : C");
}else if((nilai>=50) && (nilai<=61)){
    console.log("GRADE : D");
}else if((nilai<=51)){
    console.log("GRADE : E");
}

console.log("THANK YOU");