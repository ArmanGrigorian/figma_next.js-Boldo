import Image from "next/image";
import { LeftSide, RightSide } from "..";
import logoWallPic from "../../../../public/images/logoWall.png";

const Header = () => {
	return (
		<header className="rounded-b-md flex flex-col justify-around bg-custom-dark-blue min-h-[calc(100vh-162px)] p-10 max-md:p-5 max-sm:justify-evenly">
			<div className="flex justify-between items-center gap-10 max-xl:flex-col max-md:gap-5">
				<LeftSide />
				<RightSide />
			</div>

			<Image
				src={logoWallPic}
				alt="logo wall png"
				placeholder="blur"
				layout="responsive"
				className="mt-3"
			/>
		</header>
	);
};

export default Header;
