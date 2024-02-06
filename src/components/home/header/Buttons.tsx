import { headerButtonsData } from "@/data/data";
import Link from "next/link";

const Buttons = () => {
	return (
		<div className="flex items-center gap-6 max-md:justify-between max-md:gap-5">
			{headerButtonsData.map((buttonData) => (
				<Link
					className="w-44 h-14 tracking-wide flex justify-center items-center rounded-[56px] border-2 border-custom-white border-solid text-custom-white text-lg font-bold bg-custom-dark-blue hover:bg-custom-green hover:text-custom-dark-blue hover:border-custom-green active:scale-95 select-none max-md:w-32 max-md:h-12 max-md:text-sm"
					key={buttonData.title}
					href={buttonData.href}>
					{buttonData.title}
				</Link>
			))}
		</div>
	);
};

export default Buttons;
