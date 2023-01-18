<script setup>
import { onMounted } from 'vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

defineProps({
    links: Array
});

const breakPoints = {
    // 700px and up
    700: {
        itemsToShow: 2.5,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 3.5,
        snapAlign: 'start',
    },
};

onMounted(() => {
    //www.
    let googleScript = document.createElement('script');
    googleScript.setAttribute('src', "https://instagram.com/embed.js");
    document.head.appendChild(googleScript);
});

</script>

<template>
<section id="gallery">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="section-title text-center">
                            <h1>Gallery</h1>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12">
                        <ul id="filter-list">
                            <li class="filter active" data-filter="all">
                                <a style="color: #ffffff;" href="https://www.instagram.com/travellersheart_safaris/"
                                    target="_blank">Visit Our Page</a>
                            </li>
                        </ul><!-- @end #filter-list -->
                    </div>
                </div>
            </div>
            <Carousel :autoplay="2000" :items-to-show="1" :wrap-around="true" :breakpoints="breakPoints">
                <Slide v-for="link in links" :key="link">
                    <div class="carousel__item">
                        <div class="thumb" v-html="link.link"></div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </section>    
</template>