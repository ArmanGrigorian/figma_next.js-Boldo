import { ourStoryData } from "@/data/data";
import { Heading } from "..";

const OurStory = () => {
	return (
		<section className="px-20 pb-20 max-lg:px-10 max-lg:pb-10 max-md:px-5 max-md:pb-5">
			<Heading {...ourStoryData} />

			<p className="text-justify font-OpenSans font-normal text-lg leading-8 text-custom-light-grey dark:text-custom-white">
				Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass
				market crowdfunding iteration. Traction stock user experience deployment beta innovator
				incubator focus. Sales user experience branding growth hacking holy grail monetization
				conversion prototype stock network effects. Learning curve network effects return on
				investment bootstrapping business-to-consumer.
			</p>
		</section>
	);
};

export default OurStory;
