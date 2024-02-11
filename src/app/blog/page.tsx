import { Header, OurNews } from "@/components/blogPage";

const page = () => {
	return (
		<main className="max-w-[1440px] m-auto dark:bg-custom-dark-blue">
			<Header />
			<OurNews />
		</main>
	);
};

export default page;
