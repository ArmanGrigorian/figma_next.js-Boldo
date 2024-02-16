import Image from "next/image";
import busyGuyPic from "../../../../public/images/busyGuy.jpg";
import manPic from "../../../../public/images/man.png";
import ourTeamPic from "../../../../public/images/ourTeam.jpg";
import womanPic from "../../../../public/images/woman.png";
import workingPic from "../../../../public/images/working.png";

const Gallery = () => {
	return (
		<div className="grid grid-cols-4 grid-rows-2 gap-5">
			<Image
				src={manPic}
				alt="man png"
				placeholder="blur"
				className="row-start-1 row-end-2 col-start-1 col-end-2 w-full h-full rounded-[32px] shadow-xl"
			/>
			<Image
				src={womanPic}
				alt="woman png"
				placeholder="blur"
				className="row-start-1 row-end-3 col-start-2 col-end-4 w-full h-full rounded-[32px] shadow-xl"
			/>
			<Image
				src={busyGuyPic}
				alt="busy guy jpg"
				placeholder="blur"
				className="row-start-2 row-end-3 col-start-1 col-end-2 w-full h-full rounded-[32px] shadow-xl"
			/>

			<Image
				src={workingPic}
				alt="our working process"
				placeholder="blur"
				className="row-start-1 row-end-2 col-start-4 col-end-5 w-full h-full rounded-[32px] shadow-xl"
			/>
			<Image
				src={ourTeamPic}
				alt="our team at work jpg"
				placeholder="blur"
				className="row-start-2 row-end-3 col-start-4 col-end-5 w-full h-full rounded-[32px] shadow-xl"
			/>
		</div>
	);
};

export default Gallery;
