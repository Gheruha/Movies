/* tailwind.config.css */
/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = ['./src/**/*.{html,js,svelte,ts}'];
export const theme = {
	extend: {
		animation: {
			blob: 'blob 7s infinite'
		},
		keyframes: {
			blob: {
				'0%': {
					transform: 'translate(0px, 0px) scale(1)'
				},
				'33%': {
					transform: 'translate(10px, -20px) scale(1.1)'
				},
				'66%': {
					transform: 'translate(-10px, 5px) scale(0.9)'
				},
				'100%': {
					transform: 'translate(0px, 0px) scale(1)'
				}
			}
		}
	}
};
export const plugins = [];
