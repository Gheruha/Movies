<script>
	// @ts-nocheck

	import { back_url } from '$lib/store.js';
	import MovieCard from '$lib/movieCard.svelte';
	import { fade } from 'svelte/transition';

	back_url.set('/movies/popular');

	export let data;
</script>

<!-- Navigation -->
<div class="page-name">
	<h1 class="font-medium">Popular Movies</h1>
</div>

<!-- Movies Cards Div -->
<div class="w-full h-full text-center movies-div">
	<div class="pt-12">
		<MovieCard movies={data.data} />
	</div>
</div>
