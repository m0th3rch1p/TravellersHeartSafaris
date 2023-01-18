<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import Banner from '@/Components/Main/Banner.vue';
import Service from '@/Components/Main/Service.vue';
import Package from '@/Components/Main/Package.vue';
import HotDeal from '@/Components/Main/HotelDeal.vue';
import Gallery from '@/Components/Main/Gallery.vue';
import Testimonials from '@/Components/Main/Testimonials.vue'
import Contact from '@/Components/Main/Contact.vue';

defineProps({
    packages: Array,
    excursions: Array,
    links: Array,
    testimonials: Array
});
</script>

<template>
    <MainLayout>
        <!-- Banner Section -->
        <Banner />

        <!-- Services Section -->
        <Service />

        <!-- Packages Section -->
        <Package v-if="packages.length" :packages="packages"/>

        <!-- Hot Deals -->
        <HotDeal v-if="excursions.length" :excursions="excursions"/>

        <!-- Gallery Section -->
        <Gallery v-if="links.length" :links="links"/>

        <!-- Testimonials -->
        <Testimonials v-if="testimonials.length" :testimonials="testimonials" />

        <!-- Contact Section -->
        <Contact />
    </MainLayout>
</template>

<style>
.carousel__item {
    width: 100%;
}

.invalid-feedback {
    color: red;
}

.thumb {
    min-height: 700px;
}

iframe {
    max-height: none;
}
</style>