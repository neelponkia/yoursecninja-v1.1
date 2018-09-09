$(function() {

	var wind = $(window);
    "use strict";


    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -80            // offste (in px) for fixed top navigation
    });

    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){

            navbar.addClass("navbar-scrolled");
            logo.attr('src', 'img/ninja-dark.png');

        }else{

            navbar.removeClass("navbar-scrolled");
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

    // Add smooth scrolling on all links inside the navbar
$(".smooth-nav").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top 
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

$('.audit-icon').on('click', function () {
    $("#pentest").fadeOut(700);
    $(".pentest-icon i").removeClass('active-icon');
    $(".pentest-icon span").removeClass('active-icon');
    $("#special").fadeOut(700);
    $(".special-icon i").removeClass('active-icon');
    $(".special-icon span").removeClass('active-icon');
    $("#audit").fadeIn(2000);
    $(".audit-icon i").addClass('active-icon');
    $(".audit-icon span").addClass('active-icon');
});

$('.pentest-icon').on('click', function () {
    $("#special").fadeOut(700);
    $(".special-icon i").removeClass('active-icon');
    $(".special-icon span").removeClass('active-icon');
    $("#audit").fadeOut(700);
    $(".audit-icon i").removeClass('active-icon');
    $(".audit-icon span").removeClass('active-icon');
    $("#pentest").fadeIn(2000);
    $(".pentest-icon i").addClass('active-icon');
    $(".pentest-icon span").addClass('active-icon');
});

$('.special-icon').on('click', function () {
    $("#pentest").fadeOut(700);
    $(".pentest-icon i").removeClass('active-icon');
    $(".pentest-icon span").removeClass('active-icon');
    $("#audit").fadeOut(700);
    $(".audit-icon i").removeClass('active-icon');
    $(".audit-icon span").removeClass('active-icon');
    $("#special").fadeIn(2000);
    $(".special-icon i").addClass('active-icon');
    $(".special-icon span").addClass('active-icon');
});

});

 $(window).on('load', function () {
    $('#preloader').fadeOut();
 });
