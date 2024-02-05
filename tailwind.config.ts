import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Manrope: ["Manrope", "san-serif"],
				OpenSans: ["OpenSans", "san-serif"],
			},
			colors: {
				"custom-white": "#ffffff",
				"custom-black": " #000000",
				"custom-dark-blue": "#0a2640",
				"custom-light-blue": "#0dbbfc",
				"custom-grey-blue": "#8fb6d5",
				"custom-light-grey": "#777777",
				"custom-green": " #65e4a3",
				"custom-dark-grey": "#95abbc",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
