<script>
	export let movies;
	export let movieId;
</script>

{#each movies as movie}
	<div class="w-1/6 mb-12">
		{#if movie.id === movieId}
			<a href={'/movies/' + movie.id}>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt=""
					class="rounded-lg"
				/>
				<h1 class="text-xl font-medium">{movie.original_title}</h1>
				<p>{movie.release_date}</p>
			</a>
		{/if}
	</div>
{/each}
