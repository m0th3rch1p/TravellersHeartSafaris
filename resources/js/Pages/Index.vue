<script setup>
import { Link, useForm } from '@inertiajs/inertia-vue3';
import { onMounted, ref } from 'vue';

import { tns } from 'tiny-slider';

import MainLayout from '@/Layouts/MainLayout.vue';

defineProps({
    packages: Array,
    excursions: Array,
    links: Array
});

const messageSent = ref(false);
const contactForm = useForm({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: ''
});

const sendMessage = () => { 
    contactForm.clearErrors();
    if(!contactForm.first_name || contactForm.first_name.trim() == "") contactForm.setError('first_name', 'First name is required');
    if(!contactForm.last_name || contactForm.last_name.trim() == "") contactForm.setError('last_name', 'Last name is required');
    if(!contactForm.email || contactForm.email.trim() == "") contactForm.setError('email', 'Email is required');
    if(!contactForm.subject || contactForm.subject.trim() == "") contactForm.setError('subject', 'Subject is required');
    if(!contactForm.message || contactForm.message.trim() == "") contactForm.setError('message', 'Message is required');

    if(contactForm.errors && Object.keys(contactForm.errors).length) return;

    const btn = document.getElementById('submitBtn');
    btn.value = "Submitting";
    btn.setAttribute('disabled', true);

    contactForm.post('/contact', {
        onSuccess: () => {
            contactForm.reset();
            messageSent.value = true;
        },
        onFinish: () => {
            btn.value = "Submit";
            btn.removeAttribute("disabled");
        }
    });
}


