import Image from "next/image";
import { Dots } from "..";

const Circle = () => {
	return (
		<div className="shadow-xl w-full h-40 flex flex-col justify-between bg-custom-grey p-5 rounded-2xl max-xl:w-[40%] max-md:w-full">
			<Dots />

			<div className="flex justify-between items-center">
				<Image
					src="/images/circle.png"
					width={92}
					height={92}
					alt="circle png"
					className="animate-spin"
				/>

				<div className="h-20 flex flex-col justify-around">
					<div className="w-20 h-3 bg-custom-dark-grey rounded-2xl animate-pulse"></div>
					<div className="w-16 h-3 bg-custom-dark-grey rounded-2xl animate-pulse"></div>
					<div className="w-20 h-3 bg-custom-dark-grey rounded-2xl animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default Circle;
