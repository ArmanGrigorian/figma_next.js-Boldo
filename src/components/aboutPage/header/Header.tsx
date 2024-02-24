import { Gallery, Title } from "..";

const Header = () => {
	return (
		<header className="bg-gradient-to-b from-70%  from-custom-dark-blue to-70% to-custom-white  p-20 max-lg:p-10 max-md:p-5 dark:bg-none dark:bg-custom-dark-blue">
			<Title />
			<Gallery />
		</header>
	);
};

export default Header;
