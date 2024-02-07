import Image from "next/image";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import { FiFeather } from "react-icons/fi";
import { IoEyeOutline, IoSunnyOutline } from "react-icons/io5";
import { OurServices } from "..";

const Section = () => {
	return (
		<section>
			<OurServices />

			<div className="p-10 flex flex-col gap-10 max-md:p-5">
				<div className="flex justify-between items-center gap-10">
					<div className="relative bg-man bg-contain bg-no-repeat w-[400px] h-[412px] drop-shadow-2xl rounded-3xl max-lg:hidden">
						<Image
							className="absolute right-10 -bottom-12 z-10 drop-shadow-xl rounded-xl"
							src="/images/incomeGraph.png"
							width={141}
							height={178}
							alt="income graph png"
						/>
					</div>

					<div className="w-[37%] min-w-[410px] flex flex-col gap-4 max-lg:w-full max-lg:min-w-0">
						<h3 className="text-3xl font-semibold text-custom-dark-blue leading-[42px] max-md:text-xl">
							We connect our customers with the best, and help them keep up-and stay open.
						</h3>
						<ul>
							<li className="flex items-center gap-3 my-3">
								<FaCircleCheck className="fill-custom-dark-blue scale-150 max-md:scale-125" />
								<strong className="leading-8 text-lg text-custom-black font-OpenSans font-normal max-md:text-base">
									We connect our customers with the best.
								</strong>
							</li>

							<li className="flex items-center gap-3 my-3">
								<FaCircleCheck className="fill-custom-dark-blue scale-150 max-md:scale-125" />
								<strong className="leading-8 text-lg text-custom-black font-OpenSans font-normal max-md:text-base">
									Advisor success customer launch party.
								</strong>
							</li>
							<li className="flex items-center gap-3 my-3">
								<FaCircleCheck className="fill-custom-dark-blue scale-150 max-md:scale-125" />
								<strong className="leading-8 text-lg text-custom-black font-OpenSans font-normal max-md:text-base">
									Business-to-consumer long tail.
								</strong>
							</li>
						</ul>

						<Link
							className="w-44 h-14 tracking-wide flex justify-center items-center drop-shadow-xl rounded-[56px] border-2 border-custom-white border-solid text-custom-white text-lg font-bold bg-custom-dark-blue hover:bg-custom-green hover:text-custom-dark-blue hover:border-custom-green active:scale-95 select-none max-md:w-32 max-md:h-12 max-md:text-sm"
							href="/about">
							Start now
						</Link>
					</div>
				</div>

				<div className="flex justify-between items-center gap-10">
					<div className="w-[37%] min-w-[410px] flex flex-col gap-4 max-lg:w-full max-lg:min-w-0">
						<h3 className="text-3xl font-semibold text-custom-dark-blue  leading-[42px] max-md:text-xl">
							We connect our customers with the best, and help them keep up-and stay open.
						</h3>
						<ul>
							<li className="flex items-center gap-3 my-3">
								<FiFeather className="scale-150 max-md:scale-125" />
								<strong className="leading-8 text-lg text-custom-dark-blue font-OpenSans font-normal max-md:text-base">
									We connect our customers with the best.
								</strong>
							</li>
							<li className="flex items-center gap-3 my-3">
								<IoEyeOutline className="scale-150 max-md:scale-125" />
								<strong className="leading-8 text-lg text-custom-dark-blue font-OpenSans font-normal max-md:text-base">
									Advisor success customer launch party.
								</strong>
							</li>
							<li className="flex items-center gap-3 my-3 ">
								<IoSunnyOutline className="scale-150 max-md:scale-125" />
								<strong className="leading-8 text-lg text-custom-dark-blue font-OpenSans font-normal max-md:text-base">
									Business-to-consumer long tail.
								</strong>
							</li>
						</ul>
					</div>

					<div className="relative bg-woman bg-contain bg-no-repeat w-[400px] h-[412px] drop-shadow-2xl rounded-3xl max-lg:hidden">
						<Image
							className="absolute left-10 -bottom-12 z-10 drop-shadow-xl rounded-xl"
							src="/images/circleGraph.png"
							width={141}
							height={178}
							alt="circle graph png"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section;
