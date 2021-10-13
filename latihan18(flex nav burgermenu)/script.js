const burger = document.querySelector('.hamburger');
let isOpen = false;

burger.addEventListener('click', function(){
    if (!isOpen) {
        burger.classList.add('open')
        isOpen = true;
    }
    else {
        burger.classList.remove('open')
        isOpen = false;
    }
})