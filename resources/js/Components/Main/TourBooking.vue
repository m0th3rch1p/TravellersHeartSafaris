<script setup>
import { onMounted } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';

import "@/vendors/main/js/bootstrap-datepicker.js";

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
            <div class="invalid-feedback" v-if="bookingForm.errors.phoneNumber">{{ bookingForm.errors.phoneNumber }}
            </div>
        </div>

        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                <input type="text" v-model="bookingForm.date" class="form-control date_pic" id="date_pic"
                    placeholder="10/16/2022" name="phone">
            </div>
            <div class="invalid-feedback" v-if="bookingForm.errors.date">{{ bookingForm.errors.date }}</div>
        </div>

        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-users"></i></span>
                <input type="number" v-model="bookingForm.noOfPeople" class="form-control"
                    placeholder="Number of People" min="1" name="name">
            </div>
            <div class="invalid-feedback" v-if="bookingForm.errors.noOfPeople">{{ bookingForm.errors.noOfPeople }}</div>
        </div>
        <div class="text-center">
            <input type="submit" id="submitBtn" name="submit" class="booking btn btn-primary" value="Book Now">
        </div>

    </form>
</template>
<style scoped>
@import "@/vendors/main/css/datepicker.css";

</style>