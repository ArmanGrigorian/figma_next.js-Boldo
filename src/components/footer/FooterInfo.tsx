import { Logo } from "..";

const FooterInfo = () => {
	return (
		<div className="max-w-[300px]">
			<Logo textColor={"text-custom-dark-blue dark:text-custom-white"} />
			<p className="text-base font-normal font-OpenSans leading-7 text-custom-light-grey mt-1 dark:text-custom-white">
				Social media validation business model canvas graphical user interface launch party creative
				facebook iPad twitter.
			</p>
			<small className="text-base font-normal font-OpenSans leading-7 text-custom-light-grey dark:text-custom-white">
				All rights reserved &copy;
			</small>
		</div>
	);
};

export default FooterInfo;
