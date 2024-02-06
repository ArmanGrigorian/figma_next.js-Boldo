import { navLinksData } from "@/data/data";
import { NavLink } from "..";

const DesktopNav = () => {
	return (
		<ul className="flex justify-between items-center gap-9 max-md:hidden">
			{navLinksData.map((linkData) => (
				<NavLink key={linkData.title} linkData={linkData} />
			))}
		</ul>
	);
};

export default DesktopNav;
