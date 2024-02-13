import { navLinksData } from "@/data/data";
import { MobileNavLinks } from ".";

const MobileNavMenu = () => {
	return (
		<ul className="absolute z-10 top-10 right-0 shadow-xl w-fit flex flex-col justify-center items-center gap-4 p-4 bg-custom-white rounded-md ">
			{navLinksData.map((link) => (
				<MobileNavLinks key={link.title} {...link} />
			))}
		</ul>
	);
};

export default MobileNavMenu;
