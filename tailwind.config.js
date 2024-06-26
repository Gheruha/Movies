/* tailwind.config.css */
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				blob: 'blob 7s infinite'
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'scale(1)'
					},
					'33%': {
						transform: 'scale(1.1)'
					},
					'66%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				}
			}
		}
	},
	plugins: []
};
