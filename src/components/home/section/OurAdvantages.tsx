import { advantageList_A, advantageList_B } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const OurAdvantages = () => {
	return (
		<div className="p-10 flex flex-col gap-10 max-md:p-5">
			<div className="flex justify-between items-center gap-10">
				<div className="relative bg-man bg-cover bg-no-repeat w-[400px] h-[412px] drop-shadow-2xl rounded-3xl max-lg:hidden">
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
						{advantageList_A.map((listItem) => (
							<li key={listItem.id} className="flex items-center gap-3 my-3">
								{listItem.icon}
								<strong className="leading-8 text-lg text-custom-black font-OpenSans font-normal max-md:text-base">
									{listItem.text}
								</strong>
							</li>
						))}
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
						{advantageList_B.map((listItem) => (
							<li key={listItem.id} className="flex items-center gap-3 my-3">
								{listItem.icon}
								<strong className="leading-8 text-lg text-custom-dark-blue font-OpenSans font-normal max-md:text-base">
									{listItem.text}
								</strong>
							</li>
						))}
					</ul>
				</div>

				<div className="relative bg-woman bg-cover bg-no-repeat w-[400px] h-[412px] drop-shadow-2xl rounded-3xl max-lg:hidden">
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
	);
};

export default OurAdvantages;
