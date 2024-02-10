"use client";

import { NavLinkProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link, mobile }: NavLinkProps) => {
	const activePage = usePathname();
	const { title, href, extra } = link;

	if (extra)
		return (
			<li
				className={`${
					mobile ? "bg-custom-dark-blue text-custom-white" : "text-custom-dark-blue bg-custom-white"
				} w-28 h-9 rounded-3xl active:scale-95  hover:bg-custom-green hover:text-custom-dark-blue`}>
				<Link
					href={href}
					className={`${
						activePage === link.href
							? "bg-custom-green text-custom-white"
							: "bg-inherit text-inherit"
					} flex justify-center items-center rounded-3xl w-full h-full text-inherit font-bold text-base`}>
					{title}
				</Link>
			</li>
		);

	return (
		<li
			className={`${
				mobile
					? " text-custom-dark-blue  hover:text-custom-green  "
					: "text-custom-white  hover:text-custom-green"
			} active:scale-95`}>
			<Link
				href={href}
				className={`${
					activePage === link.href ? "text-custom-green" : "text-inherit"
				} font-semibold text-base`}>
				{title}
			</Link>
		</li>
	);
};

export default NavLink;
