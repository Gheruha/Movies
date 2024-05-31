<script>
	import heroSection from '$lib/images/heroSection.mov';
</script>

<!-- Hero Section -->
<section class="h-[100vh] w-full shrink-0 flex flex-col items-center justify-center relative">
	<video
		class="absolute w-full h-full object-cover -z-10"
		muted
		autoplay
		loop
		playsinline
		disablepictureinpicture
	>
		<source src={heroSection} />
	</video>
	<h1 class=" text-6xl font-medium text-white">Best movies in one place.</h1>
	<br />
	<a href="/movies" class="text-white font-sans p-4 rounded-md bg-zinc-800 hover:bg-zinc-700"
		>Get Started</a
	>
</section>
<!-- Hero Section -->
