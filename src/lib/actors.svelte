<script>
	import { goto } from '$app/navigation';
	export let actors;
</script>

<div class="recommendations-container">
	{#each actors as actor}
		{#if actor.profile_path != null}
			<button
				on:click={() => goto(`actor/${actor.id}`)}
				class="recommendation-card bg-zinc-950 border-zinc-800 border rounded-lg hover:opacity-80 hover:scale-105 transition-all duration-150"
			>
				<img
					src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
					alt=""
					class="poster rounded-lg"
				/>
				<h1 class="font-semibold pt-2">{actor.name}</h1>
				<p class="font-normal">{actor.character}</p>
			</button>
		{/if}
	{/each}
</div>
