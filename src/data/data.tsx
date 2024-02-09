import {
	T_advantagesList,
	T_comments,
	T_features,
	T_footerLinks,
	T_headerButton,
	T_lines,
	T_navLinks,
	T_ourBlogs,
} from "@/types/types";
import { FaCircleCheck } from "react-icons/fa6";
import { FiFeather } from "react-icons/fi";
import { IoEyeOutline, IoSunnyOutline } from "react-icons/io5";

export const navLinksData: T_navLinks = [
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

export const headerButtonsData: T_headerButton = [
	{
		title: "Buy template",
		href: "/blog",
	},
	{
		title: "Explore",
		href: "/about",
	},
];

export const featuresData: T_features = [
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

export const advantages_A: T_advantagesList = [
	{
		id: "1",
		text: "We connect our customers with the best",
		icon: <FaCircleCheck className="fill-custom-dark-blue scale-150 max-md:scale-125" />,
	},
	{
		id: "2",
		text: "Advisor success customer launch party",
		icon: <FaCircleCheck className="fill-custom-dark-blue scale-150 max-md:scale-125" />,
	},
	{
		id: "3",
		text: "Business-to-consumer long tail",
		icon: <FaCircleCheck className="fill-custom-dark-blue scale-150 max-md:scale-125" />,
	},
];

export const advantages_B: T_advantagesList = [
	{
		id: "4",
		text: "We connect our customers with the best",
		icon: <FiFeather className="scale-150 max-md:scale-125" />,
	},
	{
		id: "5",
		text: "Advisor success customer launch party",
		icon: <IoEyeOutline className="scale-150 max-md:scale-125" />,
	},
	{
		id: "6",
		text: "Business-to-consumer long tail",
		icon: <IoSunnyOutline className="scale-150 max-md:scale-125" />,
	},
];

export const advantages_C = [
	{
		id: "7",
		text: "We connect our customers with the best",
		icon: <FaCircleCheck className="fill-custom-dark-blue scale-150 max-md:scale-125" />,
	},
	{
		id: "8",
		text: "Android research & development rockstar? ",
		icon: <FaCircleCheck className="fill-custom-dark-blue scale-150 max-md:scale-125" />,
	},
];

export const linesData: T_lines = [
	{
		id: "1",
		isCompleted: false,
		width: 77,
		lineColor: "#e6ebeb",
	},
	{
		id: "2",
		isCompleted: false,
		width: 18,
		lineColor: "#f00a0a",
	},
	{
		id: "3",
		isCompleted: true,
		width: 96,
		lineColor: "#1eaa1e",
	},
	{
		id: "4",
		isCompleted: false,
		width: 48,
		lineColor: "#e6ebeb",
	},
];

export const commentsData: T_comments = [
	{
		id: "0",
		text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
		author: "Albus Dumbledore",
		role: "Manager @ Hogwarts",
		avatar: "/images/albusDumbledore.jpg",
		isActive: false,
	},
	{
		id: "1",
		text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
		author: "Severus Snape",
		role: "Manager @ Slytherin",
		avatar: "/images/severusSnape.jpg",
		isActive: true,
	},
	{
		id: "2",
		text: "“Release facebook responsive web design business model canvas seed money monetization.”",
		author: "Harry Potter",
		role: "Team Leader @ Gryffindor",
		avatar: "/images/harryPotter.jpg",
		isActive: false,
	},
];

export const ourBlogsData: T_ourBlogs = [
	{
		id: "1",
		imgSrc: "/images/working.png",
		imgAlt: "working png",
		text: "Pitch term sheet backing validation focus release.",
		date: "November 17, 2021",
		author: "Chandler Bing",
		avatar: "/images/chandlerBing.png",
	},
	{
		id: "2",
		imgSrc: "/images/woman.png",
		imgAlt: "woman png",
		text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
		date: "May 09, 2022",
		author: "Rachel Green",
		avatar: "/images/rachelGreen.png",
	},
	{
		id: "3",
		imgSrc: "/images/busyGuy.jpg",
		imgAlt: "busy guy jpg",
		text: "Beta prototype sales iPad gen-z marketing network effects value proposition",
		date: "June 22, 2023",
		author: "Monica Geller",
		avatar: "/images/monicaGeller.png",
	},
];

export const footerLinks: T_footerLinks = [
	{
		id: "1",
		title: "Landings",
		links: [
			{
				title: "Home",
				href: "/",
			},
			{
				title: "About",
				href: "/about",
			},
			{
				title: "Blog",
				href: "/blog",
			},
		],
	},
	{
		id: "2",
		title: "Company",
		links: [
			{
				title: "Home",
				href: "/",
			},
			{
				title: "About",
				href: "/about",
			},
			{
				title: "Blog",
				href: "/blog",
			},
		],
	},
	{
		id: "3",
		title: "Resources",
		links: [
			{
				title: "Home",
				href: "/",
			},
			{
				title: "About",
				href: "/about",
			},
			{
				title: "Blog",
				href: "/blog",
			},
		],
	},
];
