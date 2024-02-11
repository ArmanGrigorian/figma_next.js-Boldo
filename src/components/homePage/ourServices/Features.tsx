import { Heading } from "@/components";
import { featuresData, ourServicesHeadingData } from "@/data/data";

import { Feature } from "..";

const Features = () => {
	return (
		<div className="flex flex-col gap-10 p-10 max-md:p-5 max-md:gap-5 dark:bg-custom-dark-blue">
			<Heading {...ourServicesHeadingData} />

			<div className="flex justify-between items-top max-lg:flex-col">
				{featuresData.map((feature) => (
					<Feature key={feature.id} {...feature} />
				))}
			</div>
		</div>
	);
};

export default Features;
