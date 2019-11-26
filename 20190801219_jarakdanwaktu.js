var data = [    [18,29,"Nama"] , [7,15] , [16,35] , [6,10] , [10,25] , [2,5] , [8,22] , [18,32] , [18,35] , [6.2,17] , [30,90] , [16,45] , [1,15] , [8.4,21] ,[15.8,21.8] , [12,25] , [1,3]
            ,   [14,45] , [0.5,2] , [3.9,11] , [17,45] , [2.5,15] , [5.1,20] , [15,33] , [1,8] , [16,31]  ]
       
console.log(data[0][2])
var min_jarak = data[0][0]
var min_waktu = data[0][1]
var max_jarak = data[0][0]
var max_waktu = data[0][1]
var nama_min_jarak = data[0]
var nama_min_waktu = data[0]
var nama_max_jarak = data[0]
var nama_max_waktu = data[0]

for (var i = 0 ; i < data.length ; i++){
    for(var j = 1 ; j <=1 ; j++ ){
        if(data[i][j] < min_jarak ){
            min_jarak = data[i][j]
            nama_min_jarak = data[i]
        }
        else if(data[i][j] < min_waktu ){
            min_waktu = data[i][j]
            nama_min_waktu = data[j]
        }
    }
}
for (var i = 0 ; i < data.length ; i++){
    for(var j = 0 ; j <= 0 ; j++ ){
        if(data[i][j] > max_jarak ){
            max_jarak = data[i][j]
            nama_max_jarak = data[i]
        }
        else if(data[i][j] > max_waktu ){
            max_waktu = data[i][j]
            nama_max_waktu = data[j]
        }
    }
}




data[0][0]="Iyay" , data[0][1]="Iyay"
data[1][0]="Firlan" , data[1][1]="Firlan"
data[2][0]="Tomy" , data[2][1]="Tomy"
data[3][0]="Magfur" , data[3][1]="Magfur"
data[4][0]="Jeje" , data[4][1]="Jeje"
data[5][0]="Kevin" , data[5][1]="Kevin"
data[6][0]="Andri" , data[6][1]="Andri"
data[7][0]="Syayid" , data[7][1]="Syayid"
data[8][0]="Latif" , data[8][1]="Latif"
data[9][0]="Thoriq" , data[9][1]="Thoriq"
data[10][0]="Andre" , data[10][1]="Andre"
data[11][0]="Unggul" , data[11][1]="Unggul"
data[12][0]="Micko" , data[12][1]="Micko"
data[13][0]="Mansur" , data[13][1]="Mansur"
data[14][0]="Levy" , data[14][1]="Levy"
data[15][0]="Fadhly" , data[15][1]="Fadhly"
data[16][0]="Rob" , data[16][1]="Rob"
data[17][0]="Indra" , data[17][1]="Indra"
data[18][0]="Dallas" , data[18][1]="Dallas"
data[19][0]="Diar" , data[19][1]="Diar" 
data[20][0]="Chandra" , data[20][1]="Chandra"
data[21][0]="Dana" , data[21][1]="Dana"
data[22][0]="Vika" , data[22][1]="Vika"
data[23][0]="Dimas" , data[23][1]="Dimas"
data[24][0]="Danang" , data[24][1]="Danang"
data[25][0]="Sachrur" , data[25][1]="Sachrur"

console.log("Jarak Terdekat Di Tempuh Oleh : ",nama_min_jarak,"Dengan Jarak Tempuh : "+min_jarak);
console.log("Waktu Tempuh Tercepat Di Tempuh Oleh : ",nama_min_waktu,"Dengan Waktu Tempuh : "+min_waktu);
console.log("======================================================================================================")
console.log("Jarak Terjauh Di Tempuh Oleh : ",nama_max_jarak,"Dengan Jarak Tempuh : "+max_jarak);
console.log("Waktu Tempuh Terlambat Di Tempuh Oleh : ",nama_max_waktu,"Dengan Waktu Tempuh : "+max_waktu);