const doaInput = document.querySelector('.doa');
const suratInput = document.querySelector('.surat');
const doaContainer = document.querySelector('.doa-container');
const suratContainer = document.querySelector('.surat-container');
const noContainer = document.querySelector('.no-container');
const jadwalContainer = document.querySelector('.jadwal-container');
const tombolAcak = document.querySelector('.acak');

const doaCard = document.querySelector('.doa-card');
const suratCard = document.querySelector('.surat-card');

let surat = [   'An-Nas',
                'Al-Kautsar',
                'Al-Falaq',
                'Al-Ikhlas',
                'Al-Asr',
                'An-Nasr',
                'Al-Lahab',
                'An-Fil',
                'Al-Quraisy',
                'Al-Kafirun',
                'At-Takasur',
                'Al-Maun',
                'Al-Humazah',
                'Al-Insyiroh',
                'Al-Qodr',
                'At-Tin',
                'Ad-Duha',
                'Al-Qoriah',
                'Al-Adiyat',
                'Al-Lail',
                'Al-Bayyinah'];

let doa = [ 'Masuk & Keluar Masjid',
            'Mau Tidur & Bangun Tidur',
            'Mau & Sesudah Makan',
            'Setelah Berpakaian',
            'Masuk WC & Keluar WC',
            'Masuk & Keluar Rumah',
            'Mencari Ilmu 1 & 2',
            'Buka Puasa',
            'Mendengar Petir',
            'Terkena Musibah',
            'Melihat Orang Terkena Musibah',
            'Setelah Mendengar Adzan',
            'Ketetapan Iman',
            "Setelah Membaca Al-Qur'an",
            'Berlindung dari Amalan Jelek',
            'Berlindung dari Sifat Jelek',
            'Berlindung dari Wabah/Penyakit',
            'Pengayoman',
            'Minta Kesabaan',
            'Doa Sholat Jenazah'];
let nomer;

const hari = ['Senin','Selasa','Rabu','Kamis',"Jum'at"];
let jadwalSurat = [[],[],[],[],[]];
let jadwalDoa = [[],[],[],[],[]];

let suratAcak;
let doaAcak;

UpdateInterface();

document.addEventListener('click', function(e){

    //inputing data to array
    if(e.target.className == "doa-submit") {
        if(doaInput.value != ''){
            doa.push(doaInput.value);
            doaInput.value = '';
            UpdateInterface();
        }
    }

    if(e.target.className == 'surat-submit') {
        if(suratInput.value != ''){
            surat.push(suratInput.value);
            suratInput.value = '';
            UpdateInterface();
        }
    }

    
})

function UpdateInterface () {
    //nomer increment
    nomer = (surat.length > doa.length) ? surat : doa;
    noContainer.innerHTML = '';
    for(let i = 1; i <= nomer.length; i++) {
        noContainer.innerHTML += `<li>${i}</li>`
    }


    doaContainer.innerHTML = ``;
    doa.forEach(function(d){
        doaContainer.innerHTML += `<li>${d}</li>`;
    })

    suratContainer.innerHTML = ``;
    surat.forEach(function(s){
        suratContainer.innerHTML += `<li>${s}</li>`;
    })
}

tombolAcak.addEventListener('click',AcakJadwal);

function AcakJadwal() {
    // reset value agar data tidak double
    jadwalContainer.innerHTML = "";
    jadwalSurat = [[],[],[],[],[]];
    jadwalDoa = [[],[],[],[],[]];

    // jadwal acak array logic
    suratAcak = shuffle(Array.from(surat));
    doaAcak = shuffle(Array.from(doa));
    jadwalSurat = PembagianJadwal(jadwalSurat, suratAcak);
    jadwalDoa = PembagianJadwal(jadwalDoa, doaAcak);
   
    // Update UI
    for(let i = 0; i < hari.length; i++) {

        let s = "";
        for(let j = 0; j < jadwalSurat[i].length; j++) {
            s += `<li>${jadwalSurat[i][j]}</li>`;
        }

        let d = "";
        for(let k = 0; k < jadwalDoa[i].length; k++) {
            d += `<li>${jadwalDoa[i][k]}</li>`;
        }

        jadwalContainer.innerHTML += `<div class="jadwal-card">
        <h2>${hari[i]}</h2>
        <ul>
            <li><h3>Doa</h3></li>
            <span class="jadwal-card">${d}</span>
            <li><h3>Surat</h3></li>
            <span class="jadwal-card">${s}</span>
        </ul>`;
   }
}

function PembagianJadwal(jadwal, items) {
    let indexJadwal = 0;
    
    for(let i = 0; i < items.length; i++) {
        if(indexJadwal < jadwal.length) {
            jadwal[indexJadwal].push(items[i]);
            //console.log(indexJadwal);
            indexJadwal += 1;
        }
        indexJadwal = (indexJadwal >= jadwal.length) ? 0 : indexJadwal; 
    }
    return jadwal;
}

function shuffle(arr) {
    //const randomIndex = Math.round(Math.random() * arr.length);
    var currentIndex = arr.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}