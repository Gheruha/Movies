import { VITE_KEY } from '$env/static/private';
// @ts-ignore
// Fetching images and videos with the api
export async function load({ fetch, params }) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${VITE_KEY}`);
	const video = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${VITE_KEY}`
	);
	const recommendations = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${VITE_KEY}`
	);

	const movieDetail = await res.json();
	const videoDetail = await video.json();
	const recommendationsDetail = await recommendations.json();

	if (res.ok) {
		return {
			data: movieDetail,
			video: videoDetail,
			recommendations: recommendationsDetail
		};
	}
}
