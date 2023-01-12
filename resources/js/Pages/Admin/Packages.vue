<script setup>
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net-bs5';
import 'datatables.net-responsive-dt';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

import { Head, Link } from '@inertiajs/inertia-vue3';
import { onMounted } from 'vue';



DataTable.use(DataTablesLib);

const props = defineProps({
    packages: Array
});

onMounted(() => {
    document.getElementById("dt").addEventListener('click', function (e) {
        if(e.target.nodeName !== 'BUTTON') return;

        const btn = e.target;
        const action = btn.getAttribute("data-type");
        const p_id = btn.getAttribute("data-id");
        if(action === 'del') {
            if(confirm("Are you sure you want to delete this package?")) {
                btn.setAttribute("disabled", true);
                btn.innerText = "Deleting";
                fetch(`/admin/packages/${p_id}`, {
                    method: 'post',
                    headers: {
                        'X-XSRF-TOKEN': decodeURIComponent(document.cookie.split(';').filter(cookie => cookie.startsWith('XSRF-TOKEN'))[0].split("=")[1])
                    },
                    body: JSON.stringify({_method: "delete"}),
                })
                .then(res => res.json())
                .then(data => props.packages.filter(id => id !== p_id))
                .catch(err => console.log(err));
            }
        }
    });
});

</script>

<template>

    <Head title="Tour Packages" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Tour Packages</h2>
        </template>

        <div class="py-12 pt-4">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <Link href="/admin/packages/create" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mb-3">Add Package</Link>
                    <DataTable id="dt" :options="{responsive: true}" :data="packages" 
                    :columns="[
                        {data: 'title'}, 
                        {data: 'category', render: (data) => data.name}, 
                        {data: 'description'}, 
                        {data: 'feature_image', render: (data) => `<img src='/storage/${data}' class='image image-fluid'/>`}, 
                        {data: 'created_at', render: (data) => new Date(data).toDateString()},
                        {data: 'updated_at', render: (data) => new Date(data).toDateString()}, 
                        {data: null, render: (data) => {
                            return `<a href='/admin/packages/edit/${data.id}' class='inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 mr-3'>Edit</a> <button data-type=del data-id=${data.id} class='inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150'>Delete</button>`
                        }}
                    ]" 
                    class="display table table-responsive">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category Name</th>
                            <th>Description</th>
                            <th>Feature Image</th>
                            <th>Created At</th>
                            <th>Updated At</th>
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
@import 'bootstrap';
@import 'datatables.net-bs5';
@import 'datatables.net-responsive-dt';
</style>