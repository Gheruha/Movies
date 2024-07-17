<script>
	import VideoPlayer from '$lib/videoPlayer.svelte';
	import { temporary_url } from '$lib/store.js';
	export let data;
	console.log($temporary_url);
</script>

<!-- Navigation -->
<div class="pt-8 nav flex pl-6 absolute z-50">
	<a href={$temporary_url} class="z-50 text-white"
		><span class="material-symbols-outlined"> arrow_back_ios </span></a
	>
</div>

<VideoPlayer videos={data.data} backdrop_path={data.backdrop.backdrop_path} />
