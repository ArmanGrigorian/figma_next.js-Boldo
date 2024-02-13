import { navLinksData } from "@/data/data";
import { NavLink } from ".";

const DesktopNav = () => {
	return (
		<ul className="flex justify-between items-center gap-9 max-md:hidden">
			{navLinksData.map((link) => (
				<NavLink key={link.title} {...link} />
			))}
		</ul>
	);
};

export default DesktopNav;
