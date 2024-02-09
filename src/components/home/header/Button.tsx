import { ButtonProps } from "@/types/types";
import Link from "next/link";

const Button = (button: ButtonProps) => {
	return (
		<Link
			href={button.href}
			className="w-44 h-14 tracking-wide flex justify-center items-center rounded-[56px] border-2 border-custom-white border-solid text-custom-white text-lg font-bold bg-custom-dark-blue hover:bg-custom-green hover:text-custom-dark-blue hover:border-custom-green active:scale-95 select-none max-md:w-32 max-md:h-12 max-md:text-sm">
			{button.title}
		</Link>
	);
};

export default Button;
