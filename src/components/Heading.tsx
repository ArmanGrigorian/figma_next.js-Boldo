import { HeadingProps } from "@/types/types";

const Heading = (heading: HeadingProps) => {
	return (
		<div>
			<p
				className={`${heading.titleStyles} text-center font-normal font-OpenSans text-lg dark:text-custom-white`}>
				{heading.title}
			</p>

			<h2
				className={`${heading.textStyles} max-w-[842px] mx-auto text-center font-semibold text-[40px] leading-[72px] max-md:text-[28px] max-md:w-[90%] max-md:leading-[42px] max-sm:w-full dark:text-custom-white`}>
				{heading.text}
			</h2>
		</div>
	);
};

export default Heading;
