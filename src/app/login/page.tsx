import LogInForm from "@/components/loginPage/LogInForm";

export default function LoginPage() {
	return (
		<main className="max-w-[1440px] m-auto dark:bg-custom-dark-blue">
			<h1 className="p-20 max-lg:p-10 max-md:p-5 text-shadow-lg text-custom-dark-blue text-6xl font-semibold leading-[72px] tracking-wide mb-4 max-md:text-4xl dark:text-custom-white">
				Sign in to stay connected and communicate with other people.
			</h1>

			<LogInForm />
		</main>
	);
}
