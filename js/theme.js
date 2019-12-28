;(function($){
    "use strict"

	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	$('.off_menu li a').each(function () {
        var $this = $(this);
        $this.on('click', function (e) {
            var has = $this.hasClass('open');
            $('.off_menu li a').removeClass('open');
            if(has) {
                $this.removeClass('open');
            } else {
                $this.addClass('open');
            }
        });
    });
	
	$('.navbar-toggle').on('click', function() {
        $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
    });
    $('.close_menu, .click-capture').on('click', function() {
        $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
        $('.off_menu ul').slideUp(300);
    });
    var dropToggle = $('.off_menu > li').has('ul').children('a');
    dropToggle.on('click', function() {
        dropToggle.not(this).closest('li').find('ul').slideUp(200);
        $(this).closest('li').children('ul').slideToggle(200);
        return false;
    });
	
	
	$('.canvus_btn').on('click', function() {
        $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
    });

	
	/*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:false,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1199,992,767,480],
                // gridwidth:[1170,970,750,700,400],
                // gridheight:[800,800,550,550,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider();
	/*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider2(){
        if ( $('#main_slider2').length ){
            $("#main_slider2").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:4000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
					bullets: {
						enable:true,
						hide_onmobile:true,
						style:"uranus",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20,
						space:10,
						tmp:'<span class="tp-bullet-inner"></span>'
					},
                    arrows: {
                        style:"zeus",
                        enable:false,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 50,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1199,992,767,480],
                // gridwidth:[1170,970,750,700,400],
                // gridheight:[580,580,580,550,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider2();
	
	
	/*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider3(){
        if ( $('#main_slider3').length ){
            $("#main_slider3").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:40000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
					bullets: {
						enable:true,
						hide_onmobile:true,
						style:"uranus",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20,
						space:10,
						tmp:'<span class="tp-bullet-inner"></span>'
					},
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:992,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1199,992,767,480],
                // gridwidth:[1170,970,750,700,400],
                // gridheight:[710,710,550,550,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider3();

	/*----------------------------------------------------*/
    /*  Big Product js
    /*----------------------------------------------------*/
	function big_product_isotope(){
		if ( $('.big_product_inner').length ){
			
			// Activate isotope in container
            $(".big_product_inner").imagesLoaded( function() {
                $(".big_product_inner").isotope({
					layoutMode: 'masonry',
					percentPosition:true,
					masonry: {
						columnWidth: 1,
					}            
                }); 
            }); 
			
		}
	}
	big_product_isotope();
	
	/*----------------------------------------------------*/
    /*  Gallery One js
    /*----------------------------------------------------*/
	function product_isotope(){
		if ( $('.product_area').length ){
			
			// Activate isotope in container
            $(".product_inner").imagesLoaded( function() {
                $(".product_inner").isotope({
					layoutMode: 'fitRows',
					percentPosition:true,
					masonry: {
						columnWidth: 1,
					}            
                }); 
            }); 
			
			// Add isotope click function
			$(".product_fillter ul li").on('click',function(){
				$(".product_fillter ul li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr("data-filter");
                $(".product_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
				return false;
			});
		}
	}

	product_isotope();
	
	
	/*----------------------------------------------------*/
    /*  Nice Selector js
    /*----------------------------------------------------*/
	function nice_selector(){
		if ( $('select').length ){
			$('select').niceSelect();
		}
	}
	nice_selector();
	
	/*----------------------------------------------------*/
    /*  Nice Selector js
    /*----------------------------------------------------*/
	function buttton_css(){
		$('.main_btn2')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});
//		$('a[href="#"]').click(function(){return false});
	}
	buttton_css();
	
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
            })
        }
    }
    testimonials_slider();
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function story_slider(){
        if ( $('.story_slider').length ){
            $('.story_slider').owlCarousel({
                loop:true,
                margin: 10,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots:false, 
                responsiveClass: true,
				navContainer: '.story_slider',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            })
        }
    }
    story_slider();

	/*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
    function clients_slider(){
        if ( $('.clients_slider').length ){
            $('.clients_slider').owlCarousel({
                loop:true,
                margin: 70,
                items: 5,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots:false, 
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 2,
                    },
                    575: {
                        items: 3,
                    },
                    768: {
                        items: 4,
                    },
                    992: {
                        items: 5,
                    }
                }
            })
        }
    }
    clients_slider();
	
	/*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
    function product_slider(){
        if ( $('.new_product_slider').length ){
            $('.new_product_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 4,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots:false, 
                responsiveClass: true,
				navContainer: '.new_product_slider',
                navText: ['<i class="arrow_left" aria-hidden="true"></i>','<i class="arrow_right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    }
                }
            })
        }
    }
    product_slider();
	
	$(".summer_slider").flipster({
		style: 'flat',
		spacing: -0.15,
		scrollwheel: false,
		touch: true,
		nav: 'after',
	});
  
	$('.p_big_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.p_small_slider'
	});
	$('.p_small_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.p_big_slider',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		vertical: true,
		arrows: false,
	});
	
	
	/*----------------------------------------------------*/
    /*  Skill Slider
    /*----------------------------------------------------*/
   
	$(".coming_text_inner").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
	
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });
	
	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	});

	

})(jQuery)

