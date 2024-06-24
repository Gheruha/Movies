<script>
	import MovieCard from '$lib/movieCard.svelte';
	import { back_url } from '$lib/store';

	export let data;
	export let searchID;
	back_url.set(`search/${data.searchID}`);
</script>

<div class="page-name">
	<h1 class="">Search Movies</h1>
</div>

<!-- Movies Cards Div -->
<div class="w-full h-full text-center pt-12 movies-div">
	<div class="flex justify-between pt-44">
		<MovieCard movies={data.data} />
	</div>
</div>
