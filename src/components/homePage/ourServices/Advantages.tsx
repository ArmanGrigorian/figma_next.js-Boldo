import { Button } from "@/components";
import { advantages_A, advantages_B } from "@/data/data";
import Image from "next/image";
import { Advantage } from "..";
import circleGraphPic from "../../../../public/images/circleGraph.png";
import incomeGraphPic from "../../../../public/images/incomeGraph.png";

const OurAdvantages = () => {
	return (
		<div className="p-10 flex flex-col gap-10 max-md:p-5">
			<div className="flex justify-between items-center gap-10">
				<div className="relative bg-man bg-cover bg-no-repeat w-[400px] h-[412px] drop-shadow-2xl rounded-3xl max-lg:hidden">
					<Image
						src={incomeGraphPic}
						placeholder="blur"
						alt="income graph png"
						className="w-[140px] absolute right-10 -bottom-12 z-10 drop-shadow-xl rounded-xl"
					/>
				</div>

				<div className="w-[37%] min-w-[410px] flex flex-col gap-4 max-lg:w-full max-lg:min-w-0">
					<h3 className="font-Manrope text-3xl font-semibold text-custom-dark-blue leading-[42px] max-md:text-xl dark:text-custom-white">
						We connect our customers with the best, and help them keep up-and stay open.
					</h3>
					<ul>
						{advantages_A.map((advantage) => (
							<Advantage key={advantage.id} {...advantage} />
						))}
					</ul>

					<Button {...{ href: "/about", title: "Start now" }} />
				</div>
			</div>

			<div className="flex justify-between items-center gap-10">
				<div className="w-[37%] min-w-[410px] flex flex-col gap-4 max-lg:w-full max-lg:min-w-0">
					<h3 className="font-Manrope text-3xl font-semibold text-custom-dark-blue  leading-[42px] max-md:text-xl dark:text-custom-white">
						We connect our customers with the best, and help them keep up-and stay open.
					</h3>
					<ul>
						{advantages_B.map((advantage) => (
							<Advantage key={advantage.id} {...advantage} />
						))}
					</ul>
				</div>

				<div className="relative bg-woman bg-cover bg-no-repeat w-[400px] h-[412px] drop-shadow-2xl rounded-3xl max-lg:hidden">
					<Image
						src={circleGraphPic}
						alt="circle graph png"
						placeholder="blur"
						className="w-[140px] absolute left-10 -bottom-12 z-10 drop-shadow-xl rounded-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default OurAdvantages;
