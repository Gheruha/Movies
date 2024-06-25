<script>
	import { fly } from 'svelte/transition';
	import { back_url } from '$lib/store.js';
	import { fade } from 'svelte/transition';
	import VideoPlayer from '$lib/videoPlayer.svelte';
	export let data;
	export let video;

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
		style:transform={`translate3d(0, ${scroll * -2}px, 0)`}
	/>

	<div
		in:fly={{ x: 100, duration: 500 }}
		class="flex flex-col items-center justify-center details-img-div absolute h-full"
	>
		<h1 class="text-6xl font-medium font-sans text-white">{data.data.original_title}</h1>
		<p class="overflow-p text-white text-lg">{data.data.overview}</p>
	</div>
</section>
<!-- Hero section -->

<!-- Video Player-->
<div class="about-movie" style:transform={`translate3d(0, ${scroll * -0.5}px , 0)`}>
	<VideoPlayer videos={data.video} />
</div>
