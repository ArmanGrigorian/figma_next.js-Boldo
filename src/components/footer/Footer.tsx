import FooterInfo from "./FooterInfo";
import FooterNav from "./FooterNav";
import Subscribe from "./Subscribe";

const Footer = () => {
	return (
		<footer className="max-w-[1440px] m-auto px-20 mt-20 max-lg:mt-10 max-lg:px-10 max-md:px-5 max-md:mt-5 dark:bg-custom-dark-blue dark:mt-0">
			<Subscribe />

			<div className="border-t  flex justify-between items-start gap-10 flex-wrap py-10 max-lg:py-5 my-10 max-lg:my-5">
				<FooterInfo />
				<FooterNav />
			</div>
		</footer>
	);
};

export default Footer;
