<script>
	// imports
	import '../app.css';
	import { fly } from 'svelte/transition';
	import Search from '$lib/search.svelte';
	// local data
	export let data;
	let show_menu = false;
</script>

<!-- Icons -->
<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<!-- Pages & Animation -->
{#key data.url}
	<div in:fly={{ x: 100, duration: 250 }} class="w-full h-full">
		<!-- Menu -->
		<div class="flex w-full justify-end pr-8 pt-6 fixed z-50 space-x-4">
			<!-- Search -->
			{#if data.url != '/'}
				<Search />
			{/if}
			<!-- Search -->

			<!-- Menu button -->
			<button
				on:click={() => (show_menu = true)}
				class="transparent-button"
				><span class="material-symbols-outlined p-3">menu</span></button
			>
		</div>

		{#if show_menu}
			<div
				class="transparent-div"
				in:fly={{ y: -1200, duration: 500 }}
				out:fly={{ y: -1200, duration: 500 }}
			>
				<!-- Links -->
				<div class="space-y-4 flex flex-col text-center">
					<a href="/movies/popular" class="menu_links" on:click={() => (show_menu = false)}
						>Popular Movies</a
					>
					<a href="/movies/top_rated" class="menu_links" on:click={() => (show_menu = false)}
						>Top Rated Movies</a
					>
					<a href="/movies/upcoming" class="menu_links" on:click={() => (show_menu = false)}
						>Upcoming Movies</a
					>
					<button on:click={() => (show_menu = false)} class="menu_links"
						><span class="material-symbols-outlined p-2">close</span></button
					>
				</div>
			</div>
		{/if}
		<slot />
	</div>
{/key}
<!-- Pages & Animation -->
