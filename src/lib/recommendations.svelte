<script>
	export let movies;
</script>

<div class="recommendations-container pr-4 pt-4 pb-4">
	{#each movies as movie}
		{#if movie.backdrop_path != null && movie.poster_path != null}
			<div class="recommendation-card hover:scale-105 hover:opacity-50 transition-all duration-150">
				<a href={'/movies/' + movie.id}>
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt=""
						class="poster rounded-lg"
					/>
				</a>
			</div>
		{/if}
	{/each}
</div>
