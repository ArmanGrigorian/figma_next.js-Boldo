import { Header, OurBlog, OurServices,  } from "@/components/home";

export default function HomePage() {
	return (
		<main className="max-w-[1440px] m-auto dark:bg-custom-dark-blue">
			<Header />
			<OurServices />
			<OurBlog />
		</main>
	);
}
