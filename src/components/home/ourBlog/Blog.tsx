import { BlogProps } from "@/types/types";
import Image from "next/image";

const Blog = (blog: BlogProps) => {
	return (
		<article className="w-[max(24%,250px)] h-[400px] flex flex-col justify-between max-lg:gap-3">
			<div>
				<Image
					src={blog.imgSrc}
					width={300}
					height={209}
					alt={blog.imgAlt}
					className="w-full h-[209px] rounded-xl"
				/>
				<p className="mt-3 text-custom-grey font-OpenSans text-sm font-normal leading-7  dark:text-custom-white">
					<strong className="leading-7 mr-2 font-OpenSans font-bold text-base text-custom-dark-blue dark:text-custom-white">
						Category
					</strong>
					{blog.date}
				</p>
				<p className="font-normal text-base text-custom-black leading-8  dark:text-custom-white">
					{blog.text}
				</p>
			</div>
			<div className="flex items-center gap-2">
				<Image src={blog.avatar} width={32} height={32} alt={blog.imgAlt} />
				<p className="leading-7 font-OpenSans font-medium text-base text-custom-black  dark:text-custom-white">
					{blog.author}
				</p>
			</div>
		</article>
	);
};

export default Blog;
