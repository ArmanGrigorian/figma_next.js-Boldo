import Image from "next/image";

const Subscribe = () => {
	return (
		<section className="relative overflow-hidden rounded-md shadow-xl bg-custom-dark-blue p-20 max-lg:p-10 max-md:p-5 dark:shadow-none">
			<Image
				src="/images/corner.png"
				width={700}
				height={205}
				alt="corner decoration"
				className="absolute top-0 -right-32 dark:hidden"
			/>

			<h2 className="relative z-10 max-w-[842px] mx-auto font-Manrope text-custom-white text-center font-semibold text-[40px] leading-[72px] max-md:text-[28px] max-md:w-[90%] max-md:leading-[42px] max-sm:w-full">
				An enterprise template to ramp up your company website
			</h2>

			<form
				action="#"
				method="POST"
				className="relative z-10 flex justify-center items-center gap-5 py-12 flex-wrap">
				<input
					type="email"
					name="subscribersEmail"
					placeholder="Your email address"
					required
					className="w-[50%] h-[54px] px-8 rounded-[56px] placeholder:font-OpenSans placeholder:text-lg placeholder:font-normal max-sm:w-full"
				/>

				<input
					type="submit"
					value="Subscribe"
					className="w-44 h-14 tracking-wide flex justify-center items-center rounded-[56px] border-2 border-custom-white border-solid text-custom-white text-lg font-bold bg-custom-dark-blue transition hover:bg-custom-green hover:text-custom-dark-blue hover:border-custom-green active:scale-95 select-none max-md:w-32 max-md:h-12 max-md:text-sm"
				/>
			</form>
		</section>
	);
};

export default Subscribe;
