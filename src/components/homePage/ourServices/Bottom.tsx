import { advantages_C } from "@/data/data";
import Image from "next/image";

const Bottom = () => {
	return (
		<div>
			<div className="px-20 pt-20 max-lg:px-10  max-lg:pt-10 max-md:px-5 max-md:pt-5">
				<Image
					src="/images/ourWorkplace.jpg"
					width={1100}
					height={403}
					alt="urWorkplace jpg"
					className="w-full block shadow-xl rounded-3xl"
				/>
			</div>

			<div className="flex justify-between items-start p-20 max-lg:flex-col max-lg:p-10 max-md:p-5">
				<h3 className="max-w-[450px] text-3xl font-semibold text-custom-dark-blue  leading-[42px] max-md:text-xl  dark:text-custom-white">
					We connect our customers with the best, and help them keep up-and stay open.
				</h3>
				<ul>
					{advantages_C.map((advantage) => (
						<li
							key={advantage.id}
							className="flex justify-between items-center gap-3 my-3  dark:text-custom-white">
							<strong className="leading-8 text-lg text-custom-dark-blue font-OpenSans font-normal max-md:text-base dark:text-custom-white">
								{advantage.text}
							</strong>
							{advantage.icon}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Bottom;
