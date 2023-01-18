<script setup>
import loader from '@/vendors/main/img/loader.gif';

defineProps({
    tourPackage: Object
});
</script>

<template>
    <div class="content-block">
        <div class="single_post">
            <div class="post_thumb">
                <img class="lazy" :src="loader" :data-src="`/storage/${tourPackage.feature_image}`" alt="">
            </div><!--end post thumb-->
            <div class="meta">
                <span class="tour-duration"><a href="#">{{ tourPackage.days }} Days / {{
                    tourPackage.nights
                }} Nights</a></span>

                <span class="date"><a href="#">{{
                    new Date(tourPackage.created_at).toDateString()
                }}</a></span>
            </div><!--end meta-->

            <h2>{{ tourPackage.title }}</h2>

            <div class="post_desc" v-html="tourPackage.post"></div><!--end post desc-->
        </div>
    </div>
</template>