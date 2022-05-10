var jmlAngkot = 10;
var angkotBeroperasi = 3;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log ('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log ('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    }
    else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
    } 
}