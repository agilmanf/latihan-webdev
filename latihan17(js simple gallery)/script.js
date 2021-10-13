const container = document.querySelector('.container');
const jumbo = container.firstElementChild;
let thumb;

container.addEventListener('click',function(e){
    if(thumb) thumb.classList.remove('selected');

    thumb = e.target;
    jumbo.classList.add('fade');
    jumbo.src = thumb.src;
    setTimeout(function(){
        jumbo.classList.remove('fade');
    },500)
    thumb.classList.add('selected');
})