import { MemberProps } from "@/types/types";
import Image from "next/image";

const Member = (member: MemberProps) => {
	return (
		<figure>
			<Image
				src={member.avatar}
				width={300}
				height={354}
				alt={`${member.fullName} avatar`}
				className="block rounded-3xl shadow-xl"
			/>
			<figcaption className="mt-2 font-Manrope font-semibold text-lg leading-8 text-custom-black dark:text-custom-white">
				{member.fullName}
			</figcaption>
			<strong className="font-OpenSans font-normal text-custom-light-grey dark:text-custom-white">
				{member.role}
			</strong>
		</figure>
	);
};

export default Member;
