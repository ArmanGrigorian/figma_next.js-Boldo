"use client";

import { useAppDispatch } from "@/redux/hooks";
import { toggleNavMenu } from "@/redux/slices/interfaceSlice";

const MobileNavButton = () => {
	const dispatch = useAppDispatch();

	function handleMenu() {
		dispatch(toggleNavMenu());
	}

	return (
		<div
			className="w-12 bg-custom-white px-[5px] py-[3px] rounded-[4px] hover:bg-custom-green active:scale-95"
			onClick={handleMenu}>
			<div className="bg-custom-dark-blue w-full h-1 my-[4px] rounded-[4px]"></div>
			<div className="bg-custom-dark-blue w-full h-1 my-[4px] rounded-[4px]"></div>
			<div className="bg-custom-dark-blue w-full h-1 my-[4px] rounded-[4px]"></div>
		</div>
	);
};

export default MobileNavButton;
