import { ourTeamData } from "@/data/data";
import { Members } from "..";
import { Heading } from "../..";

const OurTeam = () => {
	return (
		<section className="p-20 max-lg:p-10 max-md:p-5">
			<Heading {...ourTeamData} />

			<p className="text-justify font-OpenSans font-normal text-lg leading-8 text-custom-light-grey dark:text-custom-white">
				Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass
				market crowdfunding iteration. Traction stock user experience deployment beta innovator
				incubator focus.
			</p>

			<Members />
		</section>
	);
};

export default OurTeam;
