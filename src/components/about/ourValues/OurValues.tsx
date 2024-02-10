import { ourValuesData } from "@/data/data";
import { Articles } from "..";
import { Heading } from "../..";

const OurValues = () => {
	return (
		<section className="rounded shadow-xl bg-custom-dark-blue p-20 max-lg:p-10 max-md:p-5 dark:shadow-none">
			<Heading {...ourValuesData} />

			<p className="text-justify font-OpenSans font-normal text-lg leading-8 text-custom-white">
				Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass
				market crowdfunding iteration. Traction stock user experience deployment beta innovator
				incubator focus.
			</p>

			<Articles />
		</section>
	);
};

export default OurValues;
