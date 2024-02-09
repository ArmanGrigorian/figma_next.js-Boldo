import { ReactElement } from "react";
export interface interfaceState {
	navMenuIsOpen: boolean;
	lines: T_lines;
	comments: T_comments;
}

export type T_navLink = {
	title: string;
	href: string;
	extra: boolean;
};

export type T_navLinks = T_navLink[];

export type NavLinkProps = {
	link: T_navLink;
	mobile?: boolean;
};

export type ButtonProps = Omit<T_navLink, "extra">;

export type T_headerButton = ButtonProps[];

export type LineProps = {
	isCompleted: boolean;
	id: string;
	width: number;
	lineColor: string;
};

export type T_lines = LineProps[];

export type T_feature = {
	id: string;
	imgSrc: string;
	imgWidth: 300;
	imgHeight: 354;
	imgAlt: string;
	title: string;
	description: string;
	buttonText: string;
};

export type T_features = T_feature[];

export type AdvantageProps = {
	id: string;
	text: string;
	icon: ReactElement;
};

export type T_advantagesList = AdvantageProps[];

export type T_comment = {
	id: string;
	text: string;
	author: string;
	role: string;
	avatar: string;
	isActive: boolean;
};

export type T_comments = T_comment[];

export type BlogProps = {
	id: string;
	imgSrc: string;
	imgAlt: string;
	text: string;
	date: string;
	author: string;
	avatar: string;
};

export type T_ourBlogs = BlogProps[];
