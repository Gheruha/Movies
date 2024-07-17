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
	},
	plugins: []
};
