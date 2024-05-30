<script>
	export let movies;
</script>

<div class="flex flex-wrap justify-between space-x-1 w-full">
	{#each movies as movie}
		<div class="movie-card mb-12 hover:opacity-50 hover:scale-105 transition-all duration-150">
			<a href={'/movies/' + movie.id}>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt=""
					class="rounded-lg"
				/>
				<h1 class="text-xl font-medium">{movie.original_title}</h1>
				<p>{movie.release_date}</p>
			</a>
		</div>
	{/each}
</div>
