// Ambil element  ul li videos

const videos = Array.from(document.querySelectorAll('[data-duration]'));

// filter javascipt lanjutan
let videoJS = videos.filter( video => video.textContent.includes("JAVASCRIPT LANJUTAN"))

// ambil data duration
.map( duration => duration.dataset.duration)

// buat jadi detik lalu jumlahkan
.map( waktu => {
    const bagian = waktu.split(':').map(_bagian => parseFloat(_bagian));
    return bagian[0] * 60 + bagian[1];
})

.reduce((total, durasi) => total += durasi );

// hasilnya buat jadi jam:menit:detik
const jam = Math.floor(videoJS / 3600);
const menit = Math.floor((videoJS - jam * 3600) / 60);
const detik = videoJS - jam * 3600 - menit * 60;

// masukan kedalam html
const totalDurasi = document.querySelector('.total-durasi');
totalDurasi.textContent = `${jam} Jam, ${menit} menit, ${detik} detik`;

const jumlahVideo = document.querySelector('.jumlah-video');
let _jumlahVideo = videos.filter( video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;

jumlahVideo.textContent = _jumlahVideo;


// console.log(videoJS);
// console.log(menit);
