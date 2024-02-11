import { teamMembers } from "@/data/data";
import { Member } from "..";

const Members = () => {
	return (
		<div className="mt-20 flex justify-around items-start gap-5 flex-wrap max-lg:mt-10 max-md:mt-5">
			{teamMembers.map((member) => (
				<Member key={member.id} {...member} />
			))}
		</div>
	);
};

export default Members;
