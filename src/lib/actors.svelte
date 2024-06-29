<script>
	export let actors;
</script>

<div class="recommendations-container">
	{#each actors as actor}
		{#if actor.profile_path != null}
			<div class="recommendation-card hover:opacity-80 hover:scale-105 transition-all duration-150">
				<img
					src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
					alt=""
					class="poster rounded-lg"
				/>
			</div>
		{/if}
	{/each}
</div>
