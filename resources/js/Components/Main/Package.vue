<script setup>
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    packages: Array
});
</script>

<template>
    <section id="packages" class="inverse">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="section-title text-center">
                            <h1>Our Packages</h1>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-3" v-for="tour_package in packages" :key="tour_package.slug">
                        <div class="package-list wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
                            <Link :href="`/package/${tour_package.slug}`">
                            <div class="package-thumb">
                                <img class="lazy" src="/main/img/loader.gif" :data-src="`/storage/${tour_package.feature_image}`" alt="">
                                <div class="duration">
                                    {{ tour_package.days }} days<br>{{ tour_package.nights }} nights
                                </div>
                            </div>
                            <div class="package-info">
                                <h3>{{ tour_package.title }}</h3>
                                <p>{{ tour_package.description }}</p>
                                <!-- <span class="pull-left">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <span class="review-count"> - 100 reviews</span>
                                    </span> -->
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>