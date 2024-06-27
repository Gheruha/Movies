<script>
	// @ts-nocheck

	import { back_url } from '$lib/store.js';
	import MovieCard from '$lib/movieCard.svelte';

	back_url.set('/movies/upcoming');
	export let data;
</script>

<!-- Navigation -->
<div class="page-name">
	<h1 class="font-medium">Upcoming Movies</h1>
</div>

<!-- Movies Cards Div -->
<div class="w-full h-full text-center movies-div">
	<div class="flex justify-between pt-12">
		<MovieCard movies={data.data} />
	</div>
</div>
