<script>
	import { goto } from '$app/navigation';
	import { back_url, temporary_url } from './store';
	export let movies;
	export let searchID;

	// @ts-ignore
	function truncateText(text, maxLength) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	}

	const playTrailer = () => {
		temporary_url.set($back_url);
		goto(`/movies/trailer/${movies[0].id}`);
	};
</script>

<div class="w-full">
	<!-- Genre Filter -->
	<div class="w-full flex pb-12"></div>
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
				<h1 class="title">{truncateText(movies[0].title, 30)}</h1>
				<div class="flex space-x-4 pb-4 pt-4">
					<p class="font-normal text-zinc-300">{movies[0].release_date.slice(0, 4)}</p>
					<p class="transparent-button font-normal pl-2 pr-2 rounded-lg">
						<span class="material-symbols-outlined pt-1 pr-1" style="font-size: 1rem"> star </span>
						{movies[0].vote_average.toFixed(1)}
					</p>
				</div>
				<p class="font-normal pb-12">{truncateText(movies[0].overview, 102)}</p>

				<!-- Action Buttons -->
				<div class="flex space-x-4">
					<button
						on:click={() => playTrailer()}
						class="flex bg-white text-black rounded-lg p-2 space-x-2 hover:bg-gray-200"
					>
						<span class="material-symbols-outlined"> play_arrow </span>
						<p class="pr-2 font-normal">Play Trailer</p></button
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
	<div class="flex flex-wrap justify-around space-x-1 w-full">
		{#if movies.length != 0}
			{#each movies as movie}
				{#if movie.backdrop_path != null && movie.poster_path != null}
					<div
						class="movie-card mb-12 hover:scale-105 hover:opacity-50 transition-all duration-150 text-left"
					>
						<a href={'/movies/' + movie.id}>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt=""
								class="rounded-lg poster"
							/>
							<h1 class="text-lg font-medium">{truncateText(movie.original_title, 20)}</h1>
							<p class="text-sm">{movie.release_date}</p>
						</a>
					</div>
				{/if}
			{/each}

			<!-- Handling errors-->
		{:else}
			<div class="relative w-full pt-32 max-w-lg -z-0">
				<div
					class="blob animate-blob animation-delay-4000 bg-blue-500 w-72 h-72 -left-4 animation-delay-4000"
				></div>
				<div class="blob animate-blob bg-blue-800 w-72 h-72 -right-4"></div>
				<div
					class="blob animate-blob animation-delay-2000 bg-blue-500 w-72 h-72 -bottom-80 left-20 animation-delay-2000"
				></div>

				<div class="absolute w-full flex flex-col items-center pt-16 space-y-4">
					<p class="text-xl font-semibold">
						Sorry, there is no movie called {searchID}
					</p>

					<a href={$back_url} class="transparent-button flex justify-center p-2 rounded-lg w-2/4">
						<button> Go Back </button>
					</a>
				</div>
			</div>
		{/if}
	</div>
	<!-- Showing the movies card-->
</div>
