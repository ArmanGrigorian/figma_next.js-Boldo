import { BlogProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const NewsFeedItem = (newsFeedItem: BlogProps) => {
	return (
		<article className="w-[min(100%,300px)] flex flex-col gap-9">
			<div>
				<Image
					src={newsFeedItem.imgSrc}
					width={290}
					height={199}
					alt={newsFeedItem.imgAlt}
					className="block w-full aspect-[9/7] rounded-3xl shadow-xl"
				/>
				<p className="mt-3 text-custom-grey font-OpenSans text-sm font-normal leading-7  dark:text-custom-white">
					<strong className="leading-7 mr-2 font-OpenSans font-bold text-base text-custom-dark-blue dark:text-custom-white">
						Category
					</strong>
					{newsFeedItem.date}
				</p>
				<p className="overflow-hidden whitespace-nowrap text-ellipsis font-normal text-base text-custom-black leading-8  dark:text-custom-white">
					<Link href="#">{newsFeedItem.text}</Link>
				</p>
			</div>
			<div className="flex items-center gap-2">
				<Image
					src={newsFeedItem.avatar}
					width={32}
					height={32}
					alt={`${newsFeedItem.author}'s avatar`}
					className="block rounded-full shadow-xl w-8 h-8 dark:shadow-md dark:shadow-custom-grey"
				/>
				<h5 className="leading-7 font-OpenSans font-medium text-base text-custom-black  dark:text-custom-white">
					{newsFeedItem.author}
				</h5>
			</div>
		</article>
	);
};

export default NewsFeedItem;
