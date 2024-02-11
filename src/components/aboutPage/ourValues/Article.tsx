import { ArticleProps } from "@/types/types";
import Image from "next/image";

const Article = (article: ArticleProps) => {
	return (
		<article className="flex items-center gap-5 mt-5 flex-wrap">
			<Image
				src={article.imgSrc}
				width={140}
				height={140}
				alt={`${article.title} image`}
				className="block rounded-2xl min-w-[140px] h-[140px] min-h-[140px]"
			/>
			<div>
				<h4 className="text-custom-white font-OpenSans text-xl font-medium max-md:text-base">
					{article.title}
				</h4>
				<p className="font-OpenSans font-normal text-base text-custom-white max-md:text-sm">
					{article.text}
				</p>
			</div>
		</article>
	);
};

export default Article;
