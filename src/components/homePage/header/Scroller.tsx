import Image from "next/image";
import boldoPic from "../../../../public/images/boldo.png";
import prestoPic from "../../../../public/images/presto.png";

const Scroller = () => {
	return (
		<div className={"scroller w-full mt-6 overflow-hidden"}>
			<div className="w-[200%]  h-14 flex justify-between items-center animate-scroll">
				<Image src={boldoPic} alt="logo wall png" placeholder="blur" className="w-[12.5%]" />
				<Image src={prestoPic} alt="logo wall png" placeholder="blur" className="w-[12.5%]" />
				<Image src={boldoPic} alt="logo wall png" placeholder="blur" className="w-[12.5%]" />
				<Image src={prestoPic} alt="logo wall png" placeholder="blur" className="w-[12.5%]" />
				<Image src={boldoPic} alt="logo wall png" placeholder="blur" className="w-[12.5%]" />
				<Image src={prestoPic} alt="logo wall png" placeholder="blur" className="w-[12.5%]" />
				<Image src={boldoPic} alt="logo wall png" placeholder="blur" className="w-[12.5%]" />
				<Image src={prestoPic} alt="logo wall png" placeholder="blur" className="w-[12.5%]" />
			</div>
		</div>
	);
};

export default Scroller;
