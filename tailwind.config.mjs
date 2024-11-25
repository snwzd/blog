/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwind-scrollbar'),
		plugin(function ({ addBase, config }) {
			addBase({
				'h1': {
					fontSize: config('theme.fontSize.4xl'),
					fontWeight: '600',
					marginTop: config('theme.spacing.2'),
					marginBottom: config('theme.spacing.2'),
				},
				'h2': {
					fontSize: config('theme.fontSize.3xl'),
					fontWeight: '600',
					marginTop: config('theme.spacing.2'),
					marginBottom: config('theme.spacing.2'),
				},
				'h3': {
					fontSize: config('theme.fontSize.2xl'),
					fontWeight: '600',
					marginTop: config('theme.spacing.2'),
					marginBottom: config('theme.spacing.2'),
				},
				'pre': {
					marginTop: config('theme.spacing.2'),
					marginBottom: config('theme.spacing.2'),
					padding: config('theme.spacing.2'),
					borderRadius: config('theme.borderRadius.lg'),
				},
				'img': {
					marginTop: config('theme.spacing.2'),
					marginBottom: config('theme.spacing.2'),
					borderRadius: config('theme.borderRadius.lg'),
				},
			})
		})
	],
}