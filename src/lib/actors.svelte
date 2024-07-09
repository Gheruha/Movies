<script>
	import { goto } from '$app/navigation';
	export let actors;

	// @ts-ignore
	function truncateText(text, maxLength) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	}
</script>

<div class="recommendations-container">
	{#each actors as actor}
		{#if actor.profile_path != null}
			<button
				on:click={() => goto(`actor/${actor.id}`)}
				class="recommendation-card rounded-lg  hover:grayscale transition-all duration-150"
			>
				<img
					src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
					alt=""
					class="poster rounded-lg"
				/>
				<h1 class="font-semibold pt-2">{truncateText(actor.name, 15)}</h1>
				<p class="font-normal">{truncateText(actor.character, 15)}</p>
			</button>
		{/if}
	{/each}
</div>
