<script>
	import MovieCard from '$lib/movieCard.svelte';
	import { back_url } from '$lib/store';

	export let data;
	if (data.data.length != 0) {
		back_url.set(`search/${data.searchID}`);
	}
</script>

<div class="page-name">
	<h1 class="">{data.searchID} Movies</h1>
</div>

<!-- Movies Cards Div -->
<div class="w-full h-full text-center pt-12 movies-div">
	<div class="flex justify-between pt-44">
		<MovieCard movies={data.data} searchID={data.searchID} />
	</div>
</div>
