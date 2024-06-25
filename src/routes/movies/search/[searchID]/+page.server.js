import { VITE_KEY } from '$env/static/private';

// @ts-ignore
// Fetching search movies

export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${VITE_KEY}&query=${params.searchID}`
	);

	if (res.ok) {
		const data = await res.json();

		return {
			data: data.results,
			searchID: params.searchID
		};
	} else {
		window.alert('Error: There is a issue.');
	}
}
