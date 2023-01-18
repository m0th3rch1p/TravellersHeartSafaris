<script setup>
import { onMounted } from 'vue';

import banner1 from "@/vendors/main/img/banner/1.webp";
import banner2 from "@/vendors/main/img/banner/2.webp";
import banner3 from "@/vendors/main/img/banner/3.webp";

onMounted(() => {
    //===================== Slider Caption Animation
	
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#banner'),
	$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});
});

</script>

<template>
    <div id="banner" class="carousel slide carousel-fade" data-ride="carousel" data-pause="false">

<!-- Wrapper for slides -->
<div class="carousel-inner" role="listbox">
    <div class="item" :style="`background-image:url(${banner1});`">
        <div class="caption-info">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-md-offset-2">
                        <div class="caption-info-inner text-center">
                            <h1 class="animated fadeInDown">Welcome to Traveller's Heart Safaris</h1>
                            <p class="animated fadeInUp">We are a proficient team with zeal interest in
                                tours
                                and travel at heart. We boast about our good knowledge and experience of all
                                leading destinations at first hand and better understanding of the ground
                                with
                                supportive agents to provide excellent customer services worth your budget.
                                You
                                are guaranteed with confidence and peace of mind during your safari with us
                                on
                                your side for we are there before you go, while you are traveling and upon
                                your
                                return.We are committed to create heavenly experiences with our endless
                                incomparable choices in adventure; The wild bush experience, high altitude
                                adventure, beach safaris, historical and cultural tours. We are the hub of
                                all
                                great adventures.</p>
                            <a href="#packages" class="animated fadeInUp btn btn-primary page-scroll">See
                                Packages</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="item" :style="`background-image:url(${banner2});`">
        <div class="caption-info">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-md-offset-2">
                        <div class="caption-info-inner text-center">
                            <h1 class="animated zoomIn">Mission</h1>
                            <p class="animated zoomIn">To inspire people to step out their box, create
                                heavenly
                                experiences for them and better their traveling moments and wellness.</p>
                            <a href="#contact-us"
                                class="animated zoomIn btn btn-primary page-scroll">Contact
                                Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="item active" :style="`background-image:url(${banner3});`">
        <div class="caption-info">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-md-offset-2">
                        <div class="caption-info-inner text-center">
                            <h1 class="animated fadeInLeft">Vision</h1>
                            <p class="animated fadeInLeft">To provide hassle free travel arrangements in
                                regards
                                to each person’s preference.</p>
                            <a href="#hot-deals"
                                class="animated fadeInLeft btn btn-primary page-scroll">Find a
                                tour</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div><!--end carousel-inner-->


<!-- Controls -->
<a class="control left" href="#banner" data-slide="prev"><i class="fa fa-long-arrow-left"></i></a>
<a class="right control" href="#banner" data-slide="next"><i class="fa fa-long-arrow-right"></i></a>
</div>
</template>
