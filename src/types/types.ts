export type T_navLinkData = {
	title: string;
	href: string;
	extra: boolean;
};

export type T_navLinksData = T_navLinkData[];

export type NavLinkProps = {
	linkData: T_navLinkData;
	mobile?: boolean;
};

export type T_headerButtonData = Omit<T_navLinkData, "extra">[];
