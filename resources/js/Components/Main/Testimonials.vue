<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

defineProps({
    testimonials: Array
});

</script>

<template>
    <section id="testimonials">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="section-title text-center">
                        <h1>What our clients say...</h1>
                    </div>
                </div>
            </div>

            <Carousel :autoplay="2000" :items-to-show="1" :wrap-around="true">
                <Slide v-for="testimonial in testimonials" :key="testimonial.testimonial">
                    <div class="carousel__item">
                        <div class="testimonial-item text-center">
                            <i class="fa fa-quote-left"></i>
                            <div class="author-comments">
                                <p>{{ testimonial.testimonial  }}</p>
                            </div>
                            <div class="designation">
                                {{ testimonial.author }}
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>

        </div>
    </section>
</template>