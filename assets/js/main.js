(function($){
	"use strict";
    jQuery(document).ready(function () {
        jQuery('.menu').meanmenu();
	});
	
	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(400);
    });
    // END PRELOADER JS CODE
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 50) {
				$('.main-menu-area').addClass('menu-shrink animated slideInDown');
			} else {
				$('.main-menu-area').removeClass('menu-shrink animated slideInUp');
			}
		});

		$('.menu li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });
		
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

		$('.scroll-btm a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });
		
		$('#loginModal').modal('show');
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip()
		})

		// START TESTIMONIAL JS CODE
		$('.testimonials').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 1500,
			arrows: true,
			dots: false,
			prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-caret-left"></i></button>',
			nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-caret-right"></i></button>',
			pauseOnHover: false,
		});
		// END TESTIMONIAL JS CODE

		var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
	
		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="fas fa-caret-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});
}(jQuery));

function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
}

