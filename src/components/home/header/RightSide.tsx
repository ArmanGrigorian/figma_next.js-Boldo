import { Circle, Statistics } from "..";

const RightSide = () => {
	return (
		<div className="w-[492px] flex flex-col gap-7 max-xl:flex-row max-xl:w-full max-xl:flex max-xl:items-center max-xl:justify-between max-md:w-full max-md:flex-col">
			<Statistics />
			<Circle />
		</div>
	);
};

export default RightSide;
