import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				'abecin-primary': '#4A1861',
				'abecin-secondary': '#670396'
			},
			keyframes: {
				grow: {
					'0%': { width: '0' },
					'100%': { width: '4rem' }
				},
				slideDown: {
					'0%': { opacity: '0.2', transform: 'translateY(-60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				grow: 'grow 1.5s ease-out forwards',
				slideDown: 'slideDown 1.5s ease-out forwards'
			}
		}
	},
	plugins: []
} satisfies Config
