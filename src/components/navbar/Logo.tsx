import Image from "next/image";
import Link from "next/link";

const Logo = ({ textColor }: { textColor: string }) => {
	return (
		<Link href="/" className="flex justify-start items-center gap-1">
			<Image
				src="/images/logoShape.svg"
				width={26}
				height={33}
				alt="Boldo logo svg"
				priority
				className="max-md:w-[18px] max-md:h-[25px]"
			/>
			<strong
				className={`${textColor} "font-bold text-4xl hover:text-custom-green max-md:text-2xl"`}>
				Boldo
			</strong>
		</Link>
	);
};

export default Logo;
