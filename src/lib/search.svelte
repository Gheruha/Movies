<script>
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	let show_search_input = false;
	let search_input = '';

	const close_search = () => {
		show_search_input = false;
		search_input = '';
	};

	const goToSearchedMovie = () => {
		goto(`search/${search_input}`);
	};
</script>

<!-- Search -->
{#if show_search_input}
	<div
		style="background-color: rgba(0, 0, 0, 0.5);"
		class="flex rounded-full border border-zinc-700"
		in:fly={{ x: 100, duration: 150 }}
	>
		<form class="pt-1 pl-2" on:submit|preventDefault={goToSearchedMovie}>
			<input
				autofocus
				type="text"
				class="rounded-full w-80 text-zinc-300 p-2 focus:outline-none"
				style="background-color: rgba(0, 0, 0, 0)"
				placeholder="Search movie"
				bind:value={search_input}
				on:blur={() => close_search()}
			/>
		</form>
	</div>
{/if}
<div
	style="background-color: rgba(0, 0, 0, 0.5);"
	class="flex rounded-full {show_search_input == true ? 'hidden' : ''} "
>
	<button
		class="material-symbols-outlined p-3"
		on:click={() => (show_search_input = !show_search_input)}
		>Search
	</button>
</div>
