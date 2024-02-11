import {
	HeadingProps,
	T_advantagesList,
	T_articles,
	T_comments,
	T_features,
	T_footerLinks,
	T_headerButton,
	T_lines,
	T_navLinks,
	T_newsFeed,
	T_ourBlogs,
	T_teamMembers,
} from "@/types/types";
import { FaCircleCheck } from "react-icons/fa6";
import { FiFeather } from "react-icons/fi";
import { IoEyeOutline, IoSunnyOutline } from "react-icons/io5";

export const navLinksData: T_navLinks = [
	{
		title: "Home",
		href: "/",
		extra: false,
	},
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

export const ourServicesHeadingData: HeadingProps = {
	title: "Our Services",
	titleStyles: "text-custom-light-grey",
	text: "Handshake infographic mass market crowdfunding iteration.",
	textStyles: `text-custom-dark-blue`,
};

export const ourBlogHeadingData: HeadingProps = {
	title: "Our Blog",
	titleStyles: "text-custom-light-grey",
	text: "Value proposition accelerator product management venture",
	textStyles: "text-custom-dark-blue",
};

export const ourStoryData: HeadingProps = {
	title: "Our story",
	titleStyles: "text-custom-light-grey",
	text: "Handshake infographic mass market crowdfunding iteration.",
	textStyles: "text-custom-dark-blue",
};

export const ourNumbersData: HeadingProps = {
	title: "Our Numbers",
	titleStyles: "text-custom-white",
	text: "Handshake infographic mass market crowdfunding iteration.",
	textStyles: "text-custom-white",
};

export const ourTeamData: HeadingProps = {
	title: "Our Team",
	titleStyles: "text-custom-light-grey",
	text: "The leadership team",
	textStyles: "text-custom-dark-blue",
};

export const ourValuesData: HeadingProps = {
	title: "Our Values",
	titleStyles: "text-custom-white",
	text: "The leadership team",
	textStyles: "text-custom-white",
};

export const ourValuesArticles: T_articles = [
	{
		id: "1",
		title: "We are committed",
		text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration",
		imgSrc: "/images/busyGuy.jpg",
	},
	{
		id: "2",
		title: "We are committed",
		text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration",
		imgSrc: "/images/working.png",
	},
	{
		id: "3",
		title: "We are committed",
		text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration",
		imgSrc: "/images/people.png",
	},
];

export const teamMembers: T_teamMembers = [
	{
		id: "1",
		fullName: "Michael Scott",
		role: "General Manager",
		avatar: "/images/michaelScott.png",
	},
	{
		id: "2",
		fullName: "Dwight Schrute",
		role: "General Manager",
		avatar: "/images/dwightSchrute.png",
	},
	{
		id: "3",
		fullName: "Pam Beetsley",
		role: "General Manager",
		avatar: "/images/pamBeetsley.png",
	},
];

export const newsFeedData: T_newsFeed = [
	{
		id: "1",
		imgSrc: "/images/working.png",
		imgAlt: "man at working png",
		date: "February 9, 2024",
		text: "The team was notified of the upcoming exam.",
		author: "Bruce Wayne",
		avatar: "/images/bat.png",
	},
	{
		id: "2",
		imgSrc: "/images/woman.png",
		imgAlt: "woman png",
		date: "February 10, 2024",
		text: "I started working on a project",
		author: "Rachel Green",
		avatar: "/images/rachelGreen.png",
	},
	{
		id: "3",
		imgSrc: "/images/busyGuy.jpg",
		imgAlt: "busy guy jpg",
		date: "February 11, 2024",
		text: "Everything turned out to be more complicated than I imagined",
		author: "Monica Geller",
		avatar: "/images/monicaGeller.png",
	},
	{
		id: "4",
		imgSrc: "/images/man.png",
		imgAlt: "man png",
		date: "February 16, 2024",
		text: "Damn I forgot how it worked... I need to repeat it",
		author: "Chandler Bing",
		avatar: "/images/chandlerBing.png",
	},
	{
		id: "5",
		imgSrc: "/images/ourWorkplace.jpg",
		imgAlt: "our workplace jpg",
		date: "February 19, 2024",
		text: "This is your last chance just do it.",
		author: "King Arthur",
		avatar: "/images/arthur.png",
	},
	{
		id: "6",
		imgSrc: "/images/people.png",
		imgAlt: "cooperation of workers png",
		date: "February 21, 2024",
		text: "Our team successfully passed the professional skills exam.",
		author: "Bruce Wayne",
		avatar: "/images/bat.png",
	},
];
