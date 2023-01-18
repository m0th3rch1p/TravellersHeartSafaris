<script setup>
import { onMounted } from 'vue';

import "@/vendors/main/js/jquery.js";
import "@/vendors/main/js/bootstrap.min.js";
import "@/vendors/main/js/jquery.easing.min.js";
import "@/vendors/main/js/wow.js";

import Header from '@/Components/Main/Header.vue';
import Footer from '@/Components/Main/Footer.vue';

onMounted(() => {
    if(!document.body.id || document.body.id !== "page-top") document.body.id = "page-top";

	//JQuery for page scrolling feature - requires JQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top-75
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		 
		$('body').scrollspy({ 
			target: '.navbar-collapse',
			offset: 77
		}) 
		$(".navbar-nav li a").on('click', function(event) {
			$(".navbar-collapse").removeClass('in');
		});
		 
		//============= animation section ============  
		 if($('.wow').length){
			var wow = new WOW(
			  {
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       0,          // distance to the element when triggering the animation (default is 0)
				mobile:       true,       // trigger animations on mobile devices (default is true)
				live:         true       // act on asynchronously loaded content (default is true)
			  }
			);
			wow.init();
		}
					
		/*============================== Back to top =========================*/
		$(".back-top").hide();
		
		$('.back-top a').on('click', function(event) {
			$('body,html').animate({scrollTop:0},800);
			return false;
		});
		
	
	$(window).on('scroll', function() {
	
	//JQuery to collapse the navbar on scroll
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
		
		
	//=================== Back to top ===========================
		if($(this).scrollTop()>150){
			$('.back-top').fadeIn();
		}
		else{
			$('.back-top').fadeOut();
		}
		
		
	});
	
	// Lazy Loading
	if("IntersectionObserver" in window) {
        let lazyLoadImages = Array.from(document.querySelectorAll(".lazy"));
		let imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    let image = entry.target;
                    
                    image.src = `${image.dataset.src}`;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyLoadImages.forEach(img => imageObserver.observe(img));
    }
});
</script>

<template>
    <Header />
        <slot />
    <Footer />
</template>

<style>
@import "https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500,700";
@import "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300italic,400italic,700";
@import "https://fonts.googleapis.com/css?family=Dancing+Script";
@import "@/vendors/main/css/bootstrap.min.css";
@import "@/vendors/main/css/animate.css";
@import "@/vendors/main/fonts/font-awesome/css/font-awesome.min.css";
@import "@/vendors/main/style.css";
</style>