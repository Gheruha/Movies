import { VITE_KEY } from '$env/static/private';

// @ts-ignore
// Fetching Actor Details

export async function load({ fetch, params }) {
	const actor = await fetch(
		`https://api.themoviedb.org/3/person/${params.actorID}?api_key=${VITE_KEY}`
	);

	console.log(params.actorID);

	const credits = await fetch(
		`https://api.themoviedb.org/3/person/${params.actorID}/movie_credits?api_key=${VITE_KEY}`
	);

	const actorDetails = await actor.json();
	const creditsDetails = await credits.json();

	return {
		data: actorDetails,
		credits: creditsDetails
	};
}
