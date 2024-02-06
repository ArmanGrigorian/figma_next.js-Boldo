import { NavLinkProps } from "@/types/types";
import Link from "next/link";

const NavLink = ({ linkData, mobile }: NavLinkProps) => {
	const { title, href, extra } = linkData;

	if (extra)
		return (
			<li
				className={`${
					mobile ? "bg-custom-dark-blue text-custom-white" : "text-custom-dark-blue bg-custom-white"
				} w-28 h-9 rounded-3xl active:scale-95  hover:bg-custom-green hover:text-custom-white`}>
				<Link
					className="flex justify-center items-center w-full h-full text-inherit font-bold text-base "
					href={href}>
					{title}
				</Link>
			</li>
		);

	return (
		<li className="active:scale-95">
			<Link
				className={`${
					mobile
						? " text-custom-dark-blue  hover:text-custom-green  "
						: "text-custom-white  hover:text-custom-green"
				} font-semibold text-base`}
				href={href}>
				{title}
			</Link>
		</li>
	);
};

export default NavLink;
