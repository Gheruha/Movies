<script>
	import { fly } from 'svelte/transition';
	import { back_url } from '$lib/store.js';
	import { fade } from 'svelte/transition';
	export let data;
	console.log(data);

	let scroll = 0;
</script>

<!-- Binding the scrollY value -->
<svelte:window bind:scrollY={scroll} />

<!-- Navigation -->
<div class="pt-8 nav flex pl-6 absolute">
	<a href={$back_url} class="z-50 text-white"
		><span class="material-symbols-outlined"> arrow_back_ios </span></a
	>
	<h1>Movie Details</h1>
</div>

<!-- Hero section -->
<section class="h-[100vh] w-full relative flex flex-col" transition:fade>
	<img
		src={`https://image.tmdb.org/t/p/original${data.data.backdrop_path}`}
		class="opacity-30 object-cover absolute z-10 w-full h-full"
		alt=""
	/>

	<!-- Title and overview-->
	<div
		in:fly={{ x: 100, duration: 500 }}
		class="flex flex-col items-center justify-center details-img-div absolute h-full"
	>
		<h1 class="text-6xl font-semibold font-sans text-white">{data.data.original_title}</h1>
		<p class="overflow-p text-white text-lg font-normal">{data.data.overview}</p>
	</div>

	<!-- Details Btn -->
	<div class="absolute flex items-end justify-center w-full h-full pb-16">
		<button class="z-50 transparent-button rounded-full"
			><span class="material-symbols-outlined p-2" style="font-size: 40px;">
				arrow_downward
			</span></button
		>
	</div>
</section>
<!-- Hero section -->

<!-- Details -->
<div class="about-movie" style:transform={`translate3d(0, ${scroll * 0.5}px , 0)`}>
	<!-- <VideoPlayer videos={data.video} /> -->
	<div class="relative w-full max-w-lg -z-0">
		<div class="blob bg-violet-500 w-96 h-96 -right-5"></div>
		<div class="blob bg-blue-300 w-96 h-96 -bottom-80 -left-30"></div>
	</div>
	<div class="z-50 w-4/5 h-96 bg-zinc-900 border-zinc-700 border rounded-lg opacity-80">
		<p>Hello</p>
	</div>
</div>
