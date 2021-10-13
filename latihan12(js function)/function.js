var input1 = prompt('Masukan sisi kubus 1');
var input2 = prompt('Masukan sisi kubus 2');

function jumlahVolume2Kubus(a,b){
    var jumlah;
    a = a*a*a;
    b = b*b*b;
    jumlah =a+b;

    return jumlah;
}

alert('Hasil penjumlahan dari 2 volume kubus adalah ' + jumlahVolume2Kubus(input1,input2));