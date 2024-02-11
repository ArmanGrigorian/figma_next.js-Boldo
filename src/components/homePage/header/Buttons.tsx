import { headerButtonsData } from "@/data/data";
import { Button } from "@/components";

const Buttons = () => {
	return (
		<div className="flex items-center gap-6 max-md:justify-between max-md:gap-5">
			{headerButtonsData.map((button) => (
				<Button key={button.title} {...button} />
			))}
		</div>
	);
};

export default Buttons;
