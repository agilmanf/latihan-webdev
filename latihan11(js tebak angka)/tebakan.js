var ulangi = true;
while(ulangi){
    // Input ////////////////////////
    var player = prompt('Permainan Tebak Angka!\nPilih satu angka antara 1 - 10')
    var angka = Math.floor(Math.random() * 10 + 1);
    var tebak = 0;

    // Guesses Left ///////////////// Checking Number ////////////////
    for(tebak; tebak < 2; tebak ++){
        if(angka > player){
            player = prompt('Pilihan anda terlalu rendah\nSilahkan pilih angka yang lain')}
        else if(angka < player){
            player = prompt('Pilihan anda terlalu tinggi\nSilahkan pilih angka yang lain')
        }
        else if(isNaN(player)){
            player = prompt('Anda bukan memasukan angka\nSilahkan pilih angka yang lain')
        }
    }  

    // Result //////////////////////
    if(angka == player){
        alert('Angka yang anda tebak benar, jawabannya memang ' + angka); 
    }
    else if (tebak == 2  ){
        alert('Maaf kesempatan kamu sudah habis, jawabanya adalah angka ' + angka);
    }

    console.log(tebak);
    ulangi = confirm('Apakah kamu mau main lagi?')
}

alert('TERIMA KASIH SUDAH BERMAIN');