var s = '';

for (var i = 0; i < 10; i++){

    if(i%2 == 1){
        s += ' ';
    }

    for (var j = 0; j < 15; j++){
        if (j%2 == 0){
            s += '#';
        }
        else {
            s += ' ';
        }
    }   
    s += '\n';
}

console.log(s);