import Image from "next/image";

const Slider = () => {
	return (
		<article className="flex flex-wrap justify-around items-center gap-5 px-20 pb-20 max-lg:px-10 max-lg:pb-10 max-md:px-5 max-md:pb-5">
			<Image
				src="/images/buildingsBig.png"
				width={550}
				height={386}
				alt="buildings png"
				className="w-[min(100%,500px)] rounded-3xl shadow-xl"
			/>

			<div>
				<p className="mt-3 text-custom-grey font-OpenSans text-sm font-normal leading-7  dark:text-custom-white">
					<strong className="leading-7 mr-2 font-OpenSans font-bold text-base text-custom-dark-blue dark:text-custom-white">
						Category
					</strong>
					December 25, 2023
				</p>

				<h2 className="font-semibold text-[40px] leading-[72px] max-md:text-[28px]  max-md:leading-[42px] max-sm:w-full dark:text-custom-white">
					Pitch term sheet backing <br /> validation focus release.
				</h2>

				<div className="flex items-center gap-2">
					<Image
						src="/images/albusDumbledore.jpg"
						width={32}
						height={32}
						alt="Albus Dumbledore jpg"
						className="rounded-full shadow-xl"
					/>
					<p className="leading-7 font-OpenSans font-medium text-base text-custom-black  dark:text-custom-white">
						Chandler Bing
					</p>
				</div>
			</div>
		</article>
	);
};

export default Slider;
