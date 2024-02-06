"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectNavMenuIsOpen } from "@/redux/slices/interfaceSlice";
import { MobileNavButton, MobileNavMenu } from "..";

const MobileNav = () => {
	const isOpen = useAppSelector(selectNavMenuIsOpen);

	return (
		<div className="md:hidden relative">
			<MobileNavButton />
			{isOpen && <MobileNavMenu />}
		</div>
	);
};

export default MobileNav;
