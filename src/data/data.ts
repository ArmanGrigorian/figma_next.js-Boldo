import { T_headerButtonData, T_navLinksData, T_ourServices } from "@/types/types";

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

export const ourServicesData: T_ourServices = [
	{
		id: "1",
		imgSrc: "/images/working.png",
		imgWidth: 300,
		imgHeight: 354,
		imgAlt: "working man png",
		title: "Cool feature title",
		description: "Learning curve network effects return on investment.",
		buttonText: "Explore page",
	},
	{
		id: "2",
		imgSrc: "/images/people.png",
		imgWidth: 300,
		imgHeight: 354,
		imgAlt: "people png",
		title: "Interesting title",
		description: "Learning curve network effects return on investment.",
		buttonText: "Explore page",
	},
	{
		id: "3",
		imgSrc: "/images/buildings.png",
		imgWidth: 300,
		imgHeight: 354,
		imgAlt: "buildings png",
		title: "Even cooler title",
		description: "Learning curve network effects return on investment.",
		buttonText: "Explore page",
	},
];
