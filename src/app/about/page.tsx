import { Header, OurNumbers, OurStory, OurTeam, OurValues } from "@/components/aboutPage";

const page = () => {
	return (
		<main className="max-w-[1440px] m-auto dark:bg-custom-dark-blue">
			<Header />
			<OurStory />
			<OurNumbers />
			<OurTeam />
			<OurValues />
		</main>
	);
};

export default page;
