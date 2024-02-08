import {
	T_advantageList,
	T_commentsData,
	T_headerButtonData,
	T_navLinksData,
	T_ourServices,
} from "@/types/types";
import { FaCircleCheck } from "react-icons/fa6";
import { FiFeather } from "react-icons/fi";
import { IoEyeOutline, IoSunnyOutline } from "react-icons/io5";

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

export const advantageList_A: T_advantageList = [
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

export const advantageList_B: T_advantageList = [
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

export const commentsData: T_commentsData = [
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
