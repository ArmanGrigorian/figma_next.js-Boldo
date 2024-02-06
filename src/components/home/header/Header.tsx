import { LeftSide, RightSide } from "..";


const Header = () => {
	return (
		<header className="bg-custom-dark-blue min-h-[700px] p-10 max-md:p-5">
			<div className="flex justify-between items-center gap-10 max-xl:flex-col max-md:gap-5">
				<LeftSide />
				<RightSide />
			</div>
		</header>
	);
};

export default Header;
