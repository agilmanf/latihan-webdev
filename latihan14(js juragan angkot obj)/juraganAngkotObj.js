function Angkot(sopir,trayek,penumpang,kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(penumpang.includes(namaPenumpang)){
            this.penumpang[this.penumpang.indexOf(namaPenumpang)] = undefined;
            this.kas += bayar;
            return;
        }
        else {
            console.log('Penumpang tidak ditemukan');
        }
    }
}

var angkot1 = new Angkot('Dodi',['kalapa','ledeng'],[],0);

var arr = ['ab','ac','aa'];
console.log(arr.indexOf('ac'));

console.log(arr.includes('aa'));