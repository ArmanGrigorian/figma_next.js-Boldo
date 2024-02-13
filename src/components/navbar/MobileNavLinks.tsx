"use client";

import { useAppDispatch } from "@/redux/hooks";
import { selectNavMenuIsOpen, toggleNavMenu } from "@/redux/slices/interfaceSlice";
import { NavLinkProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavLinks = (link: NavLinkProps) => {
	const dispatch = useAppDispatch();
	const activePage = usePathname();
	const { title, href, extra } = link;

  function handleCloseMenu() {
		dispatch(toggleNavMenu(false));
	}

	if (extra)
		return (
			<li
				onClick={handleCloseMenu}
				className="bg-custom-dark-blue text-custom-white w-28 h-9 rounded-3xl active:scale-95  hover:bg-custom-green hover:text-custom-dark-blue">
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
			onClick={handleCloseMenu}
			className="text-custom-dark-blue  hover:text-custom-green active:scale-95">
			<Link
				type="button"
				href={href}
				className={`${
					activePage === link.href ? "text-custom-green" : "text-inherit"
				} font-semibold text-base`}>
				{title}
			</Link>
		</li>
	);
};

export default MobileNavLinks;
