import { writable } from 'svelte/store';

export let back_url = writable('/movies/popular');
export let temporary_url = writable('/movies/popular');
