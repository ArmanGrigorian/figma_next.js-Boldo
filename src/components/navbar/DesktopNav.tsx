import Link from "next/link";

const DesktopNav = () => {
	return (
		<>
			<ul className="flex justify-between items-center gap-9 max-md:hidden">
				<li>
					<Link
						className="text-custom-white font-semibold text-base hover:text-custom-green"
						href="/product">
						Product
					</Link>
				</li>
				<li>
					<Link
						className="text-custom-white font-semibold text-base hover:text-custom-green"
						href="/services">
						Services
					</Link>
				</li>
				<li>
					<Link
						className="text-custom-white font-semibold text-base hover:text-custom-green"
						href="/about">
						About
					</Link>
				</li>
				<li className="w-28 h-9 text-custom-dark-blue bg-custom-white rounded-3xl  hover:bg-custom-green hover:text-custom-white">
					<Link
						className="flex justify-center items-center w-full h-full text-inherit font-bold text-base"
						href="/login">
						Log In
					</Link>
				</li>
			</ul>
		</>
	);
};

export default DesktopNav;
