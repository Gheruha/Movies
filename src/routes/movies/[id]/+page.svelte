<!-- Movie Details -->
<script>
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { back_url, temporary_url } from '$lib/store.js';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Recommendations from '$lib/recommendations.svelte';
	import Actors from '$lib/actors.svelte';
	import VideoPlayer from '$lib/videoPlayer.svelte';
	export let data;

	// Local
	let show_more = false;
	let scroll = 0;
	let show_video = false;
	let innerWidth = 0;

	const ScrollToSection = () => {
		const section = document.getElementById('content');
		if (section) {
			section.scrollIntoView({
				behavior: 'smooth'
			});
		}
	};

	const playTrailer = () => {
		temporary_url.set(`/movies/${data.data.id}`);
		goto(`/movies/trailer/${data.video.id}`);
	};

	//@ts-ignore
	function truncateText(text, maxLength) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	}

	onMount(() => {
		function onResize() {
			innerWidth = window.innerWidth;
		}

		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	});
</script>

<!-- Binding the scrollY value -->
<svelte:window bind:scrollY={scroll} bind:innerWidth />

<!-- Showing videos if the user wants -->
{#if show_video}
	<VideoPlayer videos={data.video} backdrop_path={data.data.backdrop_path} />
{/if}

<!-- More of the overview -->
{#if show_more}
	<div class="transparent-div flex flex-col" transition:fade>
		<div class="show_more-div" style="height: 580px;">
			<h1 class="pt-4 text-2xl font-semibold">Overview</h1>
			<p class="pt-2 text-sm font-medium">{data.data.overview}</p>
		</div>
		<button on:click={() => (show_more = false)} class="menu_links"
			><span class="material-symbols-outlined p-2" style="font-size: 40px;">close</span></button
		>
	</div>
{/if}
<!-- More of the overview -->

<!-- Navigation -->
<div class="pt-8 nav flex pl-6 absolute">
	<a href={$back_url} class="z-50 text-white"
		><span class="material-symbols-outlined"> arrow_back_ios </span></a
	>
</div>

<!-- Hero section -->
<section
	class="h-[100vh] w-full relative flex flex-col {show_more ? 'filter blur' : ''}"
	transition:fade
	style:transform={`translate3d(0, ${scroll * -2}px , 0)`}
>
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
			{#if innerWidth > 800}
				<img
					src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`}
					alt=""
					class="rounded-lg z-40 h-96"
				/>
			{/if}
			<!-- Poster Image -->

			<!-- Details -->
			<div class="details">
				<p class="font-normal">{innerWidth}</p>
				<h1 class="title">{data.data.original_title}</h1>

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
					<!-- Trailer -->
					{#if data.video.results.length > 0}
						<button
							on:click={() => playTrailer()}
							class="flex transparent-button rounded-lg p-2 space-x-2"
						>
							<span class="material-symbols-outlined"> play_arrow </span>
							<p class="pr-2 font-normal">Trailer</p></button
						>
					{/if}
					<!-- Trailer -->
				</div>
				<div>
					<h1 class="text-2xl font-semibold">Overview</h1>
					<p class="text-md font-semibold w-4/5 {innerWidth < 1000 ? 'w-full' : ''}">
						{truncateText(data.data.overview, 300)}
					</p>
				</div>

				<div class="z-40 pt-4">
					{#if data.data.overview.length > 300}
						<button on:click={() => (show_more = true)} class="transparent-button p-2 rounded-lg"
							>Read More</button
						>
					{/if}
				</div>
			</div>
			<!-- Details -->
		</div>
	</div>
	<!-- Description -->

	<!-- Details Btn -->
	<div class="absolute flex items-end justify-center w-full h-full pb-16">
		<button on:click={() => ScrollToSection()} class="z-40 transparent-button rounded-full"
			><span class="material-symbols-outlined p-2" style="font-size: 40px;">
				arrow_downward
			</span></button
		>
	</div>
</section>
<!-- Hero section -->

<!-- Details -->
<div class="about-movie" id="content">
	{#if data.actors.length != 0}
		<h1 class="text-2xl font-semibold pb-4 w-full text-left">Top Billed Cast</h1>
		<div class="other-details">
			<!-- Actors -->
			<div class="actors-div">
				<Actors actors={data.actors.cast} back_url={`/movies/${data.data.id}`} />
			</div>
			<!-- Actors -->

			<!-- Other details -->
			<div class="flex flex-col w-full space-y-8 rounded-lg pl-4 pr-4">
				{#if innerWidth > 800}
					<div class="relative w-full max-w-lg -z-0">
						<div
							class="blob animate-blob animation-delay-4000 bg-blue-600 w-96 h-96 -right-5"
						></div>
						<div class="blob animate-blob bg-blue-400 w-96 h-96 -bottom-80 -left-30"></div>
					</div>
				{:else}
					<div class="relative w-full max-w-lg -z-0">
						<div class="blob animate-blob animation-delay-4000 bg-blue-600 w-80 h-80 top-12"></div>
					</div>
				{/if}

				<div class="basic-info">
					<div>
						<h1 class="font-semibold text-xl">Status</h1>
						<p class="font-normal">{data.data.status}</p>
					</div>
					<div>
						<h1 class="font-semibold text-xl">Original Language</h1>
						<p class="font-normal">{data.data.spoken_languages[0].english_name}</p>
					</div>
					<div>
						<h1 class="font-semibold text-xl">Budget</h1>
						<p class="font-normal">
							{data.data.budget
								? `$${data.data.budget.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
								: '-'}
						</p>
					</div>
					<div>
						<h1 class="font-semibold text-xl">Revenue</h1>
						<p class="font-normal">
							{data.data.revenue
								? `$${data.data.revenue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
								: '-'}
						</p>
					</div>
				</div>
			</div>
			<!-- Other details -->
		</div>
	{/if}

	<!-- Recommendations -->
	{#if data.recommendations.results.length != 0}
		<h1 class="text-2xl font-semibold z-50 pt-12 pb-4 w-full text-left">You may also like</h1>
		<div class="z-50 flex w-full h-50 bg-zinc-950 border-zinc-800 border rounded-lg">
			<Recommendations movies={data.recommendations.results} />
		</div>
	{/if}
	<!-- Recommendations -->
</div>
<!-- Details -->
