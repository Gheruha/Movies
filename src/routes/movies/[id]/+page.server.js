import { key } from '$env/static/private';
// @ts-ignore
// Fetching images and videos with the api
export async function load({ fetch, params }) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`);
	const video = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=dd0bd21ced2dd658d78f19de06d31ccf`
	);

	const movieDetail = await res.json();
	const videoDetail = await video.json();

	if (res.ok) {
		return {
			data: movieDetail,
			video: videoDetail
		};
	}
}
