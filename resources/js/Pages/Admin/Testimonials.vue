<script setup>
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { onMounted, ref } from 'vue';
import DangerButton from '@/Components/DangerButton.vue';

DataTable.use(DataTablesLib);

const props = defineProps({
    testimonials: Array
});

const update = ref(false);
const selectedTestimonial = ref(null);
const form = useForm({
    testimonial: '',
    author: ''
});

const storeTestimonial = () => {
    form.clearErrors();

    if(!form.testimonial || form.testimonial.trim() === "") {
        form.setError('testimonial', 'testimonial field is required');
    }
    
    if(!form.author || form.author.trim() === "") {
        form.setError('author', 'author field is required');
    }

    if(form.errors && Object.keys(form.errors).length) return;

    form.processing = true;
    if(update.value) {
        form.put(`/admin/testimonials/${selectedTestimonial.value.id}`, {
            onSuccess: () => {
                update.value = false;
                form.processing = false;
                form.reset();
            }
        });
    } else {
        form.post(`/admin/testimonials`, {
        onSuccess: () => {
            form.reset();
            form.processing = false;
        }
    });
    }
};

onMounted(() => {
    document.getElementById("dt").addEventListener('click', function (e) {
        if(e.target.nodeName !== 'BUTTON') return;

        const btn = e.target;
        const action = btn.getAttribute("data-type");
        const p_id = btn.getAttribute("data-id");
        if(action === 'del') {
            if(confirm("Are you sure you want to delete this testimonials?")) {
                btn.setAttribute("disabled", true);
                btn.innerText = "Deleting";
                form.delete('/admin/testimonials/' + p_id);
            }
        } else if (action === 'edit') {
            selectedTestimonial.value = props.testimonials.filter(({ id }) => p_id == id )[0];
            form.name = selectedTestimonial.value.name;
            form.author = selectedTestimonial.value.author;
            update.value = true;
        }
    });
});

</script>

<template>

    <Head title="Testimonials" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Testimonials</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <div><h2 class="font-semibold text-xl text-gray-800 leading-tight">Add Testimonial</h2></div>
                    <form @submit.prevent="storeTestimonial" class="mt-6 space-y-6">
                        <div>
                            <InputLabel for="testimonial" value="Testimonial" />
                            
                            <textarea class="form-control mt-1 block w-full" v-model="form.testimonial" required
                                autofocus autocomplete="testimonial" />
                            
                            <InputError class="mt-2" :message="form.errors.testimonial" />
                        </div>

                        <div>
                            <InputLabel for="author" value="Author" />
                        
                            <TextInput id="author" type="text" class="mt-1 block w-full" v-model="form.author" required
                                autofocus autocomplete="author" />

                            <InputError class="mt-2" :message="form.errors.author" />
                        </div>

                        <div class="flex items-center gap-4">
                            <PrimaryButton :disabled="form.processing">{{ update ? 'Update' : 'Save' }}</PrimaryButton>
                            <DangerButton v-show="update">Cancel</DangerButton>
                            <Transition enter-from-class="opacity-0" leave-to-class="opacity-0"
                                class="transition ease-in-out">
                                <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">{{  update ? 'Updated' : 'Saved'  }}</p>
                            </Transition>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="py-12 pt-4">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DataTable id="dt" :options="{responsive: true}" :data="testimonials" 
                    :columns="[{data: 'testimonial'}, {data: 'author'}, {data: 'created_at', render: (data) => new Date(data).toDateString()}, {data: null, render: (data) => {
                    return `<button data-type=edit data-id=${data.id} class='inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mr-3'>Edit</button> <button data-type=del data-id=${data.id} class='inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150'>Delete</button>`
                }}]" class="display table table-responsive">
                    <thead>
                        <tr>
                            <th>Testimonial</th>
                            <th>Author</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </DataTable>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style>
@import 'datatables.net-dt';
</style>