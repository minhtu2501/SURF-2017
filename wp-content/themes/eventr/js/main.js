(function($){

	'use strict';
    
   
	
	//SMOOTH SCROLL
	$("#nav ul li a[href*='#']").click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {
				
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: target.offset().top 
				}, 1000);
				return false;
			}
		}
	});
	
	//AUTOCOLLAPSE MOBILE MENU
	$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
	
	
	
	

	
	//MAGNIFIC POPUP LOAD CONTENT VIA AJAX
	$('.html-popup').magnificPopup({type: 'ajax', closeOnContentClick: false, closeBtnInside: true, closeOnBgClick: false});
	
	//MAGNIFIC POPUP IMAGE
	$('.image-popup').magnificPopup({
		type:'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		
	});


	//FAQ TOGGLE 
    $('.faqs dd').hide();
    $('.faqs dt').on({
        click : function(){ $(this).next().slideToggle('normal'); },
        mouseenter : function(){ $(this).addClass('hover'); },
        mouseleave : function(){ $(this).removeClass('hover'); }
    });
	
		
	//OWLCAROUSEL TESTIMONIAL CAROUSEL
	var owl = $("#testimonial-carousel");
 
	  owl.owlCarousel({
		  navigation : false, // Show next and prev buttons
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true,
		  transitionStyle : "fade"
	  });
	
	
	// FUNFACTS
	 $('.number').counterUp({
		delay: 10,
		time: 3000
	});
	
	//FIX HOVER EFFECT ON IOS DEVICES
	document.addEventListener("touchstart", function(){}, true);
	

}( jQuery ));


(function($){

	'use strict';

    $(window).load(function(){
		
		
		
    
	jQuery(window).stellar({
        horizontalScrolling: false
    });
	
	// $("#nav-primary").sticky({ topSpacing: 0, });
	var nav = $("#nav-primary");
	nav.wrap('<div class="sticky-wrapper"></div>');

	var scrollT = function(){
		var getSt = $(window).scrollTop();
		if (getSt > 30) {
			$('.sticky-wrapper').addClass('is-sticky');
		} else {
			$('.sticky-wrapper').removeClass('is-sticky');
		}
	};
	$(window).scroll(function(){
		scrollT();
	});
	
    //PRELOADER
    $('#preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	
	
	//CUSTOM TOOLBAR
	 $("#contentz").mCustomScrollbar({
        theme: "dark-3",
		live: "on",
      });
	  	
	  
	$('#menu-primary li a').removeAttr('title');
	$('#menu-footer li a').removeAttr('title');
	$('#proposal div a.button').attr('target', '_blank');


	// $('.panel-title a').click(function(){
	// 	var hr = $(this).attr('href');
	// 	var pa = $(this).parents('.panel-default').siblings();
	// 	pa.find('.panel-collapse').slideUp(300).removeClass('in');
	// 	$(this).parents('.panel-heading').next().slideToggle(300).toggleClass('in');
	// });
});

}( jQuery ));
