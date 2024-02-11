import { BlogProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Blog = (blog: BlogProps) => {
	return (
		<article className="w-[max(22%,240px)] flex flex-col gap-9">
			<div>
				<Image
					src={blog.imgSrc}
					width={290}
					height={199}
					alt={blog.imgAlt}
					className="block w-full h-[209px] rounded-3xl shadow-xl"
				/>
				<p className="mt-3 text-custom-grey font-OpenSans text-sm font-normal leading-7  dark:text-custom-white">
					<strong className="leading-7 mr-2 font-OpenSans font-bold text-base text-custom-dark-blue dark:text-custom-white">
						Category
					</strong>
					{blog.date}
				</p>
				<p className="overflow-hidden whitespace-nowrap text-ellipsis font-normal text-base text-custom-black leading-8  dark:text-custom-white">
					<Link href="#">{blog.text}</Link>
				</p>
			</div>
			<div className="flex items-center gap-2">
				<Image
					src={blog.avatar}
					width={28}
					height={28}
					alt={`${blog.author}'s avatar`}
					className="block rounded-full shadow-xl w-8 h-8 dark:shadow-md dark:shadow-custom-grey"
				/>
				<p className="leading-7 font-OpenSans font-medium text-base text-custom-black  dark:text-custom-white">
					{blog.author}
				</p>
			</div>
		</article>
	);
};

export default Blog;
