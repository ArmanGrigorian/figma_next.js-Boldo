import Image from "next/image";

const Gallery = () => {
	return (
		<div className="grid grid-cols-4 grid-rows-2 gap-5">
			<Image
				src="/images/man.png"
				width={302}
				height={305}
				alt="man png"
				className="row-start-1 row-end-2 col-start-1 col-end-2 w-full h-full rounded-[32px] shadow-xl"
			/>
			<Image
				src="/images/woman.png"
				width={400}
				height={632}
				alt="woman png"
				className="row-start-1 row-end-3 col-start-2 col-end-4 w-full h-full rounded-[32px] shadow-xl"
			/>
			<Image
				src="/images/busyGuy.jpg"
				width={302}
				height={305}
				alt="busy guy jpg"
				className="row-start-2 row-end-3 col-start-1 col-end-2 w-full h-full rounded-[32px] shadow-xl"
			/>

			<Image
				src="/images/working.png"
				width={302}
				height={305}
				alt=""
				className="row-start-1 row-end-2 col-start-4 col-end-5 w-full h-full rounded-[32px] shadow-xl"
			/>
			<Image
				src="/images/ourTeam.jpg"
				width={302}
				height={305}
				alt="our team at work jpg"
				className="row-start-2 row-end-3 col-start-4 col-end-5 w-full h-full rounded-[32px] shadow-xl"
			/>
		</div>
	);
};

export default Gallery;
