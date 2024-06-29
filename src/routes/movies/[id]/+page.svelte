<!-- Movie Details -->
<script>
	import { fly } from 'svelte/transition';
	import { back_url } from '$lib/store.js';
	import { fade } from 'svelte/transition';
	import Recommendations from '$lib/recommendations.svelte';
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
		class="opacity-20 object-cover absolute z-10 w-full h-full"
		alt=""
	/>

	<!-- Title and overview-->
	<div
		in:fly={{ x: 100, duration: 500 }}
		class="flex items-center justify-center details-img-div absolute h-full"
	>
		<div class="flex">
			<img
				src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}
				alt=""
				class="rounded-lg z-50 h-96"
			/>
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
					<p class="transparent-button z-50 font-normal pl-2 pr-2 rounded-lg">
						<span class="material-symbols-outlined pt-1 pr-1" style="font-size: 1rem"> star </span>
						{data.data.vote_average.toFixed(1)}
					</p>
				</div>
				<div>
					<h1 class="text-2xl font-semibold">Overview</h1>
					<p class="text-md font-semibold w-4/5">{data.data.overview}</p>
				</div>
			</div>
		</div>
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

	<!-- Recommendations -->
	{#if data.recommendations.results.length != 0}
		<h1 class="text-4xl font-semibold z-50 pb-10 w-full text-left">You may also like:</h1>
		<div class="relative w-full max-w-lg -z-0">
			<div class="blob bg-violet-500 w-96 h-96 -right-5"></div>
			<div class="blob bg-blue-300 w-96 h-96 -bottom-80 -left-30"></div>
		</div>
		<div class="z-50 flex w-full h-96 bg-zinc-900 border-zinc-600 border rounded-lg">
			<Recommendations movies={data.recommendations.results} />
		</div>
	{/if}
	<!-- Recommendations -->
</div>

<!-- <div class="flex space-x-2 pt-10">
					{#each data.data.production_companies as production_companies}
						{#if production_companies.logo_path != null}
							<img
								src={`https://image.tmdb.org/t/p/w500${production_companies.logo_path}`}
								alt="logo"
								class="z-50 w-8"
							/>
						{/if}
					{/each}
</div> -->
