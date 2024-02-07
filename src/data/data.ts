import { T_headerButtonData, T_navLinksData } from "@/types/types";

export const navLinksData: T_navLinksData = [
	{
		title: "About",
		href: "/about",
		extra: false,
	},
	{
		title: "Blog",
		href: "/blog",
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
		href: "/blog",
	},
	{
		title: "Explore",
		href: "/about",
	},
];
