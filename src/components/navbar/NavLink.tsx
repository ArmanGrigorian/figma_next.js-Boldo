"use client";

import { NavLinkProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = (link: NavLinkProps) => {
	const activePage = usePathname();
	const { title, href, extra } = link;

	if (extra)
		return (
			<li className="text-custom-dark-blue bg-custom-white w-28 h-9 rounded-3xl active:scale-95  hover:bg-custom-green hover:text-custom-dark-blue">
				<Link
					href={href}
					className={`${
						activePage === link.href
							? "bg-custom-green text-custom-white"
							: "bg-inherit text-inherit"
					} font-OpenSans flex justify-center items-center rounded-3xl w-full h-full text-inherit font-bold text-base`}>
					{title}
				</Link>
			</li>
		);

	return (
		<li className="text-custom-white  hover:text-custom-green active:scale-95">
			<Link
				href={href}
				className={`${
					activePage === link.href ? "text-custom-green" : "text-inherit"
				} font-semibold font-OpenSans text-base`}>
				{title}
			</Link>
		</li>
	);
};

export default NavLink;
