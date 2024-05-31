import { key } from '$env/static/private';
// @ts-ignore
// Fetching popular movies with the api
export async function load({ fetch }) {
	const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`);

	const data = await res.json();

	if (res.ok) {
		return {
			data: data.results
		};
	}
}
