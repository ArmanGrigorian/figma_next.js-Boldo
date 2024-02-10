import { Logo } from "@/components";
import { footerLinks } from "@/data/data";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="flex justify-between items-start gap-10 flex-wrap p-20 max-lg:p-10 max-md:p-5">
			<div className="max-w-[300px]">
				<Logo textColor={"text-custom-dark-blue dark:text-custom-white"} />
				<p className="text-base font-normal font-OpenSans leading-7 text-custom-light-grey mt-1 dark:text-custom-white">
					Social media validation business model canvas graphical user interface launch party
					creative facebook iPad twitter.
				</p>
				<small className="text-base font-normal font-OpenSans leading-7 text-custom-light-grey dark:text-custom-white">
					All rights reserved &copy;
				</small>
			</div>

			{footerLinks.map((linkGroup) => (
				<dl
					key={linkGroup.id}
					className="font-OpenSans text-lg font-bold leading-8 dark:text-custom-white">
					<dt>{linkGroup.title}</dt>
					{linkGroup.links.map((link) => (
						<dd
							key={crypto.randomUUID()}
							className="relative text-base font-normal font-OpenSans leading-7 text-custom-light-grey">
							<Link
								href={link.href}
								className="block hover:text-custom-green peer active:scale-95 dark:text-custom-white">
								{link.title}
							</Link>
							<div className="hidden peer-hover:block absolute z-10 top-0 bottom-0 m-auto right-5 w-2 h-2 bg-custom-green rounded-full"></div>
						</dd>
					))}
				</dl>
			))}
		</footer>
	);
};

export default Footer;
