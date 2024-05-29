<script>
	import MovieCard from '$lib/movieCard.svelte';
	export let data;
	console.log(data);
</script>

<div class="pt-4">
	<a href="/"><span class="material-symbols-outlined"> arrow_back_ios </span></a>
</div>

<div class="w-full h-full text-center pt-12">
	<h1 class="text-4xl">Discover Movies</h1>

	<div class="flex justify-between pt-44">
		<MovieCard movies={data.data} />
	</div>
</div>
