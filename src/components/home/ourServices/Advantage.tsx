import { AdvantageProps } from "@/types/types";

const Advantage = (advantage: AdvantageProps) => {
	return (
		<li key={advantage.id} className="flex items-center gap-3 my-3">
			{advantage.icon}
			<strong className="leading-8 text-lg text-custom-black font-OpenSans font-normal max-md:text-base">
				{advantage.text}
			</strong>
		</li>
	);
};

export default Advantage;
