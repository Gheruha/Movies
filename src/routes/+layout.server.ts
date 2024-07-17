export const prerender = true;
import { VITE_KEY } from '$env/static/private';

// @ts-ignore
export async function load({ url, fetch }) {
	const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${VITE_KEY}`);
	const genresDetail = await genres.json();

	console.log(genresDetail);
	return {
		url: url.pathname
	};
}
