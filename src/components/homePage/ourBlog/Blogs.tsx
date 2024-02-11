import { Button } from "@/components";
import { ourBlogsData } from "@/data/data";
import { Blog } from "..";

const Blogs = () => {
	return (
		<div>
			<div className="py-20 flex justify-around items-start gap-5 flex-wrap max-lg:gap-10 max-lg:py-10 max-md:py-5">
				{ourBlogsData.map((blog) => (
					<Blog key={blog.id} {...blog} />
				))}
			</div>

			<div className="grid place-items-center">
				<Button {...{ href: "/blog", title: "Load more" }} />
			</div>
		</div>
	);
};

export default Blogs;
