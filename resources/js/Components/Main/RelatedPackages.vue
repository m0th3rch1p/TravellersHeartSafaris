<script setup>
import { Link } from '@inertiajs/inertia-vue3';

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
                        <div class="tour-item" v-for="tour_package in relatedPackages" :key="tour_package.slug">
                            <div class="thumb">
                                <img class="lazy" src="/main/img/loader.gif" :data-src="`/storage/${tour_package.feature_image}`" alt="">
                            </div>
                            <div class="discount-info">
                                <h3>{{ tour_package.title }}</h3>
                                <p>{{ tour_package.description }}</p>
                                <Link :href="`/package/${tour_package.slug}`">View Details <i
                                        class="fa fa-long-arrow-right"></i></Link>
                                <span class="pull-right">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
</template>