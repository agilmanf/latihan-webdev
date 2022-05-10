var s = '';
var tinggi = 10;

for(var i = 0; i < tinggi; i++){

    for(var l = tinggi; l>i; l--){
        s += ' ';
    }

    for(var k = 0; k < i; k++){
        s += '*'; 
    }

    for(var j = 0; j <= i; j++){
        s += '*'; 
    }
    s += '\n';
}

console.log(s);