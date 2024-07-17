<script>
	import MovieCard from '$lib/movieCard.svelte';
	import { back_url } from '$lib/store';

	export let data;
	if (data.data.length != 0) {
		back_url.set(`/movies/search/${data.searchID}`);
	}
</script>

<div class="page-name">
	<h1 class="font-medium">{data.searchID} Movies</h1>
</div>

<!-- Movies Cards Div -->
<div class="w-full h-full text-center movies-div">
	<div class="flex justify-between pt-12">
		<MovieCard movies={data.data} searchID={data.searchID} />
	</div>
</div>
