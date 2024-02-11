import { newsFeedData } from "@/data/data";
import { NewsFeedItem } from "..";

const NewsFeed = () => {
	return (
		<div className="flex flex-wrap justify-around gap-10 py-20 max-lg:py-10 max-lg:gap-5 max-md:py-5">
			{newsFeedData.map((newsFeedItem) => (
				<NewsFeedItem key={newsFeedItem.id} {...newsFeedItem} />
			))}
		</div>
	);
};

export default NewsFeed;
