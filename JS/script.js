// hamburger

$(".menu").on("click", function(){
    $(this).toggleClass('open')
    $(".nav-menu").toggleClass("active")
})

$(".nav-menu .container a").on("click", function(){
    $(".nav-menu").removeClass("active")
    $(".menu").toggleClass('open')
})


// carousel


const swiperImg = new Swiper('.swiper-container-img', {
    // slidesPerView: 1,
    effect:'fade',
    allowTouchMove: false,
});

const swiper = new Swiper('.swiper-container', {  
    controller: {
        control: swiperImg,
        by: 'container'
    },
    spaceBetween: 200,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });







// change nav on scroll

$(window).on('scroll', () => {
    if ($(window).scrollTop()>20) {
        $('nav').addClass('sticky')
    } else {
        $('nav').removeClass('sticky')
    }
})
