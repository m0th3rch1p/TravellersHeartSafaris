<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Head, useForm } from '@inertiajs/inertia-vue3';

const props = defineProps({
    package: Object,
    categories: Array
});

const form = useForm({
    title: props.package.title,
    description: props.package.description,
    package_post: props.package.post,
    feature_image: null,
    category_id: props.package.category_id,
    days: props.package.days,
    nights: props.package.nights
});

const storePackage = () => {
    form.clearErrors();

    if(!form.title || form.title.trim() === "") form.setError('title', 'title field is required');
    if(!form.description || form.description.trim() === "") form.setError('description', 'description field is required');
    if(!form.package_post || form.package_post.trim() === "") form.setError('post', 'post field is required');
    if(!form.category_id || parseInt(form.category_id) === NaN) form.setError('category_id', 'category field is required');
    if(parseInt(form.days) === NaN) form.setError('days', 'days field is required and should be a number');
    if(parseInt(form.nights) === NaN) form.setError('nights', 'nights field is required and should be a number');

    if(form.errors && Object.keys(form.errors).length) return;

    form.processing = true;
    form.transform((data) => ({...data, _method: "PUT"})).post(`/admin/packages/${props.package.id}`, {
        onSuccess: () => {
            form.reset();
            form.processing = false;
        }
    });
};
</script>

<template>

    <Head title="Categories" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Create Tour Package</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <form @submit.prevent="storePackage" class="mt-6 space-y-6">
                        <div>
                            <InputLabel for="title" value="Title" />

                            <TextInput id="title" type="text" class="mt-1 block w-full" v-model="form.title" required
                                autofocus autocomplete="title" />

                            <InputError class="mt-2" :message="form.errors.title" />
                        </div>

                        <div>
                            <InputLabel for="description" value="Description" />
                            <textarea id="description" type="text" class="mt-1 block w-full" v-model="form.description" required
                                autofocus autocomplete="description" />

                            <InputError class="mt-2" :message="form.errors.description" />
                        </div>

                        <div>
                            <InputLabel for="post" value="Post" />

                            <ckeditor :editor="ClassicEditor" v-model="form.package_post" />

                            <InputError class="mt-2" :message="form.errors.post" />
                        </div>

                        <div>
                            <InputLabel for="days" value="Days" />
                            <TextInput id="title" type="number" class="mt-1 block w-full" v-model="form.days" required
                                autofocus autocomplete="days" />

                            <InputError class="mt-2" :message="form.errors.days" />
                        </div>

                        <div>
                            <InputLabel for="nights" value="Nights" />
                            <TextInput id="title" type="number" class="mt-1 block w-full" v-model="form.nights" required
                                autofocus autocomplete="nights" />

                            <InputError class="mt-2" :message="form.errors.nights" />
                        </div>

                        <div>
                            <InputLabel for="category" value="Category" />

                            <select v-model="form.category_id" id="">
                                <option value="">Select Category</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select>
                            <InputError class="mt-2" :message="form.errors.category_id" />
                        </div>

                        <div>
                            <InputLabel for="feature image" value="Feature Image" />

                            <input type="file" @change.prevent="(e) => form.feature_image = e.target.files.length ? e.target.files[0] : null">
                            <InputError class="mt-2" :message="form.errors.feature_image" />
                        </div>

                        <div class="flex items-center gap-4">
                            <PrimaryButton :disabled="form.processing">Save</PrimaryButton>
                            <Transition enter-from-class="opacity-0" leave-to-class="opacity-0"
                                class="transition ease-in-out">
                                <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved</p>
                            </Transition>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style>
select {
  appearance: none;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  color: #424242;
  cursor: pointer;
  font-size: 14px;
  padding: 10px;
  width: 100%;
}

select::before {
    content: '\25BC';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

select::after {
    border: solid transparent;
    border-width: 6px;
    border-top-color: #bdbdbd;
    content: '';
    display: block;
    height: 0;
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
}

select::focus {
    border-color: #00bcd4;
    outline: none;
}

.ck-editor .ck-editor__main .ck-content {
    min-height: 200px;
}
</style>
