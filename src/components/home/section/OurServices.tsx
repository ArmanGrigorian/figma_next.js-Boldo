import { ourServicesData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const OurServices = () => {
	return (
		<div className="flex flex-col gap-10 p-10 max-md:p-5 max-md:gap-5">
			<div>
				<p className="text-center text-custom-light-grey font-normal font-OpenSans text-lg">
					Our Services
				</p>

				<h2 className="max-w-[842px] mx-auto text-center font-semibold text-[40px] text-custom-black leading-[72px] max-md:text-[28px] max-md:w-[90%] max-md:leading-[42px] max-sm:w-full">
					Handshake infographic mass market crowdfunding iteration.
				</h2>
			</div>

			<div className="flex justify-between items-top max-lg:flex-col">
				{ourServicesData.map((ourService) => (
					<div
						key={ourService.id}
						className="w-[26%] p-5 max-lg:w-full max-lg:flex max-lg:items-center gap-5 drop-shadow-2xl">
						<Image
							className="rounded-3xl w-full mb-5 max-lg:w-32 max-lg:h-32 max-lg:mb-0 max-sm:hidden"
							src={ourService.imgSrc}
							width={ourService.imgWidth}
							height={ourService.imgHeight}
							alt={ourService.imgAlt}
						/>
						<div>
							<h4 className="text-2xl font-OpenSans font-normal text-custom-black leading-9 max-md:text-xl">
								{ourService.title}
							</h4>
							<p className="text-lg font-OpenSans font-normal text-custom-light-grey leading-8 max-md:text-base">
								{ourService.description}
							</p>
							<Link
								className="flex justify-start items-center gap-2 font-OpenSans text-lg font-bold text-custom-dark-blue leading-9 max-md:text-base hover:text-custom-green hover:translate-x-1 active:translate-x-1 active:scale-95"
								href="/about ">
								{ourService.buttonText} <FaArrowRightLong />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurServices;
