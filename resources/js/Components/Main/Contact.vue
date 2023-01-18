<script setup>
import {useForm } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';


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
    if (!contactForm.first_name || contactForm.first_name.trim() == "") contactForm.setError('first_name', 'First name is required');
    if (!contactForm.last_name || contactForm.last_name.trim() == "") contactForm.setError('last_name', 'Last name is required');
    if (!contactForm.email || contactForm.email.trim() == "") contactForm.setError('email', 'Email is required');
    if (!contactForm.subject || contactForm.subject.trim() == "") contactForm.setError('subject', 'Subject is required');
    if (!contactForm.message || contactForm.message.trim() == "") contactForm.setError('message', 'Message is required');

    if (contactForm.errors && Object.keys(contactForm.errors).length) return;

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
</script>

<template>
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
                                            <input type="text" v-model="contactForm.first_name" name="fname"
                                                class="form-control" placeholder="First Name">
                                            <div class="invalid-feedback" v-if="contactForm.errors.first_name">{{
                                                contactForm.errors.first_name
                                            }}</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="contactForm.last_name" name="lname"
                                                class="form-control" placeholder="Last Name">
                                            <div class="invalid-feedback" v-if="contactForm.errors.last_name">{{
                                                contactForm.errors.last_name
                                            }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="contactForm.email" name="email" class="form-control"
                                        placeholder="Email Address">
                                    <div class="invalid-feedback" v-if="contactForm.errors.email">{{
                                        contactForm.errors.email
                                    }}</div>
                                </div>

                                <div class="form-group">
                                    <input type="text" v-model="contactForm.subject" name="subject" class="form-control"
                                        placeholder="Subject">
                                    <div class="invalid-feedback" v-if="contactForm.errors.subject">{{
                                        contactForm.errors.subject
                                    }}</div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="6" cols="20" placeholder="Write Something"
                                        v-model="contactForm.message"></textarea>
                                    <div class="invalid-feedback" v-if="contactForm.errors.message">{{
                                        contactForm.errors.message
                                    }}</div>
                                </div>
                                <input type="submit" id="submitBtn" class="btn btn-primary" name="submit"
                                    value="Submit">
                                <div v-if="messageSent" class="alert alert-success alert-dismissible fade show"
                                    role="alert">
                                    <strong>Message Sent Succefully!</strong> You will receive a reply from our support
                                    staff as soon as possible.
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
</template>