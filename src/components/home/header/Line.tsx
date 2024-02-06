import { LineProps } from "@/types/types";

const Line = (lineData: LineProps) => {

	return (
		<div className="flex justify-between items-center gap-4">
			<div className="w-9 h-3 bg-custom-dark-grey rounded-2xl"></div>
			<div className="w-[calc(100%-90px)] h-3">
				<div
					style={{ width: lineData.width + "%", backgroundColor: lineData.lineColor }}
					className={"h-3 rounded-2xl bg-custom-grey-blue"}></div>
			</div>
			<p className={"text-custom-white text-base"}>{lineData.width}%</p>
		</div>
	);
};

export default Line;
