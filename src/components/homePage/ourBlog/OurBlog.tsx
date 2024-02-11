import { Heading } from "@/components";
import { ourBlogHeadingData } from "@/data/data";
import Blogs from "./Blogs";

const OurBlog = () => {
	return (
		<section className="px-20 max-lg:px-10 max-md:px-5">
			<Heading {...ourBlogHeadingData} />
			<Blogs />
		</section>
	);
};

export default OurBlog;
