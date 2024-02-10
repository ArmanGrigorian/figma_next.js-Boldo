import { advantages_C } from "@/data/data";

const Bottom = () => {
	return (
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
	);
};

export default Bottom;
