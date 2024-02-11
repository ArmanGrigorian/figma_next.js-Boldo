import { Buttons } from "..";

const LeftSide = () => {
	return (
		<div className="w-[60%] h-[487px] mb-1 flex flex-col justify-center max-xl:h-fit max-xl:w-full">
			<h1 className="text-shadow-lg text-custom-white text-6xl font-semibold leading-[72px] tracking-wide mb-4 max-md:text-4xl ">
				Save time by building fast with Boldo Template
			</h1>
			<p className="text-custom-white text-base font-OpenSans font-normal leading-7 tracking-wide mb-10 max-md:text-sm">
				Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage
				innovator success deployment non-disclosure.
			</p>

			<Buttons />
		</div>
	);
};

export default LeftSide;
