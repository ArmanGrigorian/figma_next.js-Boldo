import { Buttons, Title } from "..";

const LeftSide = () => {
	return (
		<div className="w-[60%] h-[487px] flex flex-col justify-center max-xl:h-fit max-xl:w-full">
			<Title />
			<Buttons />
		</div>
	);
};

export default LeftSide;
