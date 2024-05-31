<script>
	export let videos;
	console.log(videos);
	let video_num = 0;
	let video_res_size = videos.results.length;
</script>

<div class="w-full flex justify-center items-center">
	{#if video_res_size > 0}
		<button
			on:click={() => (video_num -= 1)}
			class={video_num == 0 ? 'text-zinc-500 cursor-not-allowed' : ''}
			disabled={video_num == 0}
		>
			<span class="material-symbols-outlined pr-20"> arrow_back_ios </span>
		</button>
		{#if videos.results[video_num].site == 'YouTube'}
			<iframe
				class="iframe-video"
				src={`https://www.youtube.com/embed/${videos.results[video_num].key}`}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		{/if}
		<button
			on:click={() => (video_num += 1)}
			class={video_num == video_res_size - 1 ? 'text-zinc-500 cursor-not-allowed' : ''}
			disabled={video_num == video_res_size - 1}
		>
			<span class="material-symbols-outlined pl-20"> arrow_forward_ios </span>
		</button>
	{/if}
</div>
