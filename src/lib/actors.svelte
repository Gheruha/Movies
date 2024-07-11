<script>
	import { goto } from '$app/navigation';
	import { temporary_url } from './store';
	export let actors;
	export let back_url;

	// @ts-ignore
	const truncateText = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	};

	// @ts-ignore
	const seeActor = (actorID) => {
		$temporary_url = back_url;
		goto(`actor/${actorID}`);
	};
</script>

<div class="recommendations-container">
	{#each actors as actor}
		{#if actor.profile_path != null}
			<button
				on:click={() => seeActor(actor.id)}
				class="recommendation-card rounded-lg hover:scale-105 hover:opacity-50 transition-all duration-150"
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
