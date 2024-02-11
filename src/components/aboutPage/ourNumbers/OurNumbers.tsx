import { ourNumbersData } from "@/data/data";
import { Achievements } from "..";
import { Heading } from "../..";

const OurNumbers = () => {
	return (
		<section className="rounded shadow-xl bg-custom-dark-blue p-20 max-lg:p-10 max-md:p-5 dark:shadow-none">
			<Heading {...ourNumbersData} />
			<Achievements />
		</section>
	);
};

export default OurNumbers;
