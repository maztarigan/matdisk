var inputkeybord=require ("readline-sync")

var nilai= parseInt(inputkeybord.question("masukan nilai" ));

if (nilai >= 81){
    console.log("nilai A");
}else if ((nilai>=70) && (nilai<81)){
    console.log("nilai B");
}else if ((nilai>=60)&&(nilai<70)){
    console.log("nilai C");
}else if ((nilai>= 50) && (nilai<60)){
    console.log ("nilai D");
} else {
    console.log ("nilai E");
}
