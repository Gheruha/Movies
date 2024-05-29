<script>
	export let movies;

	console.log(movies);

	for (let movie in movies) {
		console.log(movie);
	}
</script>

{#each movies as movie}
	<p>{movie.id}</p>
{/each}
