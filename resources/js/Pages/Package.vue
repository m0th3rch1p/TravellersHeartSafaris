<script setup>
import { onMounted } from 'vue';
import { Link, useForm } from '@inertiajs/inertia-vue3';

import MainLayout from '@/Layouts/MainLayout.vue';

defineProps({
    tourPackage: Object,
    relatedPackages: Array
});

const bookingForm = useForm({
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
    noOfPeople: 1
});

const makeBooking = () => {
    bookingForm.clearErrors();
    if(!bookingForm.name || bookingForm.name.trim() == "") bookingForm.setError('name', 'name field is required');
    if(!bookingForm.email || bookingForm.email.trim() == "") bookingForm.setError('email', 'email field is required');
    if(!bookingForm.phoneNumber || bookingForm.phoneNumber.trim() == "") bookingForm.setError('phoneNumber', 'phone number is required');
    if(!bookingForm.date || bookingForm.date.trim() == "") bookingForm.setError('date', 'date field is required');
    if(!bookingForm.noOfPeople || parseInt(bookingForm.noOfPeople) == NaN) bookingForm.setError('noOfPeople', 'Please specify no of slots to book');

    if(bookingForm.errors && Object.keys(bookingForm.errors).length) return;

    const btn = document.getElementById('submitBtn');
    btn.value = "Booking....";
    btn.setAttribute('disabled', true);
    bookingForm.post('/book', {
        onSuccess: () => {
            bookingForm.reset();
        },
        onFinish: () => {
            btn.value = "Book Now";
            btn.removeAttribute("disabled");
        }
    });
};

onMounted(() => {
    //===================== Datepicker ================
	$( "#date_pic" ).datepicker({
		todayBtn: "linked",
		keyboardNavigation: false,
		forceParse: false,
		calendarWeeks: true,
		autoclose: true,
		format: 'mm/dd/yyyy', 
	}).on("changeDate", function (e) {
        bookingForm.date = e.date.toDateString();
    });
		
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
                        <div class="content-block">
                            <div class="single_post">
                                <div class="post_thumb">
                                    <img :src="`/storage/${tourPackage.feature_image}`" alt="">
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

                                <div class="post_desc" v-html="tourPackage.post">
                                    
                                </div><!--end post desc-->

                                <!-- <div class="post_bottom">
								<ul>
									<li class="like">
										<a href="#">
											<i class="fa fa-commenting-o"></i>
											<span>12</span>
										</a>
									</li>
									 									
									<li class="share">
										<a href="#">
											<i class="fa fa-share-alt"></i>
											<span>12</span>
										</a>
									</li> -->

                                <!-- <li class="favorite">
										<a href="#">
											<i class="fa fa-heart"></i>
											<span>12</span>
										</a>
									</li>
									
									
								</ul>
							</div>end post bottom -->

                            </div>

                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-4 col-md-3">
                        <div class="sidebar">
                            <div class="sidebar-item">
                                <h3>Tour Booking</h3>
                                <form @submit.prevent="makeBooking">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                            <input type="text" v-model="bookingForm.name" class="form-control" placeholder="Enter Your Name"
                                                name="name">
                                        </div>
                                        <div class="invalid-feedback" v-if="bookingForm.errors.name">{{ bookingForm.errors.name }}</div>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-envelope-o"></i></span>
                                            <input type="text" v-model="bookingForm.email" class="form-control" placeholder="Email Address"
                                                name="email">
                                        </div>
                                        <div class="invalid-feedback" v-if="bookingForm.errors.email">{{ bookingForm.errors.email }}</div>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-phone"></i></span>
                                            <input type="text" v-model="bookingForm.phoneNumber" class="form-control" placeholder="Phone Number"
                                                name="phone">
                                        </div>
                                        <div class="invalid-feedback" v-if="bookingForm.errors.phoneNumber">{{ bookingForm.errors.phoneNumber }}</div>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                                            <input type="text" v-model="bookingForm.date" class="form-control date_pic" id="date_pic" placeholder="10/16/2022"
                                                name="phone">
                                        </div>
                                        <div class="invalid-feedback" v-if="bookingForm.errors.date">{{ bookingForm.errors.date }}</div>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-users"></i></span>
                                            <input type="number" v-model="bookingForm.noOfPeople" class="form-control" placeholder="Number of People"
                                                min="1" name="name">
                                        </div>
                                        <div class="invalid-feedback" v-if="bookingForm.errors.noOfPeople">{{ bookingForm.errors.noOfPeople }}</div>
                                    </div>
                                    <div class="text-center">
                                        <input type="submit" id="submitBtn" name="submit" class="booking btn btn-primary"
                                            value="Book Now">
                                    </div>

                                </form>
                            </div><!--end sidebar-item-->

                            <!-- <div class="sidebar-item">
							<h3>#Hashtags</h3>
							<ul class="tag-list">
								<li><a href="#">#Travel</a></li>
								<li><a href="#">#Tour</a></li>
								<li><a href="#">#Portfolio</a></li>
								<li><a href="#">#Photography</a></li>
								<li><a href="#">#Wedding</a></li>
								<li><a href="#">#Agency</a></li>
								<li><a href="#">#Single</a></li>
							</ul>
						</div>end sidebar-item		 -->

                        </div><!--end sidebar-->
                    </div>

                </div>
            </div>
        </section>

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
                                <img :src="`/storage/${tour_package.feature_image}`" alt="">
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
    </MainLayout>
</template>