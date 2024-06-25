<script>
	import { back_url } from './store';
	import { fly } from 'svelte/transition';
	export let movies;
	export let searchID;
</script>

<div class="flex flex-wrap justify-around space-x-1 w-full">
	{#if movies.length != 0}
		{#each movies as movie}
			{#if movie.backdrop_path != null}
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
			{/if}
		{/each}
	{:else}
		<div class="flex flex-col pt-16 justify-center space-y-4">
			<p>
				Sorry, there is no movie called {searchID}
			</p>

			<a
				href={$back_url}
				class="p-2 border rounded-lg border-zinc-600 hover:bg-white hover:border-zinc-300 hover:text-black transition-all duration-200 hover:scale-105"
			>
				<button> Go Back </button>
			</a>
		</div>
	{/if}
</div>
