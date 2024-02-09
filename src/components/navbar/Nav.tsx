import { DesktopNav, Logo, MobileNav } from "..";

const Nav = () => {
	return (
		<nav className="border-b border-custom-grey-blue max-w-7xl m-auto h-[72px] flex justify-between items-center bg-custom-dark-blue px-10 py-2 max-md:px-5 select-none ">
			<Logo textColor={"text-custom-white"}/>
			<DesktopNav />
			<MobileNav />
		</nav>
	);
};

export default Nav;
