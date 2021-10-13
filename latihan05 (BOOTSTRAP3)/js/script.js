$('.page-scroll').on('click',function(e){

    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    console.log(elemenTujuan.offset().top);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 40
    });

    e.preventDefault();
})