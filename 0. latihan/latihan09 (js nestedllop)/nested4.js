var s = '';
var tinggiPiramid = 20;

for(var i = 0; i < tinggiPiramid/2; i++){

    for(var j = 0; j <= i; j++){
        s += '*'; 
    }
    s += '\n';
}

for(var k = tinggiPiramid/2-1; k > 0; k--){

    for(var l = 0; l < k; l++){
        s += '*'; 
    }
    s += '\n';
}

console.log(s);