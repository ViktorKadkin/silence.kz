$(function() {

	// Custom JS
// 	$(document).ready(function(){
//   $(".partners").owlCarousel({
//   	items: 5,
//   	dots: false,
//   	nav: true,
//   	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
//   	loop: true,
//   	responsive: {
//   		0:{
//   			items: 1,
//   			nav: false
//   		},
//   		768:{
//   			items: 3
//   		},
//   		992:{
//   			items: 4
//   		}
//   	},
//   	smartSpeed: 500
//   });
// 	});


// jQuery is required to run this code
  $( document ).ready(function() {
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });
  });

  function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
  }

  function initBannerVideoSize(element){
    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }

  setTimeout(function(){
  	document.getElementsByTagName('video')[0].play();

  	}, 1000);
  
  	

  	// fixed header
  	var winPos, winWidth;
    
  	$(window).scroll(function(){
      winWidth = $(window).width();

  		winPos = $(window).scrollTop();
      if(winWidth >= 992){
  		if(winPos >= 200){
  			$('.masthead').addClass('fixed');
  			$('#backtop').fadeIn(500);
  		}
  		else{
  			$('.masthead').removeClass('fixed');
  			$('#backtop').fadeOut(500);
      }
        }
        else{
        	if(winPos >= 200){
  					$('.toggle-mnu').addClass('fixed-mobile ');
  					}
  					else{
  					$('.toggle-mnu').removeClass('fixed-mobile ');
        		}}
  	})
  	//togle menu
  	$(".toggle-mnu").click(function() {
  	$(this).toggleClass("on");
  	$('.mobile-menu').toggleClass('show-mobile-menu');
  	$('.mobile-sticky-header-overlay').toggleClass('active-overlay');
  	return false;
		});

  	// blur work

  	$('.work-item').hover(function(){
  		$(this).addClass('blur');
  		}, function(){
  		$(this).removeClass('blur');
  		});


  	//scroll top
  	function scrollTopF(){
  		var windowHeigth = $(window).height();
  	$('#backtop').click(function()
  		{
  			$('body').animate({scrollTop:0}, 1000);
  			$('html').animate({scrollTop:0}, 1000);
  		});
  	$('#arrowdown').click(function()
  		{
  			$('body').animate({scrollTop: windowHeigth-55}, 1000);
  			$('html').animate({scrollTop: windowHeigth-55}, 1000);
  		});}
  	scrollTopF();

  
  
});