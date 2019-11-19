var key,n;
key=require('readline-sync')
n=parseInt(key.question("Masukkan n = "))

var x=""
for(var a=n;a>=1;a--){
    for(var b=a;b>=1;b--){
        x+=" "
    }
    for(var c=n;c>=a;c--){
        x+="*"+" "
    }
    console.log(x)
    x=""
}
for(var i=n-1;i>=1;i--){
    for(var k=n;k>=i;k--){
        x+=" "
    }
    for(var j=i;j>=1;j--){
        x+="*"+" "
    }
    console.log(x)
    x=""
}