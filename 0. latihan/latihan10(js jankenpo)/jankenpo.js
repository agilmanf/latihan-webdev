var ulangi = true;

//repeating game
while(ulangi){
    var player = prompt('Jankenpo Game!\nPilih salah satu Batu / Gunting / Kertas');
    var cpu;
    
    // convert random number into computer choices
    var randomNum = Math.random();
    if (randomNum < 0.33) {
        cpu = 'batu';
    }
    else if (randomNum > 0.33 && randomNum < 0.67){
        cpu = 'gunting';
    }
    else {cpu='kertas'};
    
    var hasil;
    
    // game logic
    if(player == cpu){
        hasil = 'SERI'
    }
    else if(player == 'batu'){
        hasil = (cpu == 'gunting') ? 'MENANG' : 'KALAH';
    }
    else if(player == 'kertas'){
        hasil = (cpu == 'batu') ? 'MENANG' : 'KALAH';
    }
    else if(player == 'gunting'){
        hasil = (cpu == 'kertas') ? 'MENANG' : 'KALAH';
    }
    else {
        hasil = 'menuliskan pilihan yang salah';
    }
    
    // Showing Result
    alert('Anda memilih ' + player + ' dan komputer memilih ' + cpu + '\nAnda ' + hasil)
    ulangi = confirm('Apakah anda ingin main lagi?');
}
alert('TERIMA KASIH SUDAH BERMAIN\n-------------------------------------')
