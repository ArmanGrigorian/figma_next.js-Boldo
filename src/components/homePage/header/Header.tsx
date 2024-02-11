import Image from "next/image";
import { LeftSide, RightSide } from "..";

const Header = () => {
	return (
		<header className="rounded-b-md flex flex-col justify-around bg-custom-dark-blue min-h-[calc(100vh-162px)] p-10 max-md:p-5 max-sm:justify-evenly">
			<div className="flex justify-between items-center gap-10 max-xl:flex-col max-md:gap-5">
				<LeftSide />
				<RightSide />
			</div>

			<Image src="/images/logoWall.png" width={1173} height={73} alt="logo wall png" />
		</header>
	);
};

export default Header;
