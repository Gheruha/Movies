// @ts-ignore
export async function load({ fetch }) {
	const res = await fetch(
		'https://api.themoviedb.org/3/discover/movie?api_key=dd0bd21ced2dd658d78f19de06d31ccf'
	);

	const data = await res.json();

	if (res.ok) {
		return {
			data: data.results
		};
	}
}
