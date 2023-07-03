AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 20,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	stagePadding: 10,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	          items: 2
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	          items: 3
	        }
		    }
			});
		}

		if ( $('.slide-one-item').length > 0 ) {
			$('.slide-one-item').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    pauseOnHover: false,
		    nav: true,
		    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
		  });
	  }
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		if ( $('#date-countdown').length > 0 ) {
			$('#date-countdown').countdown('2020/10/10', function(event) {
			  var $this = $(this).html(event.strftime(''
			    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
			    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
			    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
			    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
			    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
			});
		}
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

});


// Scroll to online appoitment

let mainServices = document.querySelectorAll("#main-services");

let turnosSection = document.querySelector("#turnos");

mainServices.forEach(function(e)
{
	e.addEventListener("click", function(e)
	{
		e.preventDefault();

		turnosSection.scrollIntoView({behavior: "smooth"});
	})
})


// Scroll to top

let btnToTop = document.querySelector(".btn-toTop");

let showBtn = 725;

let scrollContainer = () => 
{
	return document.documentElement || document.body;
}

document.addEventListener("scroll", function()
{
	if(scrollContainer().scrollTop > showBtn)
	{
		btnToTop.classList.remove("hidden");
	}
	else
	{
		btnToTop.classList.add("hidden");
	}
})

btnToTop.addEventListener("click", function(e)
{
	e.preventDefault();

	document.querySelector(".site-blocks-cover").scrollIntoView({behavior:"smooth"});
})


// Slider patients

let slides = document.querySelectorAll(".slide");
let btnRight = document.querySelector(".slider__btn-right");
let btnLeft = document.querySelector(".slider__btn-left");
let dots = document.querySelector(".dots");

let currentSlide = 0;
let maxSlide = slides.length;

function goToSlide(slide)
{
	slides.forEach(function(e, i)
	{
		e.style.transform = `translateX(${150 * (i - slide)}%)`
	})
}

goToSlide(0)

function goSlideRight()
{
	if(maxSlide - 1 == currentSlide)
	{
		currentSlide = 0;
	}
	else
	{
		currentSlide++;
	}

	goToSlide(currentSlide);
	activeDot(currentSlide);
}

function goSlideLeft()
{
	if(currentSlide == 0)
	{
		currentSlide = maxSlide - 1;
	}
	else
	{
		currentSlide--;
	}

	goToSlide(currentSlide);
	activeDot(currentSlide);
}

btnLeft.addEventListener("click", goSlideLeft);
btnRight.addEventListener("click", goSlideRight);


document.addEventListener("keydown", function(e)
{
	if(e.key == "ArrowLeft")
	{
		goSlideLeft();
	}

	if(e.key == "ArrowRight")
	{
		goSlideRight();
	}
})


// Dots

function creatDots()
{
	slides.forEach(function(_,i)
	{
		dots.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
	})
}

creatDots();


dots.addEventListener("click", function(e)
{
	if(e.target.classList.contains("dots__dot"))
	{
		let slide = e.target.dataset.slide;

		goToSlide(slide);
		activeDot(slide);
	}
})

function activeDot(slide)
{
	document.querySelectorAll(".dots__dot").forEach(e => e.classList.remove("dots__dot--active"));

	document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
}

activeDot(0);


// Slider work

let slidesWork = document.querySelectorAll(".slide-w");
let btnWorkLeft = document.querySelector(".slider-work__btn-left");
let btnWorkRight = document.querySelector(".slider-work__btn-right");
let maxSlideWork = slidesWork.length;
let currentSlideWork = 0


function goToSlideWork(slide)
{
	slidesWork.forEach(function(e, i)
	{
		e.style.transform = `translateX(${150 * (i - slide)}%)`;
	})
}

goToSlideWork(0);

function goSlideWorkLeft()
{
	if(currentSlideWork == 0)
	{
		currentSlideWork = maxSlideWork - 1;
	}
	else
	{
		currentSlideWork--;
	}

	goToSlideWork(currentSlideWork);
}

function goSlideWorkRight()
{
	if(currentSlideWork == maxSlideWork - 1)
	{
		currentSlideWork = 0;
	}
	else
	{
		currentSlideWork++;
	}
	goToSlideWork(currentSlideWork);
}

btnWorkLeft.addEventListener("click", goSlideWorkLeft)
btnWorkRight.addEventListener("click",goSlideWorkRight)