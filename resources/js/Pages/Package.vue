<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import TourBooking from '@/Components/Main/TourBooking.vue';
import TourDetails from '@/Components/Main/TourDetails.vue';
import RelatedPackages from '@/Components/Main/RelatedPackages.vue';

defineProps({
    tourPackage: Object,
    relatedPackages: Array
});
</script>

<template>
    <MainLayout>
        <section id="page-title" class="parallax" data-stellar-background-ratio="0.5"
            style="background-image: url(/main/img/single-tour/bg.jpg); background-position: 50% 50%;">
            <div class="title-info">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="page-title text-center">
                                <h1>{{ tourPackage.title }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end title-info-->
        </section>

        <section class="main-content">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-md-9">
                        <TourDetails :tour-package="tourPackage" />
                    </div>

                    <div class="col-xs-12 col-sm-4 col-md-3">
                        <div class="sidebar">
                            <div class="sidebar-item">
                                <h3>Tour Booking</h3>
                                <TourBooking />
                            </div><!--end sidebar-item-->        
                        </div><!--end sidebar-->
                    </div>

                </div>
            </div>
        </section>

        <RelatedPackages :related-packages="relatedPackages"/>
    </MainLayout>
</template>