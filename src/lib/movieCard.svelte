<script>
	// @ts-nocheck

	import { back_url } from './store';
	export let movies;
	export let searchID;

	function truncateText(text, maxLength) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	}
</script>

<div class="w-full">
	<!-- Showing the Header Movie-->
	{#if movies[0] && movies[0].backdrop_path != null}
		<section class="pb-12 relative flex flex-col">
			<img
				src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`}
				class="opacity-40 object-cover w-full rounded-xl"
				style="height: 492px;"
				alt="Movie Img"
			/>
			<div class="first-movie-section">
				<h1 class="font-semibold text-6xl">{truncateText(movies[0].title, 30)}</h1>
				<p class="font-normal pb-12">{truncateText(movies[0].overview, 292)}</p>

				<!-- Action Buttons -->
				<div class="flex space-x-4">
					<button class="flex bg-white text-black rounded-lg p-2 space-x-2 hover:bg-gray-200">
						<span class="material-symbols-outlined"> play_arrow </span>
						<p class="pr-2 font-normal">Play Movie</p></button
					>
					<a href={'/movies/' + movies[0].id}>
						<button class="transparent-button rounded-lg p-2 space-x-2">
							<span class="material-symbols-outlined"> info </span>
							<p class="pr-2 font-normal">More Information</p></button
						>
					</a>
				</div>
				<!-- Action Buttons -->
			</div>
		</section>
	{/if}
	<!-- Showing the Header Movie-->

	<!-- Showing the movies card-->
	{#if movies.length != 0}
		<div class="flex flex-wrap justify-around space-x-1 w-full">
			{#each movies as movie}
				{#if movie.backdrop_path != null}
					<div
						class="movie-card mb-12 hover:opacity-50 hover:scale-105 transition-all duration-150"
					>
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
		</div>

		<!-- Handling errors-->
	{:else}
		<div class="relative w-full justify-center max-w-lg -z-0">
			<div class="blob bg-blue-500 w-72 h-72 -left-4"></div>
			<div class="blob bg-blue-900 w-72 h-72 -right-4"></div>
			<div class="blob bg-purple-500 w-72 h-72 -bottom-80 left-20"></div>
		</div>
		<div class="absolute pt-16 flex flex-col space-y-4">
			<p class="text-xl font-semibold">
				Sorry, there is no movie called {searchID}
			</p>

			<a href={$back_url} class="transparent-button flex justify-center p-2 rounded-lg">
				<button> Go Back </button>
			</a>
		</div>
	{/if}
	<!-- Showing the movies card-->
</div>