onMounted(() => {
    //www.
    let googleScript = document.createElement('script');
    googleScript.setAttribute('src', "https://instagram.com/embed.js");
    document.head.appendChild(googleScript); 

    tns({
        nav: false,
        container: '.gallery-item',
        items: 3,
        autoplay: true,
        responsive: {
            350: {
                "items": 1,
                "controls": false,
                "edgePadding": 30
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

</script>

<template>
    <MainLayout>
        <!-- Banner Section -->
        <div id="banner" class="carousel slide carousel-fade" data-ride="carousel" data-pause="false">

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item" style="background-image:url(/main/img/banner/1.jpg);">
                    <div class="caption-info">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-md-8 col-md-offset-2">
                                    <div class="caption-info-inner text-center">
                                        <h1 class="animated fadeInDown">Welcome to Traveller's Heart Safaris</h1>
                                        <p class="animated fadeInUp">We are a proficient team with zeal interest in
                                            tours
                                            and travel at heart. We boast about our good knowledge and experience of all
                                            leading destinations at first hand and better understanding of the ground
                                            with
                                            supportive agents to provide excellent customer services worth your budget.
                                            You
                                            are guaranteed with confidence and peace of mind during your safari with us
                                            on
                                            your side for we are there before you go, while you are traveling and upon
                                            your
                                            return.We are committed to create heavenly experiences with our endless
                                            incomparable choices in adventure; The wild bush experience, high altitude
                                            adventure, beach safaris, historical and cultural tours. We are the hub of
                                            all
                                            great adventures.</p>
                                        <a href="#packages" class="animated fadeInUp btn btn-primary page-scroll">See
                                            Packages</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item" style="background-image:url(/main/img/banner/2.jpg);">
                    <div class="caption-info">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-md-8 col-md-offset-2">
                                    <div class="caption-info-inner text-center">
                                        <h1 class="animated zoomIn">Mission</h1>
                                        <p class="animated zoomIn">To inspire people to step out their box, create
                                            heavenly
                                            experiences for them and better their traveling moments and wellness.</p>
                                        <a href="#contact-us"
                                            class="animated zoomIn btn btn-primary page-scroll">Contact
                                            Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item active" style="background-image:url(/main/img/banner/3.jpg);">
                    <div class="caption-info">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-md-8 col-md-offset-2">
                                    <div class="caption-info-inner text-center">
                                        <h1 class="animated fadeInLeft">Vision</h1>
                                        <p class="animated fadeInLeft">To provide hassle free travel arrangements in
                                            regards
                                            to each person’s preference.</p>
                                        <a href="#hot-deals"
                                            class="animated fadeInLeft btn btn-primary page-scroll">Find a
                                            tour</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div><!--end carousel-inner-->


            <!-- Controls -->
            <a class="control left" href="#banner" data-slide="prev"><i class="fa fa-long-arrow-left"></i></a>
            <a class="right control" href="#banner" data-slide="next"><i class="fa fa-long-arrow-right"></i></a>
        </div>

        <!-- Services Section -->
        <section id="services">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="section-title text-center">
                            <h1>Our Services</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- <div class="col-xs-6 col-md-4">
            <div class="service-list text-center wow fadeInUp">
                <i class="fa fa-train"></i>
                <h3>Rail Booking</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typeseatting industry. Lorem Ipsum has been the industry's</p>
            </div>
        </div> -->

                    <div class="col-xs-6 col-md-4">
                        <div class="service-list text-center wow fadeInUp"
                            style="visibility: visible; animation-name: fadeInUp;">
                            <i class="fa fa-bed"></i>
                            <h3>Hotel Booking</h3>
                            <p>Accommodation &amp; Conference rooms</p>
                        </div>
                    </div>
                    <!-- 				
        <div class="col-xs-6 col-md-4">
            <div class="service-list text-center wow fadeInUp">
                <i class="fa fa-plane"></i>
                <h3>Flight Booking</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typeseatting industry. Lorem Ipsum has been the industry's</p>
            </div>
        </div> -->

                    <div class="col-xs-6 col-md-4">
                        <div class="service-list text-center wow fadeInUp"
                            style="visibility: visible; animation-name: fadeInUp;">
                            <i class="fa fa-ticket"></i>
                            <h3>Ticket Booking</h3>
                            <p>Both Local and International Tickets</p>
                        </div>
                    </div>

                    <!-- <div class="col-xs-6 col-md-4">
            <div class="service-list text-center wow fadeInUp">
                <i class="fa fa-ship"></i>
                <h3>Cruises Booking</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typeseatting industry. Lorem Ipsum has been the industry's</p>
            </div>
        </div> -->

                    <div class="col-xs-6 col-md-4">
                        <div class="service-list text-center wow fadeInUp"
                            style="visibility: visible; animation-name: fadeInUp;">
                            <i class="fa fa-road"></i>
                            <h3>Amazing tours</h3>
                            <p>FIT travel, Group travel &amp; Family holidays, and Honey moon packages</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Packages Section -->
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
                                    <img :src="`/storage/${tour_package.feature_image}`" alt="">
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

        <!-- Hot Deals -->
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
                        <img :src="`/storage/${excursion.feature_image}`" alt="">
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

        <!-- Gallery Section -->
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
                                <a style="color: #ffffff;" href="https://www.instagram.com/travellersheart_safaris/" target="_blank">Visit Our Page</a>
                            </li>
                        </ul><!-- @end #filter-list -->
                    </div>
                </div>
            </div>

            <ul class="gallery-item">
                <li v-for="link in links" id="gallery" class="gallery tours hotels mix_all" style="display: inline-block;  opacity: 1;">
                    <div class="thumb" v-html="link.link">
                        
                    </div><!--end post thumb-->
                </li>
            </ul>

        </section>

        <!-- Contact Section -->
        <section id="contact-us" class="parallax" data-stellar-background-ratio="0.5"
            style="background-image: url(/main/img/bg/contact-bg.jpg); background-position: 50% -749.617px;">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="section-title text-center">
                            <h1>Get in touch</h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="contact-left">
                            <ul>
                                <!-- <li>
                        <div class="icon">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <div class="contact-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </li> -->

                                <li>
                                    <div class="icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="contact-info">
                                        <p>Mobile: (+254)724 507 189</p>
                                    </div>
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <div class="contact-info">
                                        <p><a
                                                href="mailto:info@@travellersheartsafaris.com">info@travellersheartsafaris.com</a><br>
                                            <a
                                                href="mailto:safaris@travellersheartsafaris.com">safaris@travellersheartsafaris.com</a>
                                        </p>
                                    </div>
                                </li>

                                <!-- <li>
                        <div class="icon">
                            <i class="fa fa-clock-o"></i>
                        </div>
                        <div class="contact-info">
                            <p>Monday-Friday: 9am - 5pm <br/> Saturday: 10am - 2pm<br/> Sunday - Closed </p>
                        </div>
                    </li> -->

                            </ul>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-8">
                        <div class="contact-right">
                            <form @submit.prevent="sendMessage">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="contactForm.first_name" name="fname" class="form-control"
                                                placeholder="First Name">
                                            <div class="invalid-feedback" v-if="contactForm.errors.first_name">{{ contactForm.errors.first_name }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="contactForm.last_name" name="lname" class="form-control"
                                                placeholder="Last Name">
                                            <div class="invalid-feedback" v-if="contactForm.errors.last_name">{{ contactForm.errors.last_name }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="contactForm.email" name="email" class="form-control" placeholder="Email Address">
                                    <div class="invalid-feedback" v-if="contactForm.errors.email">{{ contactForm.errors.email }}</div>
                                </div>

                                <div class="form-group">
                                    <input type="text" v-model="contactForm.subject" name="subject" class="form-control" placeholder="Subject">
                                    <div class="invalid-feedback" v-if="contactForm.errors.subject">{{ contactForm.errors.subject }}</div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="6" cols="20"
                                        placeholder="Write Something" v-model="contactForm.message"></textarea>
                                    <div class="invalid-feedback" v-if="contactForm.errors.message">{{ contactForm.errors.message }}</div>
                                </div>
                                <input type="submit" id="submitBtn" class="btn btn-primary" name="submit" value="Submit">
                                <div v-if="messageSent" class="alert alert-success alert-dismissible fade show" role="alert">
                                  <strong>Message Sent Succefully!</strong> You will receive a reply from our support staff as soon as possible.
                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </MainLayout>
</template>

<style scoped>
/* .gallery {
    max-height: 609px;
} */
.invalid-feedback {
    color: red;
}

iframe {
    max-height: 609px;
}
</style>