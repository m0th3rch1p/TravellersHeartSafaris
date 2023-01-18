<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import loader from '@/vendors/main/img/loader.gif';

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
                                <img class="lazy" :src="loader" width="500" height="300" :data-src="`/storage/${tour_package.feature_image}`" :alt="tour_package.title">
                                <div class="duration">
                                    {{ tour_package.days }} days<br>{{ tour_package.nights }} nights
                                </div>
                            </div>
                            <div class="package-info">
                                <h3>{{ tour_package.title }}</h3>
                                <p>{{ tour_package.description }}</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>