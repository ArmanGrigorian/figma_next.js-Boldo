import { ourValuesArticles } from "@/data/data";
import { Article } from "..";

const Articles = () => {
	return (
		<div className="mt-20 max-lg:mt-10 max-md:mt-5">
			{ourValuesArticles.map((article) => (
				<Article key={article.id} {...article} />
			))}
		</div>
	);
};

export default Articles;
