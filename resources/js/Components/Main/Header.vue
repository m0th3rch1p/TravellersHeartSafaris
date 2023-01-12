<script setup>
import { Link } from '@inertiajs/inertia-vue3';

</script>

<template>
    <nav class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="navbar-header page-scroll">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<Link class="navbar-brand page-scroll" href="/"><img src="@/vendors/main/img/logo.png" alt="Logo"></Link>
					</div>

					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="navbar">
						<ul v-if="$page.url.startsWith('/package')" class="nav navbar-nav navbar-right">
							<li class="active">
								<a class="page-scroll" href="/#page-top">Home</a>
							</li>
							<li>
								<a class="page-scroll" href="/#services">Services</a>
							</li>
							<li>
								<a class="page-scroll" href="/#packages">Packages</a>
							</li>
							<li>
								<a class="page-scroll" href="/#hot-deals">Hot Deals</a>
							</li>

							<li>
								<a class="page-scroll" href="/#gallery">Gallery</a>
							</li>
							<li>
								<a class="page-scroll" href="/#blog">Blog</a>
							</li>
							<!-- <li>
								<a class="page-scroll" href="#testimonials">Testimonials</a>
							</li> -->
							<li class="">
								<a class="page-scroll" href="#contact-us">Contact Us</a>
							</li>
						</ul>
						<ul v-else class="nav navbar-nav navbar-right">
							<li class="active">
								<a class="page-scroll" href="#page-top">Home</a>
							</li>
							<li>
								<a class="page-scroll" href="#services">Services</a>
							</li>
							<li>
								<a class="page-scroll" href="#packages">Packages</a>
							</li>
							<li>
								<a class="page-scroll" href="#hot-deals">Hot Deals</a>
							</li>

							<li>
								<a class="page-scroll" href="#gallery">Gallery</a>
							</li>
							<li>
								<a class="page-scroll" href="#blog">Blog</a>
							</li>
							<!-- <li>
								<a class="page-scroll" href="#testimonials">Testimonials</a>
							</li> -->
							<li class="">
								<a class="page-scroll" href="#contact-us">Contact Us</a>
							</li>
						</ul>
					</div>
					<!-- /.navbar-collapse -->
				</div>
			</div>
			
		</div>
		<!-- /.container -->
	</nav>
</template>

<style>
.collapse {
    visibility: visible !important;
}
</style>