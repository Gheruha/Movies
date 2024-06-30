<!-- Movie Details -->
<script>
	import { fly } from 'svelte/transition';
	import { back_url } from '$lib/store.js';
	import { fade } from 'svelte/transition';
	import Recommendations from '$lib/recommendations.svelte';
	import Actors from '$lib/actors.svelte';
	import VideoPlayer from '$lib/videoPlayer.svelte';
	export let data;

	let scroll = 0;
	let show_video = false;
</script>

<!-- Binding the scrollY value -->
<svelte:window bind:scrollY={scroll} />

<!-- Showing videos if the user wants -->
{#if show_video}
	<VideoPlayer videos={data.video} backdrop_path={data.data.backdrop_path} />
{/if}

<!-- Navigation -->
<div class="pt-8 nav flex pl-6 absolute">
	<a href={$back_url} class="z-50 text-white"
		><span class="material-symbols-outlined"> arrow_back_ios </span></a
	>
	<h1>Movie Details</h1>
</div>

<!-- Hero section -->
<section class="h-[100vh] w-full relative flex flex-col" transition:fade>
	<!-- Backdrop Image -->
	<img
		src={`https://image.tmdb.org/t/p/original${data.data.backdrop_path}`}
		class="opacity-20 object-cover absolute z-10 w-full h-full"
		alt=""
	/>

	<!-- Description -->
	<div
		in:fly={{ x: 100, duration: 500 }}
		class="flex items-center justify-center details-img-div absolute h-full"
	>
		<div class="flex">
			<!-- Poster Image -->
			<img
				src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}
				alt=""
				class="rounded-lg z-40 h-96"
			/>
			<!-- Poster Image -->
			<div class="flex flex-col pl-10">
				<h1 class="text-6xl font-semibold font-sans text-white">{data.data.original_title}</h1>

				<div class="flex space-x-2">
					{#each data.data.genres as genres}
						<p class="font-normal">{genres.name}</p>
					{/each}
				</div>
				<div class="flex space-x-2 pb-4 pt-4">
					<p class="font-normal text-zinc-300">{data.data.release_date.slice(0, 4)} •</p>
					<p class="font-normal text-zinc-300">{data.data.runtime}m •</p>
					<p class="transparent-button z-40 font-normal pl-2 pr-2 rounded-lg">
						<span class="material-symbols-outlined pt-1 pr-1" style="font-size: 1rem"> star </span>
						{data.data.vote_average.toFixed(1)}
					</p>
				</div>
				<div class="pt-4 z-40">
					<button
						on:click={() => (show_video = true)}
						class="flex transparent-button rounded-lg p-2 space-x-2"
					>
						<span class="material-symbols-outlined"> play_arrow </span>
						<p class="pr-2 font-normal">Trailer</p></button
					>
				</div>
				<div>
					<h1 class="text-2xl font-semibold">Overview</h1>
					<p class="text-md font-semibold w-4/5">{data.data.overview}</p>
				</div>
			</div>
		</div>
	</div>
	<!-- Description -->

	<!-- Details Btn -->
	<div class="absolute flex items-end justify-center w-full h-full pb-16">
		<button class="z-40 transparent-button rounded-full"
			><span class="material-symbols-outlined p-2" style="font-size: 40px;">
				arrow_downward
			</span></button
		>
	</div>
</section>
<!-- Hero section -->

<!-- Details -->
<div class="about-movie" style:transform={`translate3d(0, ${scroll * 0.5}px , 0)`}>
	<!-- Actors-->
	{#if data.actors.length != 0}
		<h1 class="text-2xl font-semibold pb-4 w-full text-left">Top Billed Cast</h1>
		<div class="relative w-full max-w-lg -z-0">
			<div class="blob bg-blue-200 w-96 h-96 -right-5"></div>
			<div class="blob bg-white w-96 h-96 -bottom-80 -left-30"></div>
		</div>
		<div class="z-50 flex w-full bg-zinc-900 border-zinc-800 border rounded-lg">
			<Actors actors={data.actors.cast} />
		</div>
	{/if}
	<!-- Actors-->

	<!-- Videos -->
	<div class="pt-12 z-50">
		<!-- <VideoPlayer videos={data.video} /> -->
	</div>
	<!-- Videos -->

	<!-- Recommendations -->
	{#if data.recommendations.results.length != 0}
		<h1 class="text-2xl font-semibold z-50 pt-12 pb-4 w-full text-left">You may also like</h1>
		<div class="z-50 flex w-full h-50 bg-zinc-900 border-zinc-800 border rounded-lg">
			<Recommendations movies={data.recommendations.results} />
		</div>
	{/if}
	<!-- Recommendations -->
</div>
<!-- Details -->
