import { Header, OurBlog, OurServices, Subscribe } from "@/components/home";

export default function HomePage() {
	return (
		<main className="max-w-7xl m-auto">
			<Header />
			<OurServices />
			<OurBlog />
			<Subscribe />
		</main>
	);
}
