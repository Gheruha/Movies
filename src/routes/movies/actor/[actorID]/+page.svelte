<script>
	import Recommendations from '$lib/recommendations.svelte';

	export let data;
	let gender = '';
	console.log(data);
	console.log(data.credits);

	const whatGender = (/** @type {number} */ nr) => {
		if (nr == 1) {
			gender = 'Female';
		} else {
			gender = 'Male';
		}

		return gender;
	};
</script>

<div class="w-full h-full flex p-32 space-x-8">
	<!-- Profile Picture-->
	<div class="w-1/5">
		<img
			src={`https://image.tmdb.org/t/p/w500${data.data.profile_path}`}
			alt=""
			class="poster rounded-lg z-50"
		/>
		<div class="relative w-full max-w-lg z-0 opacity-30">
			<div class="blob animate-blob animation-delay-4000 bg-blue-700 w-96 h-96 -right-5"></div>
			<div class="blob animate-blob bg-blue-800 w-96 h-96 -bottom-80 -left-30"></div>
		</div>

		<!-- Personal Info-->
		<h1 class="pt-4 text-2xl font-semibold">Personal Info</h1>
		<h1 class="pt-4 text-lg font-semibold">Known For</h1>
		<p class="font-normal">{data.data.known_for_department}</p>

		<h1 class="pt-4 text-lg font-semibold">Gender</h1>
		<p class="font-normal">{whatGender(data.data.gender)}</p>

        <h1 class="pt-4 text-lg font-semibold">Birthday</h1>
		<p class="font-normal">{data.data.birthday}</p>

        <h1 class="pt-4 text-lg font-semibold">Place of Birth</h1>
		<p class="font-normal">{data.data.place_of_birth}</p>
	</div>
	<!-- Profile Picture-->

	<!-- Details -->
	<div class="w-4/5 z-40">
		<!-- Name & Biography-->
		<h1 class="text-6xl font-semibold">{data.data.name}</h1>
		<h1 class="pt-4 text-2xl font-semibold">Biography</h1>
		<p class="pt-2 text-md font-medium">{data.data.biography}</p>
		<!-- Credits -->
		<h1 class="pt-20 text-2xl font-semibold">Known For</h1>
		<Recommendations movies={data.credits.cast} />
	</div>
	<!-- Details -->
</div>
