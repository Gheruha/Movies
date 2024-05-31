import { VITE_KEY } from '$env/static/private';

// @ts-ignore
// Fetching popular movies with the api

export async function load({ fetch }) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${VITE_KEY}`);

	if (res.ok) {
		const data = await res.json();
		return {
			data: data.results
		};
	} else {
		window.alert('Error: There is a issue.');
	}
}
