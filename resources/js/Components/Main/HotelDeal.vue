<script setup>
import { Link } from '@inertiajs/inertia-vue3';


defineProps({
    excursions: Array
});

</script>

<template>
    <section id="hot-deals">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="section-title text-center">
                            <h1>Excursions and Getaways</h1>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="tour-list">
                <li v-for="excursion in excursions" :key="excursion.slug">
                    <div class="tour-thumb">
                        <img class="lazy" src="/main/img/loader.gif" :data-src="`/storage/${excursion.feature_image}`" alt="">
                        <div class="overlay">
                            <div class="ovelay-inner text-center">
                                <h2>{{ excursion.title }}</h2>
                                <p><em>{{ excursion.description }}</em></p>
                                <Link :href="`/package/${excursion.slug}`" class="btn btn-primary">More...</Link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul><!--end tour-list-->

        </section>
</template>