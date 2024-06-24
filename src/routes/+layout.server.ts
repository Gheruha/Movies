export const prerender = true;
import { VITE_KEY } from "$env/static/private";

// @ts-ignore
export async function load({ url , fetch  }) {

	return {
		url: url.pathname
	};
}
