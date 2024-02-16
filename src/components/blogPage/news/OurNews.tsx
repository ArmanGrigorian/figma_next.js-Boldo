import { Bottom, NewsFeed } from "..";

const OurNews = () => {
	return (
		<section className="border-t pt-20 mx-20 max-lg:pt-10 max-lg:mx-10 max-md:pt-5 max-md:mx-5">
			<h2 className="font-Manrope font-semibold text-[40px] leading-[72px] max-md:text-[28px]  max-md:leading-[42px] max-sm:w-full dark:text-custom-white">
				Latest news
			</h2>

			<NewsFeed />

			<Bottom />
		</section>
	);
};

export default OurNews;
