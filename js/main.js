$(function() {

	var wind = $(window);
    "use strict";

    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){

            navbar.addClass("nav-scrolled");
            logo.attr('src', 'img/ninja-dark.png');

        }else{

            navbar.removeClass("nav-scrolled");
            logo.attr('src', 'img/ninja-light.png');
        }
    });


    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    // sections background image from data background
    var pageSection = $(".back-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
});

// Slider 
$(document).ready(function() {

    $('.clients .owl-carousel').owlCarousel({
    items: 3,  
    loop:true,
    margin: 60,
    autoplayTimeout: 1550,
    mouseDrag:true,
    dots: false,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
    });


    $('.team-section .owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1,
        },
        768: {
            items: 2,
        },
        961: {
            items: 3,
        }
    }
});


});