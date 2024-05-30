<script>
	export let movies;

	console.log(movies);
</script>

<div class="flex flex-wrap justify-between space-x-1 w-full">
	{#each movies as movie}
		<div class="w-1/6">
			<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" class="rounded-lg" />
			<h1 class="text-xl font-medium">{movie.original_title}</h1>
			<p>{movie.release_date}</p>
		</div>
	{/each}
</div>
