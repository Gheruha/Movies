import { VITE_KEY } from '$env/static/private';

export async function load({ fetch, params }) {
	const video = await fetch(
		`https://api.themoviedb.org/3/movie/${params.videoID}/videos?api_key=${VITE_KEY}`
	);
	const backdrop = await fetch(
		`https://api.themoviedb.org/3/movie/${params.videoID}?api_key=${VITE_KEY}`
	);

	const videoDetail = await video.json();
	const backdropDetail = await backdrop.json();

	if (video.ok) {
		return {
			data: videoDetail,
			backdrop: backdropDetail
		};
	}
}
