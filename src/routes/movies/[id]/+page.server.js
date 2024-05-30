// @ts-ignore
export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=dd0bd21ced2dd658d78f19de06d31ccf`
	);

	const movieDetail = await res.json();
	console.log(movieDetail);

	if (res.ok) {
		return {
			data: movieDetail
		};
	}
}
