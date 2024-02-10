import { navLinksData } from "@/data/data";
import Image from "next/image";
import { NavLink } from "..";

const DesktopNav = () => {
	return (
		<>
			<ul className="relative z-10 flex justify-between items-center gap-9 max-md:hidden">
				{navLinksData.map((link) => (
					<NavLink key={link.title} link={link} />
				))}
			</ul>
			<Image
				src="/images/corner.png"
				width={700}
				height={205}
				alt="corner decoration"
				className="absolute -top-[157px] -right-[128px] [transform:rotateX(180deg)]"
			/>
		</>
	);
};

export default DesktopNav;
