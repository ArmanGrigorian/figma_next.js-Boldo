import { Gallery, Title } from "..";

const Header = () => {
	return (
		<header className="aboutGradient p-20 max-lg:p-10 max-md:p-5 dark:bg-none dark:bg-custom-dark-blue">
			<Title />
			<Gallery />
		</header>
	);
};

export default Header;
