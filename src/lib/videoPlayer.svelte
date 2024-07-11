<script>
	import { fade } from 'svelte/transition';
	export let videos;
	export let backdrop_path;

	let video_num = 0;
	let video_res_size = videos.results.length;
</script>

<div class="center-div z-10" transition:fade>
	{#if video_res_size > 0}
		<section class="h-[100vh] w-full relative flex flex-col">
			<!-- Backdrop Image -->
			<img
				src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
				class="opacity-100 object-cover absolute w-full h-full filter blur-lg"
				alt=""
			/>
			<div class="flex items-center justify-center details-img-div absolute h-full">
				<div class="pr-20">
					<button
						on:click={() => (video_num -= 1)}
						class="transparent-button rounded-full {video_num == 0 ? 'cursor-not-allowed' : ''}"
						disabled={video_num == 0}
					>
						<span class="material-symbols-outlined p-3"> arrow_back </span>
					</button>
				</div>
				{#if videos.results[video_num].site == 'YouTube'}
					<iframe
						class="iframe-video z-50"
						src={`https://www.youtube.com/embed/${videos.results[video_num].key}?autoplay=1`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				{/if}
				<div class="pl-20">
					<button
						on:click={() => (video_num += 1)}
						class="transparent-button rounded-full {video_num == video_res_size - 1
							? 'cursor-not-allowed'
							: ''}"
						disabled={video_num == video_res_size - 1}
					>
						<span class="material-symbols-outlined p-3"> arrow_forward </span>
					</button>
				</div>
			</div>
		</section>
	{/if}
</div>
