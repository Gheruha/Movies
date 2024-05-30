<script>
	export let data;
	console.log(data);
</script>

<img src={`https://image.tmdb.org/t/p/original${data.data.backdrop_path}`} alt="" />
