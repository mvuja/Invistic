// hamburger

$(".menu").on("click", function(){
    $(this).toggleClass('open')
    $(".nav-menu").toggleClass("active")
})

$(".nav-menu .container a").on("click", function(){
    $(".nav-menu").removeClass("active")
    $(".menu").toggleClass('open')
})


// owl carousel

$(document).ready( () => {
    $("#carousel").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        items: 1,
        autoplay: false
    })
})


// change nav on scroll

$(window).on('scroll', () => {
    if ($(window).scrollTop()>200) {
        $('nav').addClass('sticky')
    } else {
        $('nav').removeClass('sticky')
    }
})
