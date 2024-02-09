import Blogs from "./Blogs";

const OurBlog = () => {
	return (
		<section className="px-20 pb-20 max-lg:px-10 max-lg:pb-10 max-md:px-5 max-md:pb-5">
			<div>
				<p className="text-center text-custom-light-grey font-normal font-OpenSans text-lg">
					Our Blog
				</p>

				<h2 className="max-w-[842px] mx-auto text-center font-semibold text-[40px] text-custom-black leading-[72px] max-md:text-[28px] max-md:w-[90%] max-md:leading-[42px] max-sm:w-full">
					Value proposition accelerator product management venture
				</h2>
			</div>

			<Blogs />
		</section>
	);
};

export default OurBlog;
