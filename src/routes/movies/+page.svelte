<script>
	import MovieCard from '$lib/movieCard.svelte';
	export let data;
</script>

<div class="pt-4 pl-20 flex">
	<a href="/"><span class="material-symbols-outlined"> arrow_back_ios </span></a>
	<h1 class="">Popular Movies</h1>
</div>

<div class="w-full h-full text-center pt-12 pr-20 pl-20">
	<div class="flex justify-between pt-44">
		<MovieCard movies={data.data} />
	</div>
</div>
