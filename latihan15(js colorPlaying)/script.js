const tmblUbah = document.getElementById('tmblUbah');


tmblUbah.onclick = function(){
    document.body.classList.toggle('blue');
}

const tmblAcak = document.createElement('button');
const tmblAcakTeks = document.createTextNode('Tombol Ubah Warna Acak');
tmblAcak.setAttribute('type','button');
tmblAcak.appendChild(tmblAcakTeks);
tmblUbah.after(tmblAcak);

tmblAcak.addEventListener('click', function(){
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb(' + r +',' + g +',' + b +')';

    rgbUpdate();
})

//////////////////////////////////////////////////////////////////////////////
var rBg = document.body.style.backgroundColor.split(',')[0].slice(4);
var gBg = document.body.style.backgroundColor.split(',')[1];
var bBg = document.body.style.backgroundColor.split(',')[2];

const rSlider = document.querySelector('input[name=rSlider]');
const gSlider = document.querySelector('input[name=gSlider]');
const bSlider = document.querySelector('input[name=bSlider]');

function rgbUpdate () {
    let rBg = document.body.style.backgroundColor.split(',')[0].slice(4);
    let gBg = document.body.style.backgroundColor.split(',')[1].slice(1);
    let bBg = document.body.style.backgroundColor.split(',')[2].split(')')[0].slice(1);

    gSlider.value = gBg;
    rSlider.value = rBg;
    bSlider.value = bBg;

    // console.log('Red ' + rBg);
    // console.log('Green ' + gBg);
    // console.log('Blue ' + bBg);
}

rSlider.addEventListener('input',function(){
    document.body.style.backgroundColor = 'rgb('+this.value+','+gSlider.value+','+ bSlider.value+')';
})

gSlider.addEventListener('input',function(){
    document.body.style.backgroundColor = 'rgb('+rSlider.value+','+this.value+','+ bSlider.value+')';
})

bSlider.addEventListener('input',function(){
    document.body.style.backgroundColor = 'rgb('+rSlider.value+','+gSlider.value+','+ this.value+')';
})

let pressed = false;

document.body.addEventListener("keyup", event => {
    console.log(pressed);
     if(!pressed) {
         pressed = true;
     }
     else {
         pressed = false;
     }
     
   });

document.body.addEventListener('mousemove',function(event){
    let xPos = Math.round((event.clientX/window.innerWidth) * 255);
    let yPos = Math.round((event.clientY/window.innerHeight) * 255);

      if(pressed){
        document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',' + bSlider.value + ')';
        rgbUpdate();
      }

})

