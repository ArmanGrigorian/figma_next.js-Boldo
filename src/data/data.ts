import { T_headerButtonData, T_linesData, T_navLinksData } from "@/types/types";

export const navLinksData: T_navLinksData = [
	{
		title: "Product",
		href: "/product",
		extra: false,
	},
	{
		title: "Services",
		href: "/services",
		extra: false,
	},
	{
		title: "About",
		href: "/about",
		extra: false,
	},
	{
		title: "Log In",
		href: "/login",
		extra: true,
	},
];

export const headerButtonsData: T_headerButtonData = [
	{
		title: "Buy template",
		href: "/product",
	},
	{
		title: "Explore",
		href: "/about",
	},
];
