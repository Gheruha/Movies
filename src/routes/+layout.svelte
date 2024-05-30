<script>
	import '../app.css';
	import { fly } from 'svelte/transition';
	import Theme from '$lib/theme.svelte';
	export let data;
	// @ts-ignore
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

{#key data.url}
	<div in:fly={{ x: 100, duration: 250 }} class="w-full h-full">
		<div class="opacity-0 hover:opacity-100 fixed">
			<Theme />
		</div>
		<slot />
	</div>
{/key}
