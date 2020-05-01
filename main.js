$(function(){
	// scroll and chnage the color of header
	$(window).scroll(function(){
    	var scrollPos = $(document).scrollTop();
    	if (scrollPos >= 2){
    		$('.header').addClass("header-shadow");
    		$('.menu a').addClass('menu-color');
    	}
    	else{
    		$('.header').removeClass("header-shadow");
    		$('.menu a').removeClass('menu-color');
    	}
	});
	
	// click link > hide mobile menu
	$(".menu-link").click(function(event){
		$("#chk").prop("checked", false)
	});

	$(".gallery-image-filtering").hide();

	// click square-icon show gallery filter menu
	$(".square-icon i").click(function(event){
		$(".gallery-image-filtering").toggle(600)
	});

	// image gallery
	$('.gallery').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  autoPlay: true
	});
	
})