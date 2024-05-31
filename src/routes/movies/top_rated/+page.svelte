<script>
	import { back_url } from '$lib/store.js';
	import MovieCard from '$lib/movieCard.svelte';

	back_url.set('/movies/top_rated');
	export let data;
</script>

<!-- Navigation -->
<div class="page-name">
	<h1 class="">Top Rated Movies</h1>
</div>

<!-- Movies Cards Div -->
<div class="w-full h-full text-center pt-12 movies-div">
	<div class="flex justify-between pt-44">
		<MovieCard movies={data.data} />
	</div>
</div>
