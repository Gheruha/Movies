<script>
	import image1 from '$lib/images/artistic-minimalism-black-and-white-minimalist-wallpaper-preview.jpg';
	import image2 from '$lib/images/minimalist+living+room.jpg';
	import image3 from '$lib/images/IN_41020001_41020002_002.jpg';
	import image4 from '$lib/images/wallpapersden.com_simple-sunset-hd-digital_3840x2160.jpg';

	const images = [image1, image2, image4, image3];
</script>

<div class="pt-4">
	<a href="/"><span class="material-symbols-outlined"> arrow_back_ios </span></a>
</div>

<div class="w-full h-full text-center pt-12">
	<h1 class="text-4xl">Learning Dynamic Routes</h1>

	<div class="flex justify-between pt-44">
		{#each images as image}
			<img src={image} alt="" width="300" />
		{/each}
	</div>
</div>
