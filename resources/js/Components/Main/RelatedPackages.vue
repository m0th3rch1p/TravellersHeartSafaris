<script setup>
import { Link } from '@inertiajs/inertia-vue3';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import loader from '@/vendors/main/img/loader.gif';

defineProps({
    relatedPackages: Array
});
</script>

<template>
    <section id="deals-discounts" class="inverse">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="section-title text-center">
                        <h1>Related Tours</h1>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <Carousel :autoplay="2000" :items-to-show="1" :wrap-around="relatedPackages.length  > 1 ? true : false">
                        <Slide class="tour-item" v-for="tour_package in relatedPackages" :key="tour_package.slug">
                            <div class="carousel__item">
                                <div class="thumb">
                                    <img class="lazy" :src="loader"
                                        :data-src="`/storage/${tour_package.feature_image}`" alt="">
                                </div>
                                <div class="discount-info">
                                    <h3>{{ tour_package.title }}</h3>
                                    <p>{{ tour_package.description }}</p>
                                    <Link :href="`/package/${tour_package.slug}`">View Details <i
                                        class="fa fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </section>
</template>