import { FeatureProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Feature = (feature: FeatureProps) => {
	return (
		<div className="w-[26%] p-5 max-lg:w-full max-lg:flex max-lg:items-center gap-5 drop-shadow-2xl">
			<Image
				src={feature.imgSrc}
				width={feature.imgWidth}
				height={feature.imgHeight}
				alt={feature.imgAlt}
				className="rounded-3xl w-full mb-5 max-lg:w-32 max-lg:h-32 max-lg:mb-0 max-sm:hidden"
			/>
			<div>
				<h4 className="text-2xl font-OpenSans font-normal text-custom-black leading-9 max-md:text-xl dark:text-custom-white">
					{feature.title}
				</h4>
				<p className="text-lg font-OpenSans font-normal text-custom-light-grey leading-8 max-md:text-base dark:text-custom-white">
					{feature.description}
				</p>
				<Link
					href="/about "
					className="flex justify-start items-center gap-2 font-OpenSans text-lg font-bold text-custom-dark-blue leading-9 max-md:text-base hover:text-custom-green hover:translate-x-1 active:translate-x-1 active:scale-95 dark:text-custom-white">
					{feature.buttonText} <FaArrowRightLong />
				</Link>
			</div>
		</div>
	);
};

export default Feature;
