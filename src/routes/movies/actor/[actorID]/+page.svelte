<script>
	import Recommendations from '$lib/recommendations.svelte';
	import { temporary_url } from '$lib/store';
	import { fade } from 'svelte/transition';
	export let data;

	let gender = '';
	let show_more = false;
	const whatGender = (/** @type {number} */ nr) => {
		if (nr == 1) {
			gender = 'Female';
		} else {
			gender = 'Male';
		}

		return gender;
	};

	//@ts-ignore
	function truncateText(text, maxLength) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	}
</script>

<!-- Navigation -->
<div class="pt-8 nav flex pl-6 absolute">
	<a href={$temporary_url} class="z-50 text-white"
		><span class="material-symbols-outlined"> arrow_back_ios </span></a
	>
</div>

{#if show_more}
	<div class="transparent-div flex flex-col" transition:fade>
		<div
			class="border w-2/4 bg-zinc-950 p-8 border-zinc-800 rounded-lg overflow-y-auto"
			style="height: 580px;"
		>
			{#if data.data.biography != ''}
				<h1 class="pt-4 text-2xl font-semibold">Biography</h1>
				<p class="pt-2 text-sm font-medium">{data.data.biography}</p>
			{/if}
		</div>
		<button on:click={() => (show_more = false)} class="menu_links"
			><span class="material-symbols-outlined p-2" style="font-size: 40px;">close</span></button
		>
	</div>
{/if}
<div class="w-full h-full flex space-x-8 p-20 {show_more ? 'filter blur' : ''}">
	<!-- Profile Picture-->
	<div
		class="border w-2/5 bg-zinc-950 p-8 border-zinc-800 rounded-lg bg-gradient-to-r from-zinc-900 to-black"
	>
		<img
			src={`https://image.tmdb.org/t/p/w500${data.data.profile_path}`}
			alt=""
			class="poster rounded-lg z-50"
		/>
		<div class="relative w-full max-w-lg z-0 opacity-20">
			<div class="blob animate-blob animation-delay-4000 bg-blue-700 w-96 h-96 -right-5"></div>
			<div class="blob animate-blob bg-blue-800 w-96 h-96 -bottom-80 -left-30"></div>
		</div>

		<!-- Personal Info-->
		<h1 class="pt-4 text-2xl font-semibold">Personal Info</h1>
		<h1 class="pt-4 text-lg font-semibold">Known For</h1>
		<p class="font-normal">{data.data.known_for_department}</p>

		<h1 class="pt-4 text-lg font-semibold">Gender</h1>
		<p class="font-normal">{whatGender(data.data.gender)}</p>

		<h1 class="pt-4 text-lg font-semibold">Birthday</h1>
		<p class="font-normal">{data.data.birthday}</p>

		<h1 class="pt-4 text-lg font-semibold">Place of Birth</h1>
		<p class="font-normal">{data.data.place_of_birth}</p>
	</div>
	<!-- Profile Picture-->

	<!-- Details -->
	<div class="z-40 w-3/4 space-y-10">
		<!-- Name & Biography-->
		<div
			class="border w-full bg-zinc-950 p-8 border-zinc-800 rounded-lg bg-gradient-to-r from-black to-zinc-900"
		>
			<h1 class="text-6xl font-semibold">{data.data.name}</h1>
			{#if data.data.biography != ''}
				<h1 class="pt-4 text-2xl font-semibold">Biography</h1>
				<p class="pt-2 text-md font-medium">{truncateText(data.data.biography, 1000)}</p>
				{#if data.data.biography.length > 1000}
					<button on:click={() => (show_more = true)} class="text-blue-500 hover:text-blue-400"
						>Read More</button
					>
				{/if}
			{/if}
		</div>
		<!-- Credits -->
		<div
			class="border w-full bg-zinc-950 p-8 border-zinc-800 rounded-lg bg-gradient-to-r from-black to-zinc-900"
		>
			<h1 class="text-2xl font-semibold">Known For</h1>
			<Recommendations movies={data.credits.cast} />
		</div>
	</div>
	<!-- Details -->
</div>
