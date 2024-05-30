<script>
	export let data;
	console.log(data);
	import { fly } from 'svelte/transition';

	let scroll = 0;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="pt-8 nav flex absolute">
	<a href="/movies" class="z-50"><span class="material-symbols-outlined"> arrow_back_ios </span></a>
	<h1 class="">Movie Details</h1>
</div>
<section class="h-[100vh] w-full shrink-0 relative flex flex-col">
	<img
		src={`https://image.tmdb.org/t/p/original${data.data.backdrop_path}`}
		class="opacity-30 object-cover absolute z-10 w-full h-full box"
		alt=""
		style:transform={`translate3d(0, ${scroll * -2}px, 0)`}
	/>

	<div
		in:fly={{ x: 100, duration: 500 }}
		class="flex flex-col items-center justify-center details-img-div absolute h-full"
		style:transform={`translate3d(0, ${scroll * -1}px, 0)`}
	>
		<h1 class="text-6xl font-medium font-sans text-white">{data.data.original_title}</h1>
		<p class="overflow-p text-white text-lg">{data.data.overview}</p>
	</div>
</section>

<div style:transform={`translate3d(0, ${scroll * -0.5}px , 0)`}>
	<p>
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
		laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
		beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
		odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
		Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
		sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
		voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
		laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
		in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
		quo voluptas nulla pariatur?"
	</p>
</div>

<style>
</style>
