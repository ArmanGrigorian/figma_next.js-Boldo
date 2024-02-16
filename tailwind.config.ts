import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "0 2px 4px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
			},
			fontFamily: {
				Manrope: ["var(--font-manrope)"],
				OpenSans: ["var(--font-open-sans)"],
			},
			colors: {
				"custom-white": "#ffffff",
				"custom-black": " #000000",
				"custom-dark-blue": "#0a2640",
				"custom-light-blue": "#0dbbfc",
				"custom-grey-blue": "#8fb6d5",
				"custom-light-grey": "#777777",
				"custom-dark-grey": "#95abbc",
				"custom-grey": "#364d62",
				"custom-green": "#65e4a3",
				"custom-dark-green": "#009D10",
				"custom-orange": "#ECAA00",
				"custom-red": "#FC5B00",
			},
			backgroundImage: {
				man: "url('/images/man.png')",
				woman: "url('/images/woman.png')",
				buildings: "url('/images/buildingsBig.png')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
